import React from "react";
import { Link, useHistory } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { async } from "@firebase/util";

const Logout = async () => {
    const history = useHistory();
    history.replace('/admin/login')
  
    const res = await axios.post(
      "http://localhost:8000/api/logout",
      { headers: {'Authorization' : `Bearer ${localStorage.getItem('accessTokenAdmin')}`} }
    );
    if (res.data.status === 200) {
      swal("Success","Đăng xuất thành công","success");
      localStorage.removeItem("accessTokenAdmin");
      console.log(res.data.message);
    //   history.replace("/admin")
    }else{
        swal("Success","Đăng xuất thành công","success");
    }
    return(
        <p></p>
    )
  };


  

export default Logout;