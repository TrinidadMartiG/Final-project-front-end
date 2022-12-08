import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

function RegistrationForm() {
    return (
        <>
            <div className="row mt-5">
                <div className="col-lg-4 bg-white m-auto">
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
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">
                                    <span class="input-group-text" id="basic-addon1">Password</span>
                                </label>
                            </div>
                            <div class="col-auto">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                            
                            <button className="btn btn-primary my-5"> Sign up! </button>
                            <li>
                        <Link to="/" className="button button-primary button-wide-mobile button-sm">Back to Home</Link>
                      </li>
                    </form>
                </div>
            </div>
        </>
    )
};

export default RegistrationForm;