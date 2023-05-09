import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
export default function Header() {
    return(
        <AppBar position="static" color="transparent">
            <Toolbar  className="toolbar" style={
                {
                    justifyContent:"center",
                    marginTop:"20px",
                    marginBottom:"20px"
                }
            }>
                <Button color="inherit" ><Typography style={{
                    fontWeight:700
                }} variant="h5"
                component="div" >Home</Typography></Button>
                <Button color="inherit" ><Typography style={{
                    fontWeight:700
                }} variant="h5"
                component="div" >Projects</Typography></Button>
                <Button color="inherit" ><Typography style={{
                    fontWeight:700
                }} variant="h5"
                component="div">Blog</Typography></Button>
                
            </Toolbar>
        </AppBar>
    );
    
}