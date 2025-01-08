import React from "react";
import { Container, Typography, Box } from "@mui/material";

function About() {
  return (
    <Box id="about" className="py-16 bg-[#FFF0D1]">
      <Container maxWidth="md" className="text-center px-4">
        <Typography
          variant="h4"
          component="h2"
          className="font-bold mb-4 text-[#3B3030]"
        >
          About Project
        </Typography>
        <Typography
          variant="body1"
          className="text-[#3B3030] text-lg mb-4"
        >
          Lorem ipsum dolor sit.
        </Typography>
        <Typography
          variant="body2"
          className="text-[#3B3030] leading-relaxed"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          iste repellendus, excepturi quaerat in repudiandae commodi? Inventore,
          minus. Veniam et velit corporis, reprehenderit aliquam a beatae
          obcaecati architecto incidunt minus commodi omnis placeat nostrum!
          Delectus inventore provident eligendi iusto velit.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
