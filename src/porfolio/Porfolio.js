
import './Porfolio.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import imageUrl from '../static/images/cards/mono1.jpg';
import Slider from "@mui/material/Slider"

function Porfolio() {
  
  return (
   <div>
    <div>
    <h1>Hola, Soy Junior Mendez </h1>
    <p>In dolor nisi consectetur nisi esse dolore elit exercitation dolore culpa voluptate deserunt. Irure ad nisi incididunt occaecat labore ut pariatur dolore excepteur amet. Commodo amet ad do minim et sunt anim. Laborum adipisicing adipisicing laborum esse ullamco duis et. Enim aliqua non excepteur mollit fugiat.</p>
    </div>
    <div>
    <h1>Recent Projects</h1>
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia     
      sx={{ height: 300 }}
        image={imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia     
      sx={{ height: 300 }}
        image={imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Slider></Slider>
    </div>
   </div>
  );
}

export default Porfolio;
