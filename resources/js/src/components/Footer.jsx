import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            // <!-- Sticky Footer -->
            <footer className="sticky-footer">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-sm-6">
                            <p className="mt-1 mb-0">&copy; Copyright 2018 <strong className="text-dark">Vidoe</strong>. All Rights Reserved<br />
                                <small className="mt-0 mb-0">Made with <i className="fas fa-heart text-danger"></i> by <a className="text-primary" target="_blank" href="https://askbootstrap.com/">Ask Bootstrap</a>
                                </small>
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-6 text-right">
                            <div className="app">
                                <a href="#"><img alt="" src="img/google.png" /></a>
                                <a href="#"><img alt="" src="img/apple.png" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;