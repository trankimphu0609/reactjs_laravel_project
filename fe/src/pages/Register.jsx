import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";

// import '../../App.css'

export default function SignUpPage() {
  const history = useHistory();
  const [member, setMember] = useState({
    name: "",
    user: "",
    phone: "",
    address: "",
    pass: "",

  });
  const [pass,setPass] = useState();

  const handleInput = (e) => {
    e.persist();
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  const submitForm = async () => {
    const formData = new FormData();
    formData.append("name", member.name);
    formData.append("user", member.user);
    formData.append("phone", member.phone);
    formData.append("address", member.address);
    formData.append("pass", pass);
    const res = await axios.post(
      "http://localhost:8000/api/register",formData,{
        headers: { "Access-Control-Allow-Origin": "*" }
      },
      
    );
    if (res.data.status === 200) {
      swal("Success", "Đăng ký thành công", "success");
      // localStorage.setItem("accessTokenAdmin",res.data.access_Token);
      // console.log(res.data.message);
      history.replace("/login")
    } else {
      swal("Error", "Đăng ký thất bại", "error");
    }
  }
  return (
    <div className="text-center col-3" style={{ margin: '0 auto' }} >
      {/* <form style={{border: '1px solid ', color: 'white', }}> */}
      <div style={{ backgroundColor: 'lightseagreen', padding: '10px' }}><h2 >Signup Form</h2></div>

      <div className="content" style={{ padding: '15px', backgroundColor: '#eee' }}>

        <div class="form-group">
          <label style={{ color: 'black' }} for="lblFullname">Fullname</label>
          <input style={{ borderRadius: '0px' }}
            type="text"
            class="form-control"
            onChange={handleInput}
            name="name"
            value={member.name}
            placeholder="Enter your fullname"
            pattern="^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s|_]+$"
          />
        </div>

        <br />


        <div class="form-group">
          <label style={{ color: 'black' }} for="lblPhone">Phone Number</label>
          <input style={{ borderRadius: '0px' }}
            type="text"
            class="form-control"
            id="phone"
            name="phone"
            value={member.phone}
            onChange={handleInput}
            aria-describedby="emailHelp"
            placeholder="Enter phonenumber"
            pattern="(?=.*[0-9]).{10}"
          />
        </div>
        <br />

        <div class="form-group">
          <label style={{ color: 'black' }} for="lblEmail">Address</label>
          <input style={{ borderRadius: '0px' }}
            type="text"
            name="address"
            class="form-control"
            value={member.address}
            onChange={handleInput}
            aria-describedby="emailHelp"
            placeholder="Enter Address"
          // pattern="^[\D\.]+@([\w-]+\.)+[\w-]{2,4}$"
          />

        </div>
        <br />

        <div class="form-group">
          <label style={{ color: 'black' }} for="lblEmail">User Login</label>
          <input style={{ borderRadius: '0px' }}
            type="text"
            class="form-control"
            id="email"
            name="user"
            value={member.user}
            onChange={handleInput}
            aria-describedby="emailHelp"
            placeholder="Enter User"
          // pattern="^[\D\.]+@([\w-]+\.)+[\w-]{2,4}$"
          />

        </div>

        {/* Password contains 8 length at least 1 number, 1 char special, 1 upercase, 1 lowercase */}
        <br />
        <div class="form-group">
          <label style={{ color: 'black' }} for="lblPassword">Password</label>
          <input style={{ borderRadius: '0px' }}
            type="password"
            class="form-control"
            id="password"
            name="pass"
            onChange={e=>setPass(e.target.value)}
            placeholder="Enter password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          />
        </div>

        <br />
        <button style={{ backgroundColor: 'lightseagreen', border: 'none', borderRadius: '0px' }} onClick={submitForm} type="submit" class="btn btn-primary">
          Sign up
        </button>

      </div>

      {/* </form> */}

    </div>
  );
}
