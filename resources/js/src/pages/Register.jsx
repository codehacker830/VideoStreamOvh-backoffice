import React from "react";
import AuthSlider from "../components/AuthSlider";

class Register extends React.Component {
    render() {
        return (
            <section className="login-main-wrapper">
                <div className="container-fluid pl-0 pr-0">
                    <div className="row no-gutters">
                        {/* <!-- Register Form --> */}
                        <div className="col-md-12 p-5 bg-white full-height">
                            <div className="login-main-left">
                                <div className="text-center mb-5 login-main-left-header pt-4">
                                    <img src="img/favicon.png" className="img-fluid" alt="LOGO" />
                                    <h5 className="mt-3 mb-3">Welcome to Vidoe</h5>
                                    <p>It is a long established fact that a reader <br /> will be distracted by the readable.</p>
                                </div>
                                <form action="index.html">
                                    <div className="form-group">
                                        <label>Mobile number</label>
                                        <input type="text" className="form-control" placeholder="Enter mobile number" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label>Promocode</label>
                                        <input type="text" className="form-control" placeholder="Promocode" />
                                    </div>
                                    <div className="mt-4">
                                        <button type="submit" className="btn btn-outline-primary btn-block btn-lg">Sign Up</button>
                                    </div>
                                </form>
                                <div className="text-center mt-5">
                                    <p className="light-gray">Already have an Account? <a href="login.html">Sign In</a></p>
                                </div>
                            </div>
                        </div>
                        {/* <AuthSlider /> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Register;