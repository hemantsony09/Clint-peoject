// import React from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";

const LoginPage = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#fff0d1",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff0d1",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Placeholder Image for Logo */}
        <Box
          sx={{
            marginBottom: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={Logo1}
            alt="Logo"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </Box>
        <Typography variant="h5" sx={{ color: "#3b3030", marginBottom: 2 }}>
          Admin Login
        </Typography>
        <form>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              required
              sx={{
                input: { color: "#3b3030", backgroundColor: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#3b3030",
                  },
                  "&:hover fieldset": {
                    borderColor: "#3b3030",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#3b3030",
                  },
                },
              }}
            />
          </Box>
          <Box sx={{ marginBottom: 3 }}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              sx={{
                input: { color: "#3b3030", backgroundColor: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#3b3030",
                  },
                  "&:hover fieldset": {
                    borderColor: "#3b3030",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#3b3030",
                  },
                },
              }}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#3b3030",
              color: "#fff0d1",
              "&:hover": {
                backgroundColor: "#2e2626",
              },
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
