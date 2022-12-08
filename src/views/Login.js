import React from "react";
import { Link, useParams } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="row mt-5 ">
                <h2 className="mx-auto text-center p-3">Log in</h2>
                <div className="col-lg-4 border border-white m-auto mx-auto text-center">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputUser" class="form-label">User</label>
                            <input type="text" class="form-control" id="exampleInputUser" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" class="btn btn-dark">Enter</button>
                    </form>
                    <Link to='/' >
                        <button className="btn btn-dark my-5 ">Back to home</button>
                    </Link>
                </div>
            </div>
        </>
    )
};

export default Login;
