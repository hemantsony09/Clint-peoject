import React from "react";
import { TextField, Button, Box, Container, Typography } from "@mui/material";

function Contact() {
  return (
    <Box id="contact" className="py-16 bg-[#FFF0D1]">
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h2"
          className="font-bold text-center mb-8 text-[#3B3030]"
        >
          Get in Touch
        </Typography>
        <form className="max-w-lg mx-auto space-y-6">
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "#3B3030",
              },
              "& .MuiInputLabel-root": {
                color: "#3B3030",
              },
            }}
          />
          <TextField
            fullWidth
            label="Your Message"
            variant="outlined"
            multiline
            rows={4}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "#3B3030",
              },
              "& .MuiInputLabel-root": {
                color: "#3B3030",
              },
            }}
          />
          <Button
            variant="contained"
            size="large"
            type="submit"
            sx={{
              backgroundColor: "#3B3030",
              "&:hover": {
                backgroundColor: "#2c2626",
              },
              color: "#FFF0D1",
            }}
            className="w-full"
          >
            Send Message
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default Contact;
