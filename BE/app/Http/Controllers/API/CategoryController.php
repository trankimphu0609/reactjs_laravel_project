<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function add(Request $request){
        $Category = new category();
        $Category->name = $request->input('name');

        $Category->save();

        return response()->json([
            'status' => 200,
            'message' => 'Category added successfully'
        ]);
    }
    public function index(Request $request){
        $Category = Category::all();

        return response()->json([
            'status' => 200,
            'categorys' => $Category
        ]);
    }
    public function edit($id){
        $Category = Category::find($id);

        return response()->json([
            'status' => 200,
            'categorys' => $Category
        ]);
    }
    public function update(Request $request,$id){
        $Category = Category::find($id);
        $Category->name = $request->input('name');

        $Category->update();

        return response()->json([
            'status' => 200,
            'message' => 'Category updated successfully'
        ]);
    }
    public function delete($id){
        $Category = Category::find($id);
        $Category->delete();
        return response()->json([
            'status' => 200,
            'message' => "Category Deleted Successfully "
        ]);
    }
}
