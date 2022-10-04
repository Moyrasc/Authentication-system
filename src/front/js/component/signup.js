import React, { useState } from "react";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form className="register">
        <div className="mb-3 row">
          <label
            htmlFor="exampleFormControlInput1"
            className=" col-sm-4 col-form-label"
          >
            Username
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor="exampleFormControlInput2"
            className=" col-sm-4 col-form-label"
          >
            Email
          </label>
          <div className="col-md-8">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
            Password
          </label>
          <div className="col-md-8">
            <input
              type="password"
              className="form-control"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Signup
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
