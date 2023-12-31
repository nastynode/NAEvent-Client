import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import nalogo from "../assets/nalogo.png";
import React from "react";

interface NavProps {
    setView: Function
}

const Navbar = ({setView}: NavProps) => {
    return(
        <AppBar position="static" sx={{position: "absolute", width: "100%", top: 0, left: 0, maxHeight: 70}}>
            <Toolbar disableGutters>
                <IconButton aria-label="menu" style={{width: 50, height:50, marginLeft: 10, marginRight: 10}}>
                    <img src={nalogo} alt="Logo" style={{width: 50, height:50}} className="white-image"/>
                </IconButton>
                <Button color="inherit" onClick={()=>(setView(true))}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        EVENTS
                    </Typography>
                </Button>
                <Button sx={{marginLeft: "auto", marginRight: 5}} color="inherit" onClick={()=>(setView(false))}>Submit An Event</Button>
            </Toolbar>
        </AppBar>
    );
};

export default React.memo(Navbar);