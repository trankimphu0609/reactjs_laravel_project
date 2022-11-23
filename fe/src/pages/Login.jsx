import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Dashboard from "../pages/admin/Dashboard";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
export default function SignInPage() {
  const [user,setUser] = useState();
  const [pass,setPass] = useState();
  const history = useHistory();

  const submitForm = async()=>{
    const state ={
      'user': user,
      'pass': pass
    }
    const res = await axios.post(
      "http://localhost:8000/api/login",
      state,{
        headers: { "Access-Control-Allow-Origin": "*" }
      }
    );
    if (res.data.status === 200) {
      swal("Success","Đăng nhập thành công","success");
      localStorage.setItem("accessToken",res.data.access_Token);
      console.log(res.data.message);
      history.replace("/")
    }else{
      swal("Error","Tài khoản hoặc mật khẩu không đúng","error");
    }
  }
  return (
    <div className="text-center col-3" style={{margin: '0 auto'}} >
      {/* <form style={{border: '1px solid ', color: 'white', }} onSubmit={submitForm}> */}
        <div style={{backgroundColor: 'lightseagreen', padding: '10px'}}><h2 >Login Form</h2></div>
        <div className="content" style={{padding: '15px', backgroundColor: '#eee'}}>
          <div class="form-group">
            <label style={{color: 'black'}} for="lblEmail">Enter User</label>
            <i class="fas fa-user"></i>
            <input style={{borderRadius:'0px'}}
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={e=>setUser(e.target.value)}
              // pattern="^[\D\.]+@([\w-]+\.)+[\w-]{2,4}$"
            />
            
          </div>
          <br />
          <div class="form-group">
            <label style={{color: 'black'}} for="lblPassowrd">Enter Password</label>
            <input style={{borderRadius:'0px'}}
              type="password"
              class="form-control"  
              id="password"
              placeholder="Password"
              onChange={e=>setPass(e.target.value)}
            />
          </div>
          <br /> 
          <button style={{backgroundColor: 'lightseagreen', border: 'none', borderRadius:'0px'}} onClick={submitForm} type="submit" class="btn btn-primary">
            Login
          </button>
        </div>
        
      {/* </form> */}
    </div>
  );
}
