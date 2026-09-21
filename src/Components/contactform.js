import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { TypeAnimation } from "react-type-animation";

export default function ContactMe(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // EmailJS integration — replace these with your actual EmailJS credentials:
    // 1. Sign up free at https://www.emailjs.com
    // 2. Create a service, template, and get your public key
    // 3. Replace the values below
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      reply_to: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch(
        `https://api.emailjs.com/api/v1.0/email/send`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: PUBLIC_KEY,
            template_params: templateParams,
          }),
        },
      );
      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
      "&:hover fieldset": { borderColor: "#53b374" },
      "&.Mui-focused fieldset": { borderColor: "#53b374" },
    },
    "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.5)" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#53b374" },
  };

  return (
    <div ref={props.contactRef}>
      <Box sx={{ padding: "20px" }}>
        <Box
          sx={{
            backgroundColor: "#151619",
            paddingBottom: "40px",
            borderRadius: "20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: 700, mb: 1 }}
            >
              Get in touch
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", px: "20px" }}>
            <Card
              sx={{
                width: "100%",
                maxWidth: 600,
                borderRadius: "20px",
                backgroundColor: "#1e2228",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Container component="main" maxWidth="sm">
                <Box
                  sx={{
                    mt: 4,
                    mb: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <EmailIcon sx={{ fontSize: 40, color: "#53b374", mb: 1 }} />
                  <Typography
                    component="h1"
                    variant="h5"
                    sx={{ color: "white", mb: 1 }}
                  >
                    Send me a message
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.4)", mb: 3 }}
                  >
                    email@pranavkalra.ca
                  </Typography>

                  {status === "success" && (
                    <Alert
                      icon={<CheckCircleIcon />}
                      severity="success"
                      sx={{ width: "100%", mb: 2, borderRadius: "10px" }}
                    >
                      Message sent! I'll get back to you soon.
                    </Alert>
                  )}
                  {status === "error" && (
                    <Alert
                      severity="error"
                      sx={{ width: "100%", mb: 2, borderRadius: "10px" }}
                    >
                      Something went wrong. Please email me directly.
                    </Alert>
                  )}

                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ width: "100%" }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="firstName"
                          required
                          fullWidth
                          label="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          sx={fieldSx}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          sx={fieldSx}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          sx={fieldSx}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="message"
                          label="Message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          sx={fieldSx}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={status === "sending"}
                      endIcon={
                        status === "sending" ? (
                          <CircularProgress size={18} color="inherit" />
                        ) : (
                          <SendIcon />
                        )
                      }
                      sx={{
                        mt: 3,
                        mb: 2,
                        backgroundColor: "#53b374",
                        color: "#000",
                        fontWeight: 700,
                        borderRadius: "10px",
                        py: 1.5,
                        textTransform: "none",
                        fontSize: "16px",
                        "&:hover": { backgroundColor: "#3d9a5a" },
                        "&:disabled": { backgroundColor: "#2a5e3a" },
                      }}
                    >
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Card>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
