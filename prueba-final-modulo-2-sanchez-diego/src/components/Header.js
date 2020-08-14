// icon-h1-img
import React from "react";
import { AppBar, Typography, Avatar, Grid } from "@material-ui/core";

//Css
import "../styles/Header.css";

class Header extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div>
                    <AppBar className="appBar__box" position="fixed" color="primary">
                        <img alt="icon" src="" />
                        <Typography variant="h6">
                            <h1>mateify</h1>
                        </Typography>
                        <Avatar alt="" src="" />
                    </AppBar>
                </div>
            </div>
        </div>
        );
    }
}

export default Header;
