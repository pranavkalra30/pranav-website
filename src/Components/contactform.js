import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import { TypeAnimation } from "react-type-animation";

// TODO remove, this demo shouldn't need to reset the theme.
const TabHeader = styled("Typography")({
  color: "aliceblue",
  fontSize: "60px",
  textAlign: "center",
  paddingLeft: "80px",
});

const defaultTheme = createTheme();

export default function ContactMe(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div ref={props.contactRef}>
        <Box sx={{ padding: "20px" }}>
          <Box sx={{ backgroundColor: "#151619", paddingBottom: " 40px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "30px",
              }}
            >
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Get in touch.",
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "30px",
              }}
            >
              <Card
                sx={{
                  width: "80%",
                  borderRadius: "20px",
                  backgroundColor: "#53565c",
                }}
              >
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography
                      component="h1"
                      variant="h5"
                      sx={{ color: "white" }}
                    >
                      Send me a message
                    </Typography>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 3 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                          />
                        </Grid>
                        <Grid item xs={12} container>
                          <TextField
                            required
                            fullWidth
                            name="message"
                            label="Message"
                            type="message"
                            id="message"
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Send
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </Card>
            </Box>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}
