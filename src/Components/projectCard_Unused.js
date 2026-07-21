import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TheMovieSearchScreen from "../Images/TheMovieSearch.png";
import { styled } from "@mui/system";
import { Outlet, Link, useNavigate } from "react-router-dom";

const StyledCard = styled("Card")({
  width: "275px",
  backgroundColor: "#53565c",
});

export default function MediaCard(props) {
  const navigate = useNavigate();
  return (
    <Card
      /* onClick={() =>
        window.open(
          "https://frontend--endearing-bavarois-c380b6.netlify.app",
          "_blank"
        )
      }
      */
      onClick={() => navigate("/Projects/Modomubi")}
      sx={{
        backgroundColor: "#53565c",
        borderRadius: "30px",
        cursor: "pointer",
        width: props.isMobile ? "min(85vw, 400px)" : "100%",
        maxWidth: 500,
      }}
    >
      <CardMedia
        sx={{ height: 240, width: "100%", borderRadius: "30px 30px 0 0" }}
        image={TheMovieSearchScreen}
        title="Movies"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          ModoMubi
        </Typography>
        <Typography variant="body2" color="white">
          Web Development | Web Design
        </Typography>
      </CardContent>
    </Card>
  );
}
