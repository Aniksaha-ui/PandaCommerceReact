import React from "react";
import Header from "../../layout/Header";
import register from "../../../images/auth/register.jpg";
import { useState } from "react";
import axios from "axios";
export default function Register() {
  const [registerInput, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    };

    axios.post(`/api/register`, data).then((res) => {});

    // console.log(data);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Register</h1>
      <div className="row d-flex align-items-center justify-content-center row-cols-lg-2 row-cols-md-2 row-cols-1 g-4 mt-5">
        <div className="col">
          <img src={register} className="img-fluid" alt="" />
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center text-primary">
                Give Your Information
              </h1>
            </div>

            <div className="card-body">
              <form onSubmit={registerSubmit} className="my-3 p-4">
                <div className="form-group mb-3">
                  <input
                    placeholder="Enter Your Name"
                    type="text"
                    className="form-control py-2"
                    name="name"
                    onChange={handleInput}
                    value={registerInput.name}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    placeholder="Enter Your Email"
                    type="text"
                    className="form-control py-2"
                    name="email"
                    onChange={handleInput}
                    value={registerInput.email}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    placeholder="Enter Your Password"
                    type="text"
                    className="form-control py-2"
                    name="password"
                    onChange={handleInput}
                    value={registerInput.password}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    placeholder="Confirm Password"
                    type="text"
                    className="form-control py-2"
                    name="confirmPassword"
                    onChange={handleInput}
                    value={registerInput.password1}
                  />
                </div>

                <div className="form-group button-center-by-ms mb-3">
                  <button
                    type="submit"
                    className="btn btn-success button-align-center "
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
