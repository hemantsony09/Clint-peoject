import React from "react";
import { Container, Typography, Box } from "@mui/material";

function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 10,
        backgroundColor: "#FFF0D1",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        {/* Section Title */}
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "#3B3030",
            mb: 4,
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          About the Project
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h6"
          sx={{
            color: "#3B3030",
            mb: 3,
            fontStyle: "italic",
          }}
        >
          Elevating Innovation, One Step at a Time
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: "#3B3030",
            lineHeight: 1.8,
            mb: 2,
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          iste repellendus, excepturi quaerat in repudiandae commodi? Inventore,
          minus. Veniam et velit corporis, reprehenderit aliquam a beatae
          obcaecati architecto incidunt minus commodi omnis placeat nostrum!
          Delectus inventore provident eligendi iusto velit.
        </Typography>

        {/* Additional Description */}
        <Typography
          variant="body2"
          sx={{
            color: "#6B5B5B",
            lineHeight: 1.7,
            mt: 2,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sunt
          pariatur temporibus sapiente, at quo molestiae! Nihil delectus
          corrupti nobis!
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
