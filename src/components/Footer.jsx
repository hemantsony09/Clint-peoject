import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3b3030",
        color: "#fff0d1",
        py: 4,
        px: 2,
        mt: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Section */}
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            Address: 1234 Professional Avenue, Business City, BC 12345
          </Typography>
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            Mobile: +1 (123) 456-7890
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Email: contact@yourdomain.com
          </Typography>
        </Box>

        {/* Right Section: Social Media */}
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{
                color: "#fff0d1",
                "&:hover": { color: "#ccc", transform: "scale(1.1)" },
                transition: "all 0.3s ease",
              }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              sx={{
                color: "#fff0d1",
                "&:hover": { color: "#ccc", transform: "scale(1.1)" },
                transition: "all 0.3s ease",
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{
                color: "#fff0d1",
                "&:hover": { color: "#ccc", transform: "scale(1.1)" },
                transition: "all 0.3s ease",
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              sx={{
                color: "#fff0d1",
                "&:hover": { color: "#ccc", transform: "scale(1.1)" },
                transition: "all 0.3s ease",
              }}
            >
              <Instagram />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          textAlign: "center",
          borderTop: "1px solid #fff0d1",
          mt: 3,
          pt: 2,
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
