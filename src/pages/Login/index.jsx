import React, { useState } from "react";
import "./index.css";
import { FaAtlassian, FaUserAlt, FaLock } from "react-icons/fa";
export default function LoginPage(props) {
  return (
    <div className="user-login">
      <div className="form-login">
        <form action="">
          <div className="form-header">
            <div className="form-logo">
              <FaAtlassian />
            </div>
            <div className="form-title">LOGIN</div>
          </div>
          <div className="form-body">
            <div className="username">
              <input id="username" type="text" placeholder="Username" />

              <div className="form-logo-input">
                <FaUserAlt />
              </div>
            </div>
            <div className="password">
              <input id="password" type="password" placeholder="Password" />
              <div className="form-logo-input">
                <FaLock />
              </div>
            </div>
            <div className="remember-me">
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  // defaultValue="Bike"
                />
                <label htmlFor="remember">Remember me</label>
              </div>
            </div>
          </div>
          <div className="form-footer">
            <div className="form-button">
              <button className="btn-login-form-input">Login</button>
            </div>
            {/* <a href="#">Forgot Password</a> */}
          </div>
        </form>
      </div>
    </div>
  );
}
