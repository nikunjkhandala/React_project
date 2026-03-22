import React, { useState } from "react";

const AuthForm = () => {
  const [islogin, setIslogin] = useState(true);

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={islogin ? "active" : ""}
            onClick={() => {
              setIslogin(true);
            }}
          >
            Login
          </button>
          <button
            className={!islogin ? "active" : ""}
            onClick={() => {
              setIslogin(false);
            }}
          >
            SignUp
          </button>
        </div>
        {islogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />

              <a href="#">Forgot Password?</a>
              <button>Login</button>
              <p>Not a Member? Signup now</p>
            </div>
          </>
        ) : (
          <div className="form">
            <h2>Signup Form</h2>
            <input type="email" placeholder="Email Address" />
                          <input type="password" placeholder="Password" />
                          <input type="password" placeholder="Confirm Password" />
                          <button>Signup</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
