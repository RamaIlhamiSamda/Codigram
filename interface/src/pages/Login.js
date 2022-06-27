import React, { useState, useEffect } from "react";
import axios from "axios";
import internet from "../image/internet.jpg";
import { useNavigate } from "react-router-dom";
import AddUser from "../components/AddUser";

const Login = (props) => {
  const { loginStatus, loginCbHandler } = props;
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    try {
      let result = await axios({
        method: "POST",
        url: "http://localhost:3000/user/login",
        data: form,
      });
      const access_token = result.data.aksesToken;
      localStorage.setItem("access_token", access_token);
      // console.log(result.data)
      setForm(result.data);
      loginCbHandler(true);
    } catch (err) {
      console.log(err);
    }
  };
  const Navigate = useNavigate();

  const submitHandler = () => {
    loginUser();
    Navigate("/home");
  };

  return (
    <>
      <div className="login-all">
        <div className="login">
          <h4 className="codigram"> CODIGRAM</h4>
          <form>
            <input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="text"
              placeholder="input email"
            />
            <input
              className="input-2"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="text"
              type="password"
              placeholder="input password"
            />
            <button className="button" onClick={() => submitHandler()}>
              Login
            </button>
          </form>
        </div>
        <img className="img-login" src={internet} />
      </div>
      <div className = "addUser">
      <AddUser loginStatus = {loginStatus} loginCbHandler = {loginCbHandler}></AddUser>
      </div>
    </>
  );
};

export default Login;
