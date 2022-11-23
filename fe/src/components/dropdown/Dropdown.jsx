import axios from "axios";
import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";

import "./dropdown.css";

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

const Dropdown = (props) => {
  const dropdown_toggle_el = useRef(null);
  const dropdown_content_el = useRef(null);
  const Logout = async () => {
    // const history = useHistory();

    // const res = await axios.post(
    //   "http://localhost:8000/api/logout",
    //   { headers: {'Authorization' : `Bearer ${localStorage.getItem('accessTokenAdmin')}`} }
    // );
    swal("Success","Đăng xuất thành công","success");
    localStorage.removeItem("accessTokenAdmin");
    // localStorage.removeItem("user");
    // history.replace('/admin')
    console.log(1);
  };
  clickOutsideRef(dropdown_content_el, dropdown_toggle_el);

  return (
    <div className="dropdown">
      <button ref={dropdown_toggle_el} className="dropdown__toggle">
        {props.icon ? <i className={props.icon}></i> : ""}
        {props.badge ? (
          <span className="dropdown__toggle-badge">{props.badge}</span>
        ) : (
          ""
        )}
        {props.customToggle ? props.customToggle() : ""}
      </button>
      <div ref={dropdown_content_el} className="dropdown__content">
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : ""}
        {
          <>
          <Link to="/admin" onClick={Logout} >
                      <div className="notification-item" >
                        <i className={'bx bx-log-out-circle bx-rotate-180'} ></i>
                        <span>Logout</span>
                      </div>
                    </Link>
                  </>
        }  
        {props.renderFooter ? (
          <div className="dropdown__footer">{props.renderFooter()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dropdown;
