import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import ScrollUpBtn from "../components/ScrollupBtn";

class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div id="wrapper">
                    <Sidebar />
                    <Content />
                </div>
                <ScrollUpBtn />
            </React.Fragment>
        );
    }
}

export default Dashboard;