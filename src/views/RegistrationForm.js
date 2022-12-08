import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

function RegistrationForm() {
    return (
        <>
            <div className="row mt-5">
                <div className="col-lg-4 border border-white m-auto mx-auto text-center">
                    <h2 className="text-center pt-3">Sign up form</h2>
                    {/* Form start */}
                    <form id="form" action="#" className="">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><FaUserAlt /></span>
                            <input type="text" class="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Email</span>
                            <input type="email" class="form-control" placeholder="Example@mail.com" aria-label="Email" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Password</span>
                            <input type="password" id="inputPassword6" class="form-control" placeholder="*******" aria-label="password" aria-describedby="passwordHelpInline" />
                        </div>

                        <button className="btn btn btn-dark my-2"> Sign up! </button>
                        <br />
                            <Link to="/" className="btn btn btn-dark my-2">Back to Home</Link>
                    </form>
                </div>
            </div>
        </>
    )
};

export default RegistrationForm;