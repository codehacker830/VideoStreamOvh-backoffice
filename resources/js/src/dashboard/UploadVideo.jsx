import React from 'react';

class UploadVideo extends React.Component {
    constructor(props) {
        super();
        this.state = {
            title: "",
            description: "",

        }
    }
    onHandleChange = (ev) => {
        if (ev.target.name === "description") {
            this.setState({description : ev.target.value});
        }
        if (ev.target.name === "title") {
            this.setState({title : ev.target.value});
        }
        console.log(ev.target.name)
    }
    render() {
        return (
            <div className="container-fluid upload-details">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-title">
                            <h6>Upload Details</h6>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="imgplace"></div>
                    </div>
                    <div className="col-lg-10">
                        <div className="osahan-title">Contrary to popular belief, Lorem Ipsum (2019) is not.</div>
                        <div className="osahan-size">102.6 MB . 2:13 MIN Remaining</div>
                        <div className="osahan-progress">
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                    aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                            </div>
                            <div className="osahan-close">
                                <a href="#"><i className="fas fa-times-circle"></i></a>
                            </div>
                        </div>
                        <div className="osahan-desc">Your Video is still uploading, please keep this page open until it's
                        done.</div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-12">
                        <div className="osahan-form">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="e1">Video Title</label>
                                        <input
                                            type="text"
                                            placeholder="Please input video title" 
                                            id="e1"
                                            name="title"
                                            className="form-control"
                                            value={this.state.title}
                                            onChange={this.onHandleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="e2">About</label>
                                        <textarea
                                            rows="3"
                                            id="e2" name="e2"
                                            name="description"
                                            className="form-control"
                                            placeholder="Please write description"
                                            value={this.state.description}
                                            onChange={this.onHandleChange}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="e7">Price</label>
                                        <input type="number" placeholder="USD" id="e7" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="form-group">
                                        <label htmlFor="e8">Cover</label>
                                        
                                        <input type="file" id="cover_image" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-12">
                                    <div className="main-title">
                                        <h6>Category ( you can select upto 6 categories )</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="row category-checkbox">
                                {/* <!-- checkbox 1col --> */}
                                <div className="col-lg-2 col-xs-6 col-4">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Abaft</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                        <label className="custom-control-label" htmlFor="customCheck2">Brick</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                        <label className="custom-control-label" htmlFor="customCheck3">Purpose</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                        <label className="custom-control-label" htmlFor="customCheck4">Shallow</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                        <label className="custom-control-label" htmlFor="customCheck5">Spray</label>
                                    </div>
                                </div>
                                {/* <!-- checkbox 2col --> */}
                                <div className="col-lg-2 col-xs-6 col-4">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="zcustomCheck1" />
                                        <label className="custom-control-label" htmlFor="zcustomCheck1">Cemetery</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="zcustomCheck2" />
                                        <label className="custom-control-label" htmlFor="zcustomCheck2">Trouble</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="zcustomCheck3" />
                                        <label className="custom-control-label" htmlFor="zcustomCheck3">Pin</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="zcustomCheck4" />
                                        <label className="custom-control-label" htmlFor="zcustomCheck4">Fall</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="zcustomCheck5" />
                                        <label className="custom-control-label" htmlFor="zcustomCheck5">Leg</label>
                                    </div>
                                </div>
                                {/* <!-- checkbox 3col --> */}
                                <div className="col-lg-2 col-xs-6 col-4">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="czcustomCheck1" />
                                        <label className="custom-control-label" htmlFor="czcustomCheck1">Scissors</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="czcustomCheck2" />
                                        <label className="custom-control-label" htmlFor="czcustomCheck2">Stitch</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="czcustomCheck3" />
                                        <label className="custom-control-label" htmlFor="czcustomCheck3">Agonizing</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="czcustomCheck4" />
                                        <label className="custom-control-label" htmlFor="czcustomCheck4">Rescue</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="czcustomCheck5" />
                                        <label className="custom-control-label" htmlFor="czcustomCheck5">Quiet</label>
                                    </div>
                                </div>
                                {/* <!-- checkbox 1col --> */}
                                <div className="col-lg-2 col-xs-6 col-4">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Abaft</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                        <label className="custom-control-label" htmlFor="customCheck2">Brick</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                        <label className="custom-control-label" htmlFor="customCheck3">Purpose</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                        <label className="custom-control-label" htmlFor="customCheck4">Shallow</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                        <label className="custom-control-label" htmlFor="customCheck5">Spray</label>
                                    </div>
                                </div>
                                {/* <!-- checkbox 2col --> */}
                                <div className="col-lg-2 col-xs-6 col-4">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="zcustomCheck1" />
                                        <label className="custom-control-label" htmlFor="zcustomCheck1">Cemetery</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="zcustomCheck2" />
                                        <label className="custom-control-label" htmlFor="zcustomCheck2">Trouble</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="zcustomCheck3" />
                                        <label className="custom-control-label" htmlFor="zcustomCheck3">Pin</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="zcustomCheck4" />
                                        <label className="custom-control-label" htmlFor="zcustomCheck4">Fall</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="zcustomCheck5" />
                                        <label className="custom-control-label" htmlFor="zcustomCheck5">Leg</label>
                                    </div>
                                </div>
                                {/* <!-- checkbox 3col --> */}
                                <div className="col-lg-2 col-xs-6 col-4">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="czcustomCheck1" />
                                        <label className="custom-control-label" htmlFor="czcustomCheck1">Vessel</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="czcustomCheck2" />
                                        <label className="custom-control-label" htmlFor="czcustomCheck2">Stitch</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="czcustomCheck3" />
                                        <label className="custom-control-label" htmlFor="czcustomCheck3">Agonizing</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="czcustomCheck4" />
                                        <label className="custom-control-label" htmlFor="czcustomCheck4">Rescue</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="czcustomCheck5" />
                                        <label className="custom-control-label" htmlFor="czcustomCheck5">Quiet</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="osahan-area text-center mt-3">
                            <button className="btn btn-outline-primary">Save Changes</button>
                        </div>
                        <hr />
                        <div className="terms text-center">
                            <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the
                            majority <a href="#">Terms of Service</a> and <a href="#">Community Guidelines</a>.</p>
                            <p className="hidden-xs mb-0">Ipsum is therefore always free from repetition, injected humour,
                            or non</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadVideo;