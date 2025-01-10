import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const credentials = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        "https://decor-hub-backend.onrender.com/api/auth/admin-login",
        credentials
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/admin/trade"); // Redirect to /admin/trade on successful login
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={handleLogin}>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          {error && <Typography color="error">{error}</Typography>}
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
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
