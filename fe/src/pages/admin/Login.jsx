import React from "react";
import { Link, useHistory } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Login = () => {
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
      localStorage.setItem("accessTokenAdmin",res.data.access_Token);
      console.log(res.data.message);
      history.replace("/admin")
    }else{
      swal("Error","Tài khoản hoặc mật khẩu không đúng","error");
    }
  }

  return (
        <div className=" row justify-content-center pt-5" style={{margin: '150px auto'}}>
          <div className=" col-sm-3">
            <div className=" card p-4" style={{backgroundColor: '#eff'}}>
              <center><h3>ADMIN LOGIN</h3></center>
              <div className="form-group mt-3">
                <input type="text" className="form-control" placeholder="Email" id="email"
                onChange={e=>setUser(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group mt-3">
                <input
                onChange={e=>setPass(e.target.value)}
                  type="password" className="form-control" placeholder="Password"  id="password"
                />
              </div>

              <div class="d-flex justify-content-center">
                <button onClick={submitForm} type="button" class="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default Login;