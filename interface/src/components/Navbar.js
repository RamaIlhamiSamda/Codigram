import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const Navbar = (props) => {
  const {loginStatus, loginCbHandler} = props;

  const Navigate = useNavigate()
  const loginHandler = () => {
    loginCbHandler(true);
  };
  const logoutHandler = () => {
    localStorage.clear()
    loginCbHandler(false);
    Navigate('/login')

  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-info">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="">
            CODIGRAM
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active text-light" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="/user">
                  Users
                </a>
              </li>
              <li class="nav-item">
                {loginStatus ? (
                  <a
                    className=" nav-link text-light" href = "/login"
                    onClick={() => logoutHandler()}
                  >
                    Logout
                  </a>
                ) : (
                  <a
                    className=" nav-link text-light" href = "#"
                    onClick={() => loginHandler()}
                  >
                    Login
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
