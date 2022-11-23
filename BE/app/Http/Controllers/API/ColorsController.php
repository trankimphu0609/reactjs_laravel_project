<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ColorDetails;
use App\Models\Colors;
use App\Models\SizeDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ColorsController extends Controller
{
    public function add(Request $request){
        $color = new Colors();
        $color->name = $request->input('name');

        $color->save();

        return response()->json([
            'status' => 200,
            'message' => 'Color added successfully'
        ]);
    }
    public function index(Request $request){
        $color = Colors::all();

        return response()->json([
            'status' => 200,
            'colors' => $color
        ]);
    }
    public function edit($id){
        $color = Colors::find($id);

        return response()->json([
            'status' => 200,
            'colors' => $color
        ]);
    }
    public function getByIDPro($id){
        $colors  = DB::table('colors')
            ->select('colors.id', 'colors.name')
            ->join('colordetails', 'colordetails.idColor', '=', 'colors.id')
            ->where('colordetails.idProduct', $id)
            ->get();
        return response()->json([
            'status' => 200,
            'colors' => $colors,
        ]);
    }
    public function update(Request $request,$id){
        $color = Colors::find($id);
        $color->name = $request->input('name');

        $color->update();

        return response()->json([
            'status' => 200,
            'message' => 'Color updated successfully'
        ]);
    }
    public function delete($id){
        $color = Colors::find($id);
        $color->delete();
        return response()->json([
            'status' => 200,
            'message' => "color Deleted Successfully "
        ]);
    }
}
