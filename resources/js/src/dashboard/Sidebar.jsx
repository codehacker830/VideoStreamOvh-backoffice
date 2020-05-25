import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            show: false
        };
    }
    onHandleShow = (ev) => {
        ev.preventDefault();
        this.setState({show : !this.state.show});
    }
    render() {
        console.log("___", this.state.show)
        return (
            <React.Fragment>
                <ul className="sidebar navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-home"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="channels.html">
                            <i className="fas fa-fw fa-users"></i>
                            <span>Channels</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="single-channel.html">
                            <i className="fas fa-fw fa-user-alt"></i>
                            <span>Single Channel</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/video-page">
                            <i className="fas fa-fw fa-video"></i>
                            <span>Video Page</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/upload-video">
                            <i className="fas fa-fw fa-cloud-upload-alt"></i>
                            <span>Upload Video</span>
                        </Link>
                    </li>
                    <li className={`nav-item dropdown ${this.state.show ? "show" : ""}`}>
                        <a className="nav-link dropdown-toggle" 
                            // href="#" 
                            role="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded={this.state.show}
                            onClick={(ev) => this.onHandleShow(ev)}
                            >
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </a>
                        <div className={`dropdown-menu ${this.state.show ? "show" : ""}`}>
                            <h6 className="dropdown-header">Login Screens:</h6>
                            <a className="dropdown-item" href="login.html">Login</a>
                            <a className="dropdown-item" href="register.html">Register</a>
                            <a className="dropdown-item" href="forgot-password.html">Forgot Password</a>
                            <div className="dropdown-divider"></div>
                            <h6 className="dropdown-header">Other Pages:</h6>
                            <a className="dropdown-item" href="404.html">404 Page</a>
                            <a className="dropdown-item" href="blank.html">Blank Page</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="history-page.html">
                            <i className="fas fa-fw fa-history"></i>
                            <span>History Page</span>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="categories.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-fw fa-list-alt"></i>
                            <span>Categories</span>
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="categories.html">Movie</a>
                            <a className="dropdown-item" href="categories.html">Music</a>
                            <a className="dropdown-item" href="categories.html">Television</a>
                        </div>
                    </li>
                    <li className="nav-item channel-sidebar-list">
                        <h6>SUBSCRIPTIONS</h6>
                        <ul>
                            <li>
                                <a href="subscriptions.html">
                                    <img className="img-fluid" alt="" src="/img/s1.png" /> Your Life
                            </a>
                            </li>
                            <li>
                                <a href="subscriptions.html">
                                    <img className="img-fluid" alt="" src="/img/s2.png" /> Unboxing  <span className="badge badge-warning">2</span>
                                </a>
                            </li>
                            <li>
                                <a href="subscriptions.html">
                                    <img className="img-fluid" alt="" src="/img/s3.png" /> Product / Service
                            </a>
                            </li>
                            <li>
                                <a href="subscriptions.html">
                                    <img className="img-fluid" alt="" src="/img/s4.png" />  Gaming
                            </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default Sidebar;