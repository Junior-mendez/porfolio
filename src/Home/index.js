import * as React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { Avatar } from "@material-ui/core";
import imageUrl from "../static/images/home/foto.png"
import logoJsURl from "../static/images/home/frontend/logo_js.png"
import logoReactURl from "../static/images/home/frontend/logo_react.png"
import logoANURl from "../static/images/home/frontend/logo_an.png"
import saludoURL from "../static/images/home/saludo.png"
import javaURL from "../static/images/home/backend/logo_java.png"
import csharpURL from "../static/images/home/backend/logo_csharp.png"
import springURL from "../static/images/home/backend/logo_spring.png"
import junitURL from "../static/images/home/backend/junit.png"
import karateURL from "../static/images/home/backend/karate.png"
import mockitoURL from "../static/images/home/backend/mockito.jpg"
import sqlserverURL from "../static/images/home/database/sqlServer.png"
import postgreURL from "../static/images/home/database/postgre.png"
import mysqlURL from "../static/images/home/database/mysql.png"
import dynamoURL from "../static/images/home/database/dynamoDB.png"
import db2URL from "../static/images/home/database/db2.png"
import awsURL from "../static/images/home/cloud/aws.png"
import gcpURL from "../static/images/home/cloud/gcp.png"
import anthosURL from "../static/images/home/cloud/anthos.png"
import jenkinsURL from "../static/images/home/devops/jenkins.png"
import azuredevopsURL from "../static/images/home/devops/azuredevops.png"
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PlaceIcon from '@mui/icons-material/Place';
import GithubIcon from '@mui/icons-material/GitHub'
import { IconButton, ImageList, ImageListItem } from "@mui/material";
import TimeLineHome from "./timeline";

export default function Home() {
    return(
        <Grid container spacing={2} columns={16}>
            <Grid item  xs={16} md={8} style={{
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
                }}>Software Engineer</Typography>
                <Grid container columns={3}>
                <Grid item  xs={16} md={8}  style={{
                textAlign:"center"
            }}>
                <IconButton href="mailto:jrmendezlezcano@gmail.com"><ContactMailIcon fontSize="inherit"></ContactMailIcon>jrmendezlezcano@gmail.com</IconButton>
                </Grid>
                <Grid item  xs={16} md={8}  style={{
                textAlign:"center"
            }}>
                <IconButton><PlaceIcon fontSize="inherit"></PlaceIcon>Trujillo, Perú</IconButton>
                </Grid>
                <Grid item xs={16} md={8}  style={{
                textAlign:"center"
            }}>
                <IconButton target="_blank" variant="body1" href="https://github.com/Junior-mendez" ><GithubIcon fontSize="inherit"></GithubIcon>Junior-mendez</IconButton>
                </Grid>
                </Grid>
            </Grid>
            <Grid item  xs={16} md={8}  style={{textAlign:"left",marginTop:"40px"}}>
                    <Typography variant="h2">
                        <img
                        width={50}
                        height={50}
                        src={saludoURL}
                        srcSet={saludoURL}
                        alt={"JS"}
                        loading="lazy"
                    />
                        Hola, Buen día</Typography>
                    <Typography variant="body1" style={{marginTop:"40px", marginBottom:"20px", marginRight:"80px",justifyContent:"center"}}>
                    Soy Desarrollador de Software en Trujillo - Perú (Capital de la Primavera). 
                    Me gusta mucho crear soluciones tecnologicas, tengo varios años trabajando 
                    como desarrollador backend en Java con Spring Framework.</Typography>
                    <Typography variant="h4">Frontend</Typography>
                    <ImageList variant="masonry" cols={3} gap={1} sx={{
                        width: 150,
                        height: 50,
                    }}>
                        <ImageListItem>
                        <img
                            src={logoJsURl}
                            srcSet={logoJsURl}
                            alt={"JS"}
                            loading="lazy"
                        />
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={logoReactURl}
                            srcSet={logoReactURl}
                            alt={"React"}
                            loading="lazy"
                        />
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={logoANURl}
                            srcSet={logoANURl}
                            alt={"Angular"}
                            loading="lazy"
                        />
                        </ImageListItem>
                    </ImageList>
                    <Typography variant="h4">Backend</Typography>
                    <ImageList variant="masonry" cols={6} gap={1} sx={{
                        width: 350,
                        height: 80,
                    }}>
                        <ImageListItem>
                        <img
                            src={javaURL}
                            srcSet={javaURL}
                            alt={"Java"}
                            loading="lazy"
                        />
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={csharpURL}
                            srcSet={csharpURL}
                            alt={"CSharp"}
                            loading="lazy"
                        />
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={springURL}
                            srcSet={springURL}
                            alt={"Spring"}
                            loading="lazy"
                        />
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={junitURL}
                            srcSet={junitURL}
                            alt={"JUNIT"}
                            loading="lazy"
                        />
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={mockitoURL}
                            srcSet={mockitoURL}
                            alt={"MOCKITO"}
                            loading="lazy"
                        />
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={karateURL}
                            srcSet={karateURL}
                            alt={"KARATE"}
                            loading="lazy"
                        />
                        </ImageListItem>
                    </ImageList>
                    <Typography variant="h4">Databases</Typography>
                    <ImageList variant="masonry" cols={5} gap={1} sx={{
                        width: 350,
                        height: 80,
                    }}>
                        <ImageListItem>
                        <img
                            src={sqlserverURL}
                            srcSet={sqlserverURL}
                            alt={"SQLServer"}
                            loading="lazy"
                        />
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={postgreURL}
                            srcSet={postgreURL}
                            alt={"PostgresSQL"}
                            loading="lazy"
                        />
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={dynamoURL}
                            srcSet={dynamoURL}
                            alt={"DynamoDB"}
                            loading="lazy"
                        />
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={db2URL}
                            srcSet={db2URL}
                            alt={"DB2"}
                            loading="lazy"
                        />
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={mysqlURL}
                            srcSet={mysqlURL}
                            alt={"MySQL"}
                            loading="lazy"
                        />
                        </ImageListItem>
                    </ImageList>
                    <Typography variant="h4">Cloud</Typography>
                    <ImageList variant="masonry" cols={3} gap={1} sx={{
                        width: 250,
                        height: 120,
                    }}>
                        <ImageListItem>
                        <img
                            src={awsURL}
                            srcSet={awsURL}
                            alt={"AWS"}
                            loading="lazy"
                        />
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={gcpURL}
                            srcSet={gcpURL}
                            alt={"GCP"}
                            loading="lazy"
                        />
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={anthosURL}
                            srcSet={anthosURL}
                            alt={"ANTHOS"}
                            loading="lazy"
                        />
                        </ImageListItem>
                    </ImageList>
                    <Typography variant="h4">Devops</Typography>
                    <ImageList variant="masonry" cols={3} gap={1} sx={{
                        width: 250,
                        height: 90,
                    }}>
                        <ImageListItem>
                        <img
                            src={jenkinsURL}
                            srcSet={jenkinsURL}
                            alt={"JENKINS"}
                            loading="lazy"
                        />
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={azuredevopsURL}
                            srcSet={azuredevopsURL}
                            alt={"AZURE DEVOPS"}
                            loading="lazy"
                        />
                        </ImageListItem>
                    </ImageList>
                <TimeLineHome></TimeLineHome>
            </Grid>
        </Grid>
    );
    
}