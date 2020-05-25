import React from "react";
import AuthSlider from "../components/AuthSlider";
import { Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : ""
        };
    }
    onHandleChangeEmail = (ev) => {
        console.log(ev.target.value)
        this.setState({email: ev.target.value});
    }
    onHandleChangePassword = (ev) => {
        this.setState({password: ev.target.value});
    }
    render() {
        return (
            <section className="login-main-wrapper">
                <div className="container-fluid pl-0 pr-0">
                    <div className="row no-gutters">
                        {/* <!-- Login Form --> */}
                        <div className="col-md-12 p-5 bg-white full-height">
                            <div className="login-main-left">
                                <div className="text-center mb-5 login-main-left-header pt-4">
                                    <img src="img/favicon.png" className="img-fluid" alt="LOGO" />
                                    <h5 className="mt-3 mb-3">Welcome to Vidoe</h5>
                                    <p>It is a long established fact that a reader <br /> will be distracted by the readable.</p>
                                </div>
                                <form action="index.html">
                                    <div className="form-group">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Enter email address" 
                                        value={this.state.email}
                                        onChange={this.onHandleChangeEmail}
                                    />
                                    </div>
                                    <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Password" 
                                        value={this.state.password}
                                        onChange={this.onHandleChangePassword}
                                    />
                                    </div>
                                    <div className="mt-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <button 
                                            type="submit" 
                                            className="btn btn-outline-primary btn-block btn-lg"
                                            onClick={this.onHandleClick}>Sign In</button>
                                        </div>
                                    </div>
                                    </div>
                                </form>
                                <div className="text-center mt-5">
                                    <p className="light-gray">Don’t have an account? <Link to="/register">Sign Up</Link></p>
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

export default Login;