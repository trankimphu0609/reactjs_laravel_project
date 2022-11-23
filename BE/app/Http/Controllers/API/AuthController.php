<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Members;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request){
        $mess = [
            'user.required'=>"User not null !",
            'pass.required'=>"Vui long nhap pass !",
        ];
        $vali = Validator::make($request->all(),[
            'user' => 'required',
            'pass' => 'required'
        ],$mess);
        if($vali->fails()){
            return response()->json([
                'status' => 404,
                'message' => 'login Successfully',
                'data' => $mess
            ]);
        }
        $data = [
            'name' =>$request->name,
            'email' => $request->user,
            'phone' => $request->phone,
            'address' => $request->address,
            'password' => Hash::make($request->pass),

        ];
        User::create($data);

        return response()->json([
            'status' => 200,
            'message' => 'Register Successfully',
            'data' => $data
        ]);
    }
    public function login(Request $request){

        $user = User::where('email',$request->user)->first();
        if(!$user || !Hash::check($request->pass,$user->password,[])){
            return response()->json([
                'status' => 404,
                'message' => 'User not Exits',
            ]);
        }
        $token = $user->createToken('authToken')->plainTextToken;
        return response()->json([
            'status' => 200,
            'message' => 'login Successfully',
            'access_Token' => $token
        ]);
    }
    public function user(Request $request){
        return $request->user();

    }
    public function logout(){
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'logout Successfully',

        ]);
    }
}
