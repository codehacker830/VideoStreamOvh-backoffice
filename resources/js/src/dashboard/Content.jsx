import React from "react";

class Content extends React.Component {
    render() {
        return (
            <div id="content-wrapper">
                <div className="container-fluid pb-0">
                <div className="top-mobile-search">
                    <div className="row">
                        <div className="col-md-12">   
                            <form className="mobile-search">
                            <div className="input-group">
                                <input type="text" placeholder="Search for..." className="form-control" />
                                <div className="input-group-append">
                                    <button type="button" className="btn btn-dark"><i className="fas fa-search"></i></button>
                                </div>
                            </div>
                            </form>   
                        </div>
                    </div>
                </div>
                <div className="top-category section-padding mb-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title">
                            <div className="btn-group float-right right-action">
                                <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                                </div>
                            </div>
                            <h6>Channels Categories</h6>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="owl-carousel owl-carousel-category">
                            <div className="item">
                                <div className="category-item">
                                    <a href="#">
                                        <img className="img-fluid" src="img/s1.png" alt="" />
                                        <h6>Your Life</h6>
                                        <p>74,853 views</p>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category-item">
                                    <a href="#">
                                        <img className="img-fluid" src="img/s2.png" alt="" />
                                        <h6>Unboxing Cool</h6>
                                        <p>74,853 views</p>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category-item">
                                    <a href="#">
                                        <img className="img-fluid" src="img/s3.png" alt="" />
                                        <h6>Service Reviewing</h6>
                                        <p>74,853 views</p>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category-item">
                                    <a href="#">
                                        <img className="img-fluid" src="img/s4.png" alt="" />
                                        <h6>Gaming <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></span></h6>
                                        <p>74,853 views</p>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category-item">
                                    <a href="#">
                                        <img className="img-fluid" src="img/s5.png" alt="" />
                                        <h6>Technology Tutorials</h6>
                                        <p>74,853 views</p>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category-item">
                                    <a href="#">
                                        <img className="img-fluid" src="img/s6.png" alt="" />
                                        <h6>Singing</h6>
                                        <p>74,853 views</p>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category-item">
                                    <a href="#">
                                        <img className="img-fluid" src="img/s7.png" alt="" />
                                        <h6>Cooking</h6>
                                        <p>74,853 views</p>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category-item">
                                    <a href="#">
                                        <img className="img-fluid" src="img/s8.png" alt="" />
                                        <h6>Traveling</h6>
                                        <p>74,853 views</p>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category-item">
                                    <a href="#">
                                        <img className="img-fluid" src="img/s1.png" alt="" />
                                        <h6>Education</h6>
                                        <p>74,853 views</p>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category-item">
                                    <a href="#">
                                        <img className="img-fluid" src="img/s2.png" alt="" />
                                        <h6>Noodles, Sauces & Instant Food</h6>
                                        <p>74,853 views</p>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category-item">
                                    <a href="#">
                                        <img className="img-fluid" src="img/s3.png" alt="" />
                                        <h6>Comedy <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></span></h6>
                                        <p>74,853 views</p>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category-item">
                                    <a href="#">
                                        <img className="img-fluid" src="img/s4.png" alt="" />
                                        <h6>Lifestyle Advice</h6>
                                        <p>74,853 views</p>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="video-block section-padding">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title">
                            <div className="btn-group float-right right-action">
                                <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort by <i className="fa fa-caret-down" aria-hidden="true"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                                </div>
                            </div>
                            <h6>Featured Videos</h6>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                                <a href="#"><img className="img-fluid" src="img/v1.png" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="#">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-success">
                                    Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                                <a href="#"><img className="img-fluid" src="img/v2.png" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="#">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-success">
                                    Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                                <a href="#"><img className="img-fluid" src="img/v3.png" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="#">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-danger">
                                    Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                                <a href="#"><img className="img-fluid" src="img/v4.png" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="#">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-success">
                                    Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                                <a href="#"><img className="img-fluid" src="img/v5.png" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="#">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-success">
                                    Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                                <a href="#"><img className="img-fluid" src="img/v6.png" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="#">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-danger">
                                    Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                                <a href="#"><img className="img-fluid" src="img/v7.png" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="#">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-success">
                                    Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                                <a href="#"><img className="img-fluid" src="img/v8.png" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="#">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-success">
                                    Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-0" />
                <div className="video-block section-padding">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title">
                            <div className="btn-group float-right right-action">
                                <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort by <i className="fa fa-caret-down" aria-hidden="true"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                                </div>
                            </div>
                            <h6>Popular Channels</h6>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="channels-card">
                            <div className="channels-card-image">
                                <a href="#"><img className="img-fluid" src="img/s1.png" alt="" /></a>
                                <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                            </div>
                            <div className="channels-card-body">
                                <div className="channels-title">
                                    <a href="#">Channels Name</a>
                                </div>
                                <div className="channels-view">
                                    382,323 subscribers
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="channels-card">
                            <div className="channels-card-image">
                                <a href="#"><img className="img-fluid" src="img/s2.png" alt="" /></a>
                                <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                            </div>
                            <div className="channels-card-body">
                                <div className="channels-title">
                                    <a href="#">Channels Name</a>
                                </div>
                                <div className="channels-view">
                                    382,323 subscribers
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="channels-card">
                            <div className="channels-card-image">
                                <a href="#"><img className="img-fluid" src="img/s3.png" alt="" /></a>
                                <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-secondary btn-sm">Subscribed <strong>1.4M</strong></button></div>
                            </div>
                            <div className="channels-card-body">
                                <div className="channels-title">
                                    <a href="#">Channels Name <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle"></i></span></a>
                                </div>
                                <div className="channels-view">
                                    382,323 subscribers
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="channels-card">
                            <div className="channels-card-image">
                                <a href="#"><img className="img-fluid" src="img/s4.png" alt="" /></a>
                                <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                            </div>
                            <div className="channels-card-body">
                                <div className="channels-title">
                                    <a href="#">Channels Name</a>
                                </div>
                                <div className="channels-view">
                                    382,323 subscribers
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* <!-- /.container-fluid -->
                <!-- Sticky Footer --> */}
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
            </div>
        );
    }
}

export default Content;