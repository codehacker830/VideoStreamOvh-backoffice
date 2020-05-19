import React from "react";

class ScrollUpBtn extends React.Component {
    render() {
        return (
            <React.Fragment>
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>
            </React.Fragment>
        );
    }
}

export default ScrollUpBtn;

