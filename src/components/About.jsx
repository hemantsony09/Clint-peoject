import React from "react";
import { Container, Typography, Box } from "@mui/material";

const aboutContent = {
  title: "About US",
  subtitle: "At DECOR HUB, we believe that every event deserves to be celebrated with style and flair. We are a team of passionate event decorators with years of experience in transforming spaces into magical settings.",
  description: [
    "We also have a dedicated retail section where you can find a beautiful assortment of decorative items for all your event needs. Whether you're looking for elegant table runners, unique centerpieces, or festive balloons, we have something for every taste and budget.",
    
  ],
  services: [
    {
      title: "We offer a full range of decoration services, including:",
    },
    {
      title: "Full-service event decoration:",
      description: "From concept to execution, we handle every aspect of your event's visual appeal.",
    },
    {
      title: "Custom designs:",
      description: "We work closely with you to create personalized decorations that reflect your unique style and vision.",
    },
    {
      title: "Themed decor:",
      description: "We specialize in bringing your event themes to life with creative and imaginative decorations.",
    },
    {
      title: "Rental services:",
      description: "We offer a wide selection of decorative items for rent, including linens and lighting.",
    },
  ],
  additionalInfo: "",
};

function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 10,
        backgroundColor: "#FFF0D1",
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
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          {aboutContent.title}
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h6"
          sx={{
            color: "#3B3030",
            mb: 3,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          {aboutContent.subtitle}
        </Typography>

        {/* Description */}
        {aboutContent.description.map((text, index) => (
          <Typography
            key={`description-${index}`}
            variant="body1"
            sx={{
              color: "#3B3030",
              lineHeight: 1.8,
              mb: 2,
              textAlign: "center",
            }}
          >
            {text}
          </Typography>
        ))}

        {/* Services */}
        <Box sx={{ textAlign: "left", mt: 4 }}>
          {aboutContent.services.map((service, index) => (
            <Box key={`service-${index}`} sx={{ mb: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: "#3B3030",
                  mb: 0.5,
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#3B3030",
                  lineHeight: 1.8,
                }}
              >
                {service.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Additional Description */}
        {aboutContent.additionalInfo && (
          <Typography
            variant="body2"
            sx={{
              color: "#6B5B5B",
              lineHeight: 1.7,
              mt: 2,
              textAlign: "center",
            }}
          >
            {aboutContent.additionalInfo}
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default About;
