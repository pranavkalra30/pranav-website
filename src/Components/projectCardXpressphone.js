import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Xpressphone from "../Images/Xpressphone.png";
import { styled } from "@mui/system";

const StyledCard = styled("Card")({
  width: "275px",
  backgroundColor: "#53565c",
});

export default function MediaCard() {
  return (
    <Card
      onClick={() =>
        window.open(
          "https://frontend--endearing-bavarois-c380b6.netlify.app",
          "_blank"
        )
      }
      sx={{
        backgroundColor: "#53565c",
        borderRadius: "30px",
        cursor: "pointer",
      }}
    >
      <CardMedia
        sx={{ height: 240, borderRadius: "30px, 30px, 0px, 0px" }}
        image={Xpressphone}
        title="Movies"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Xpressphone
        </Typography>
        <Typography variant="body2" color="white">
          Played a key role in the ground-up redesign of several website
          sections.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() =>
            window.open(
              "https://frontend--endearing-bavarois-c380b6.netlify.app",
              "_blank"
            )
          }
        >
          More info
        </Button>
      </CardActions>
    </Card>
  );
}
