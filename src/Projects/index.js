import * as React from "react"
import { Grid, Typography } from "@mui/material";

export default function Projects() {
    return(
        <Grid container spacing={2} columns={16}>
            <Grid item  xs={16} md={8} style={{
                textAlign:"left",
                marginLeft:"80px",
                marginTop:"40px"
            }}>
                <Typography style={{
                    fontWeight:700,
                    textTransform:"none"
                }} variant="h2"
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
                  ].join(',')}>
                    Projects
                </Typography>
                <Typography style={{
                marginTop:"20px"
            }}>Algunos de los proyectos que he construido o de los que he sido parte.</Typography>
            </Grid>
            <Grid item  xs={16} md={8} style={{
                textAlign:"center"
            }}></Grid>
        </Grid>
    );
    
}