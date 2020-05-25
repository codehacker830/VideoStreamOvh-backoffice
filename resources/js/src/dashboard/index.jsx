import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import UploadVideo from "./UploadVideo";
import ScrollUpBtn from "../components/ScrollupBtn";
import Footer from "../components/Footer";
import { Route, Redirect, Switch } from "react-router-dom";

class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper">
                    <Switch>
                        <Redirect exact from="/dashboard" to="/dashboard/home" />
                        <Route path="/dashboard/home" component={Content} />
                        <Route path="/dashboard/upload-video" component={UploadVideo} />
                    </Switch>
                    {/* <Footer /> */}
                    </div>
                </div>
                <ScrollUpBtn />
            </React.Fragment>
        );
    }
}

export default Dashboard;