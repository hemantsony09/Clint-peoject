import React, { useState } from "react";
import { TextField, Button, Box, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3B3030",
    },
    secondary: {
      main: "#FFF0D1",
    },
  },
});

function FeedbackForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      const mailtoLink = `mailto:support@example.com?subject=Feedback&body=${encodeURIComponent(
        message
      )}`;
      window.location.href = mailtoLink;
    } else {
      alert("Please enter your message before submitting.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box id="feedback" sx={{ py: 10, backgroundColor: theme.palette.secondary.main }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.main,
              textAlign: "center",
              mb: 4,
            }}
          >
            We'd love to hear from you!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.primary.main,
              textAlign: "center",
              mb: 6,
            }}
          >
            Whether you have a question about our products, need assistance with
            an order, or simply want to share your feedback, we're here to help.
          </Typography>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
                "& .MuiInputLabel-root": {
                  color: theme.palette.primary.main,
                  "&.Mui-focused": {
                    color: theme.palette.primary.main,
                  },
                },
              }}
            />
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: "#2c2626",
                },
                color: theme.palette.secondary.main,
              }}
              className="w-full"
            >
              Send Feedback
            </Button>
          </form>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default FeedbackForm;
