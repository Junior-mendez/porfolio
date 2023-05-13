import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@material-ui/core/Button"   
import Typography from "@mui/material/Typography"
export default function Header() {
    return(
        <AppBar position="sticky" color="inherit">
            <Toolbar  className="toolbar" style={
                {
                    justifyContent:"center",
                    marginTop:"20px",
                    marginBottom:"20px"
                }
            }>
                <Button color="inherit" href="/porfolio" ><Typography style={{
                    fontWeight:700,
                    textTransform:"none"
                }} variant="h4"
                component="div" fontFamily={[
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                  ].join(',')}>Home </Typography></Button>
                <Button color="inherit" href="/projects"><Typography style={{
                    fontWeight:700,
                    textTransform:"none"
                }} variant="h4"
                component="div" fontFamily={[
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                  ].join(',')} >Projects</Typography></Button>
                <Button color="inherit" href="/blog"><Typography style={{
                    fontWeight:700,
                    textTransform:"none"
                }} variant="h4"
                component="div"  fontFamily={[
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                  ].join(',')}>Blog</Typography></Button>
                
            </Toolbar>
        </AppBar>
    );
    
}