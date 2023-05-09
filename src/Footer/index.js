import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton  from "@mui/material/IconButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Thypography from "@mui/material/Typography"
export default function Footer() {
    return(
        <AppBar position="static" color="transparent">
            <Toolbar  className="toolbar" style={
                {
                    justifyContent:"center",
                    marginTop:"20px",
                    marginBottom:"20px"
                }
            }>
                
                <IconButton size="large"><GitHubIcon fontSize="inherit"></GitHubIcon></IconButton>
                <IconButton size="large"><LinkedInIcon fontSize="inherit"></LinkedInIcon></IconButton>
                <IconButton size="large"><EmailIcon fontSize="inherit"></EmailIcon></IconButton>
                <IconButton size="large"><FacebookIcon fontSize="inherit"></FacebookIcon></IconButton>
                <IconButton size="large"><InstagramIcon fontSize="inherit"></InstagramIcon></IconButton>
                <IconButton size="large"><YouTubeIcon fontSize="inherit"></YouTubeIcon></IconButton>
               
                
              
            </Toolbar>
            <Thypography sx={{
                 flexGrow: 1,
                 textAlign: "center"
            }}>Copyright © 2023 • Blog de Junior Mendez - Empecemos a programar</Thypography>
        </AppBar>
    );
    
}