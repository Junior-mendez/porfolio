import * as React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { Avatar } from "@material-ui/core";
import imageUrl from "../static/images/home/foto.png"
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PlaceIcon from '@mui/icons-material/Place';
export default function Header() {
    return(
        <Grid container spacing={2} columns={16}>
            <Grid item  xs={8} style={{
                textAlign:"center"
            }}>
                <Stack direction="row">
                    <Avatar alt="Foto" src={imageUrl} style={{
                        width:"50%",
                        height:"50%",
                        marginLeft:"25%",marginTop:"60px"
                    }}/>
                </Stack>
                <Typography variant="h4" style={{
                    marginTop:"20px"
                }}>Junior Mendez</Typography>
                <Typography variant="h6" style={{
                    marginTop:"10px"
                }}>Backen Developer</Typography>
                <Typography variant="body1" ><ContactMailIcon fontSize="inherit"></ContactMailIcon> jrmendezlezcano@gmail.com</Typography>
                 <Typography variant="body1" ><PlaceIcon fontSize="inherit"></PlaceIcon>Trujillo, Perú</Typography>
                
            </Grid>
            <Grid item  xs={8} style={{textAlign:"left",marginTop:"40px"}}>
                <Typography variant="h2">Hola, Buen día</Typography>
                <Typography variant="body1" style={{marginTop:"40px", marginRight:"80px",justifyContent:"center"}}>
                    Irure ullamco cillum mollit dolor irure tempor dolore consectetur eu aliqua aliquip fugiat 
                    id nisi. Ex ex nulla ut nulla mollit ad aliquip tempor excepteur deserunt esse in ut elit. 
                    Sint esse deserunt nostrud quis duis ut dolore enim.
                    Irure ullamco cillum mollit dolor irure tempor dolore consectetur eu aliqua aliquip fugiat 
                    id nisi. Ex ex nulla ut nulla mollit ad aliquip tempor excepteur deserunt esse in ut elit. 
                    Sint esse deserunt nostrud quis duis ut dolore enim.</Typography>
                <Typography variant="h4">Frontend</Typography>
                <Typography variant="body1" style={{marginTop:"40px", marginRight:"80px",justifyContent:"center"}}>
                    Irure ullamco cillum mollit dolor irure tempor dolore consectetur eu aliqua aliquip fugiat 
                    id nisi. Ex ex nulla ut nulla mollit ad aliquip tempor excepteur deserunt esse in ut elit. 
                    Sint esse deserunt nostrud quis duis ut dolore enim.
                    Irure ullamco cillum mollit dolor irure tempor dolore consectetur eu aliqua aliquip fugiat 
                    id nisi. Ex ex nulla ut nulla mollit ad aliquip tempor excepteur deserunt esse in ut elit. 
                    Sint esse deserunt nostrud quis duis ut dolore enim.</Typography>
                <Typography variant="h4">Backend</Typography>
                <Typography variant="body1" style={{marginTop:"40px", marginRight:"80px",justifyContent:"center"}}>
                    Irure ullamco cillum mollit dolor irure tempor dolore consectetur eu aliqua aliquip fugiat 
                    id nisi. Ex ex nulla ut nulla mollit ad aliquip tempor excepteur deserunt esse in ut elit. 
                    Sint esse deserunt nostrud quis duis ut dolore enim.
                    Irure ullamco cillum mollit dolor irure tempor dolore consectetur eu aliqua aliquip fugiat 
                    id nisi. Ex ex nulla ut nulla mollit ad aliquip tempor excepteur deserunt esse in ut elit. 
                    Sint esse deserunt nostrud quis duis ut dolore enim.</Typography>
                    
            </Grid>
        </Grid>
    );
    
}