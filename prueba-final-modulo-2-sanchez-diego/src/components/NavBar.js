// icon-h1-img
import React from 'react';
import { AppBar, Box, Toolbar} from '@material-ui/core';

//Css
import "../styles/NavBar.css";

class NavBar extends React.Component {
    render() {
        return (
        <div className="container">
            <div>
                <Box>
                    <AppBar position="static">
                        <Toolbar className="AppBar__toolbar">
                            <img alt="logo" className="logo" />
                            <h2 className="AppBar__title">Mateify</h2>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </div>
        );
    }
}

export default NavBar;
