import React from "react";

class ScrollUpBtn extends React.Component {
    render() {
        return (
            <React.Fragment>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
            </React.Fragment>
        );
    }
}

export default ScrollUpBtn;

