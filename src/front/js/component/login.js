import React from "react";

const Login = () => {
  return (
    <form>
      <div class="mb-3 row">
        <label for="exampleFormControlInput1" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            value="email@example.com"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="col-12">
    <button class="btn btn-primary" type="submit">Login</button>
  </div>
    </form>
  );
};

export default Login;
