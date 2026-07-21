import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

export default function ProjectCard(props) {
  const {
    title,
    tags = [],
    description,
    accent = "#53b374",
    image,
    onClick,
  } = props;

  return (
    <Card
      onClick={onClick}
      sx={{
        backgroundColor: "#53565c",
        borderRadius: "30px",
        width: "100%",
        maxWidth: 500,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: `0 12px 24px ${accent}40`,
        },
      }}
    >
      {image ? (
        <CardMedia sx={{ height: 160, width: "100%" }} image={image} title={title} />
      ) : (
        <Box
          sx={{
            height: 160,
            background: `linear-gradient(135deg, ${accent} 0%, #09315d 100%)`,
          }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div" color="white">
          {title}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1.5 }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{ backgroundColor: "#1e3a5f", color: "#7ec8e3" }}
            />
          ))}
        </Box>
        <Typography variant="body2" color="white">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
