import React from "react";

const Login = () => {
    return (
        <form className="">
            <div className="mb-3 row">
                <label htmlFor="exampleFormControlInput1" className=" col-sm-4 col-form-label">
                    Email
                </label>
                <div className="col-md-8">
                    <input
                        type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                    />
                </div>
            </div>
            <div class="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                    Password
                </label>
                <div className="col-md-8">
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Login</button>
            </div>
        </form>
    );
};

export default Login;
