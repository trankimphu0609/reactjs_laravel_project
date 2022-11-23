<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Oder;
use App\Models\OderDetails;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OderController extends Controller
{
    //
    public function index(Request $request) {
        $oder = Oder::all();
        return response() -> json([
            'status' => 200,
            'order' => $oder
        ]);
    }
    public function add(Request $request){
        $oder = new Oder();
        $oder->memberID = $request->input('memberID');
        $oder->memberName = $request->input('memberName');
        $oder->phone = $request->input('phone');
        $oder->status = $request->input('status');
        $oder->address = $request->input('address');

        $carts = $request->input('cart');
        $cost = 0;

        $t ='';
        $pro = new Product();

        foreach ($carts as $key => $value) {
            $cost += $carts[$key]['price']*(int)$carts[$key]['quantity'];
            $pro = Product::find($carts[$key]['id']);
            $pro->qty = $pro->qty - (int)$carts[$key]['quantity'];
            $t .= (int)$pro->qty ;
            $pro->update();
        }
        $oder->cost = $cost;

        $oder->save();
        $id = DB::table('oder')
                ->latest()
                ->first();

        foreach ($carts as $key => $value) {
            $cost += $carts[$key]['price'];
            $oderDetai = new OderDetails;
            $oderDetai->productID = $carts[$key]['id'];
            $oderDetai->oderID = $id->id;
            $oderDetai->name = $carts[$key]['name'];
            $oderDetai->price = $carts[$key]['price'];
            $oderDetai->qty = $carts[$key]['quantity'];
            $oderDetai->colorID = $carts[$key]['colorID'];
            $oderDetai->sizeID = $carts[$key]['sizeID'];
            $oderDetai->total = $carts[$key]['price'] * $carts[$key]['quantity'];
            $oderDetai->save();
        }

        return response()->json([
            'status' => 200,
            'message' => $oderDetai
        ]);
    }
    public function getByID(Request $request, $id) {
        $rs = Oder::where('memberID', $id)->get();
        return response()->json([
            'status' => 200,
            'order' => $rs
        ]);
    }
    public function update(Request $request,$id){
        $rs = Oder::find($id);
        $rs->status = $request->input('status');

        $rs->update();
        $oder = Oder::all();
        return response()->json([
            'status' => 200,
            'message' => 'Oder updated successfully',
            'order' => $oder
        ]);
    }

}
