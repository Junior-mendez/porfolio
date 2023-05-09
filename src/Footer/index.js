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
                
                <IconButton size="large" target="_blank" href="https://github.com/Junior-mendez"><GitHubIcon fontSize="inherit"></GitHubIcon></IconButton>
                <IconButton size="large" target="_blank" href="https://www.linkedin.com/in/junior-mendez-lezcano/"><LinkedInIcon fontSize="inherit"></LinkedInIcon></IconButton>
                <IconButton size="large" target="_blank" href="mailto:jrmendezlezcano@gmail.com"><EmailIcon fontSize="inherit"></EmailIcon></IconButton>
                <IconButton size="large" target="_blank" href="https://www.facebook.com/juniormendezl/"><FacebookIcon fontSize="inherit"></FacebookIcon></IconButton>
                <IconButton size="large" target="_blank" href="https://www.instagram.com/juniormendezl/"><InstagramIcon fontSize="inherit"></InstagramIcon></IconButton>
                <IconButton size="large" target="_blank" href="https://www.youtube.com/@juniormendezl"><YouTubeIcon fontSize="inherit"></YouTubeIcon></IconButton>
               
                
              
            </Toolbar>
            <Thypography sx={{
                 flexGrow: 1,
                 textAlign: "center"
            }}>Copyright © 2023 • Web de Junior Mendez - Empecemos a programar</Thypography>
        </AppBar>
    );
    
}