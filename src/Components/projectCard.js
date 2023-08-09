import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TheMovieSearchScreen from "../Animations/TheMovieSearch.png"
import { styled } from "@mui/system";


const StyledCard = styled("Card")({
 
  width: "275px", 
  backgroundColor: "#53565c" 
});


export default function MediaCard() {
  return (
    <Card onClick={()=> window.open("https://64caaf26cdb7c913692b6c68--endearing-bavarois-c380b6.netlify.app", "_blank")} sx={{backgroundColor: "#53565c", borderRadius: '30px' ,  cursor: "pointer"}}>
  
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color='white'>
          Movie Search Website
        </Typography>
        <Typography variant="body2"  color='white'>
        Designed and created the entire website including all flows from scratch. Used Redux-Saga to retrieve and process movie information and details
        </Typography>
        <CardMedia
        sx={{ height: 240 }}
        image={TheMovieSearchScreen}
        title="Movies"
      />
      </CardContent>
      <CardActions>

        <Button size="small" onClick={()=> window.open("https://64caaf26cdb7c913692b6c68--endearing-bavarois-c380b6.netlify.app", "_blank")}>Take a look</Button>
      </CardActions>
    </Card>
  );
}
