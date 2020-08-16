import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/MyContext";

const Login = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [loginButton, setLoginButton] = useState("Log In");
  const login = (event) => {
    event.preventDefault();
    setLoginButton("Please wait...");
    setTimeout(() => {
      setAuth(true);
      setLoginButton("Success");
    }, 3000);
  };
  useEffect(() => {
    document.title = "Login";
  });
  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body p-5">
              <img
                src="https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=50"
                alt="Instagram"
                className="d-block mx-auto"
              />
              <form className="my-4">
                <input
                  type="text"
                  className="form-control form-control-sm bg-light"
                  placeholder="Phone number, username, or email"
                />
                <input
                  type="text"
                  className="form-control form-control-sm bg-light my-3"
                  placeholder="Password"
                />
                <button
                  className="btn btn-sm btn-block btn-primary"
                  onClick={login}
                >
                  {loginButton}
                </button>
              </form>
              <hr />
              <p className="font-weight-bold text-muted text-center">OR</p>
              <p className="text-center text-primary m-0">
                Login with Facebook
              </p>
              <small className="text-muted">Forgot password ?</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
