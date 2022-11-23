<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ColorDetails;
use App\Models\Colors;
use App\Models\Product;
use App\Models\SizeDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function store(Request $request)
    {
        try {
            $product = new Product;
            $product->title = $request->input('title');
            $product->price = $request->input('price');
            if($request->input('image01') != '1'){
                $product->image01 = $request->input('image01');
            }
            if($request->input('image02') != '1'){
                $product->image02 = $request->input('image02');
            }
            $product->categorySlug = $request->input('categorySlug');
            $product->status = $request->input('status');
            $product->qty = $request->input('qty');
            $product->description = $request->input('description');
            $product->save();
            $colors = $request->input('colors');
            $sizes = $request->input('sizes');
            $mes = '';
            $id = DB::table('products')
                ->latest()
                ->first();

            if (strpos($sizes, ',') !== false) {
                foreach (explode(',', $sizes) as $value) {
                    $size = new SizeDetails;
                    $size->idSize = $value;
                    $size->idProduct = $id->id;
                    $size->save();
                }
            } else {
                if ($sizes != '') {
                    $size = new SizeDetails;
                    $size->idSize = $sizes;
                    $size->idProduct = $id->id;
                    $size->save();
                }
            }
            if (strpos($colors, ',') !== false) {
                foreach (explode(',', $colors) as $value) {
                    $color = new ColorDetails;
                    $color->idColor = $value;
                    $color->idProduct = $id->id;
                    $color->save();
                }
            } else {
                if ($colors != '') {
                    $color = new ColorDetails;
                    $color->idColor = $colors;
                    $color->idProduct = $id->id;
                    $color->save();
                }
            }

            // if($colors !=''){
            //     $color = new ColorDetails;
            //     $color->idColor = $product->categorySlug;
            //     $color->idProduct = $id;
            //     $color->save();
            // }


            return response()->json([
                'status' => 200,
                'message' => 'Product added successfully' . $mes . " ID " . $id->id
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 200,
                'message' => $th . 'Product added Not successfully' . $mes . " ID " . $id->id
            ]);
        }
    }
    public function index(Request $request)
    {
        $product = Product::all();
        //$product = DB::select('SELECT * FROM products');

        return response()->json([
            'status' => 200,
            'products' => $product
        ]);
    }
    public function edit($id)
    {
        $product = Product::find($id);
        $colors  = DB::table('colors')
            ->select('colors.id', 'colors.name')
            ->join('colordetails', 'colordetails.idColor', '=', 'colors.id')
            ->where('colordetails.idProduct', $id)
            ->get();
        $sizes = DB::table('sizes')
            ->select('sizes.id', 'sizes.name')
            ->join('sizedetails', 'sizedetails.idSize', '=', 'sizes.id')
            ->where('sizedetails.idProduct', $id)
            ->get();
        $productSame = Product::where('categorySlug', $product->categorySlug)->get();
        return response()->json([
            'status' => 200,
            'products' => $product,
            'colors' => $colors,
            'sizes' => $sizes,
            'productsSame' => $productSame
        ]);
    }
    public function update(Request $request, $id)
    {

        try {
            $product = Product::find($id);
            $product->title = $request->input('title');
            $product->price = $request->input('price');
            if($request->input('image01') != '1'){
                $product->image01 = $request->input('image01');
            }
            if($request->input('image02') != '1'){
                $product->image02 = $request->input('image02');
            }
            $product->categorySlug = $request->input('categorySlug');
            $product->status = $request->input('status');
            $product->qty = $request->input('qty');
            $product->description = $request->input('description');
            $product->update();
            $colors = $request->input('colors');
            $sizes = $request->input('sizes');
            $mes = 'vvv';

            if (strpos($colors, ',') !== false) {
                ColorDetails::where('idProduct', $id)->delete();
                foreach (explode(',', $colors) as $value) {
                    $color = new ColorDetails;
                    $color->idColor = $value;
                    $color->idProduct = $id;
                    $color->save();
                }
            } else {
                if ($colors != '') {
                    ColorDetails::where('idProduct', $id)->delete();
                    $color = new ColorDetails;
                    $color->idColor = $colors;
                    $color->idProduct = $id;
                    $color->save();
                }
            }



            if (strpos($sizes, ',') !== false) {
                SizeDetails::where('idProduct', $id)->delete();
                foreach (explode(',', $sizes) as $value) {
                    $size = new SizeDetails;
                    $size->idSize = $value;
                    $size->idProduct = $id;
                    $size->save();
                }
            } else {
                if ($sizes != '') {
                    SizeDetails::where('idProduct', $id)->delete();
                    $size = new SizeDetails;
                    $size->idSize = $sizes;
                    $size->idProduct = $id;
                    $size->save();
                }
            }


            return response()->json([
                'status' => 200,
                'message' => 'Product Updated successfully' . $mes . " ID " . $id
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 200,
                'message' => $th . 'Product Updated Not successfully' . $mes . " ID " . $id
            ]);
        }
    }
    public function delete($id)
    {
        $product = Product::find($id);
        SizeDetails::where('idProduct', $id)->delete();
        ColorDetails::where('idProduct', $id)->delete();
        $product->delete();
        return response()->json([
            'status' => 200,
            'message' => "Product Deleted Successfully "
        ]);
    }
}
