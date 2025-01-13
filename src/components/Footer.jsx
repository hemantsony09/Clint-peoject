import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS once
AOS.init({
  once: true, // Ensures animation runs only once
});

const Footer = () => {
  return (
    <Box
    id='contact'
      sx={{
        backgroundColor: "#3b3030",
        color: "#fff0d1",
        py: 6,
        px: 2,
        mt: 4,
      }}
    >
      {/* Main Footer Content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          maxWidth: "1200px",
          margin: "0 auto",
          gap: { xs: 3, sm: 0 }, // Adds spacing between sections on small screens
        }}
      >
        {/* Contact Section */}
        <Box data-aos="fade-right" data-aos-duration="1000" sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              position: "relative",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 0.5 }}>
          Visit Us In-Store : Decor Hub
            86 A Shakti Nagar, Gopalpura Bypass,
            Jaipur, Rajasthan (302015)

          </Typography>
          <Typography variant="body1" sx={{ mb: 0.5,mt:3 }}>
          Contact Us Online
          </Typography>
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            Mobile: +91-9314876441, +91-7062502925
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Email: decorhubjpr@gmail.com
          </Typography>
        </Box>

        {/* Social Media Section */}
        <Box
          data-aos="fade-left"
          data-aos-duration="1000"
          sx={{
            flex: 1,
            textAlign: { xs: "left", sm: "right" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Follow Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", sm: "flex-end" },
              gap: 1,
              mt: 2,
            }}
          >
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{
                color: "#fff0d1",
                "&:hover": { color: "#ccc", transform: "scale(1.2)" },
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
                "&:hover": { color: "#ccc", transform: "scale(1.2)" },
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
                "&:hover": { color: "#ccc", transform: "scale(1.2)" },
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
                "&:hover": { color: "#ccc", transform: "scale(1.2)" },
                transition: "all 0.3s ease",
              }}
            >
              <Instagram />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box
        data-aos="fade-up"
        data-aos-duration="1000"
        sx={{
          borderTop: "1px solid #fff0d1", // Border for footer bottom
          mt: 5,
          pt: 3,
          maxWidth: "1200px", // Matches the max width of the content
          margin: "0 auto", // Centers the border and text
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: "light",
            fontSize: "0.875rem",
          }}
        >
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
