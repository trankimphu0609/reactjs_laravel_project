<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Sizes;
use Illuminate\Http\Request;

class SizesController extends Controller
{
    public function add(Request $request){
        $size = new Sizes();
        $size->name = $request->input('name');

        $size->save();

        return response()->json([
            'status' => 200,
            'message' => 'size added successfully'
        ]);
    }
    public function index(Request $request){
        $size = Sizes::all();

        return response()->json([
            'status' => 200,
            'sizes' => $size
        ]);
    }
    public function edit($id){
        $size = Sizes::find($id);

        return response()->json([
            'status' => 200,
            'sizes' => $size
        ]);
    }
    public function update(Request $request,$id){
        $size = Sizes::find($id);
        $size->name = $request->input('name');

        $size->update();

        return response()->json([
            'status' => 200,
            'message' => 'size updated successfully'
        ]);
    }
    public function delete($id){
        $size = Sizes::find($id);
        $size->delete();
        return response()->json([
            'status' => 200,
            'message' => "size Deleted Successfully "
        ]);
    }
}
