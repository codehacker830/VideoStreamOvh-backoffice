import React from "react";

class AuthSlider extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-7">
                    <div className="login-main-right bg-white p-5 mt-5 mb-5">
                        <div className="owl-carousel owl-carousel-login">
                            <div className="item">
                            <div className="carousel-login-card text-center">
                                <img src="img/login.png" className="img-fluid" alt="LOGO" />
                                <h5 className="mt-5 mb-3">​Watch videos offline</h5>
                                <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a type specimen book. It has survived not <br />only five centuries</p>
                            </div>
                            </div>
                            <div className="item">
                            <div className="carousel-login-card text-center">
                                <img src="img/login.png" className="img-fluid" alt="LOGO" />
                                <h5 className="mt-5 mb-3">Download videos effortlessly</h5>
                                <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a type specimen book. It has survived not <br />only five centuries</p>
                            </div>
                            </div>
                            <div className="item">
                            <div className="carousel-login-card text-center">
                                <img src="img/login.png" className="img-fluid" alt="LOGO" />
                                <h5 className="mt-5 mb-3">Create GIFs</h5>
                                <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a type specimen book. It has survived not <br />only five centuries</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AuthSlider;