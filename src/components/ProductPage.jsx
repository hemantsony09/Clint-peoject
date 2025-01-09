import React from "react";
import { Container, Grid, Typography, Box, Button, Card, CardContent, IconButton } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { CheckCircle, Speed, IntegrationInstructions } from "@mui/icons-material";

function ProjectPage() {
  // Sample project data
  const project = {
    name: "Amazing Project",
    description: "This is an amazing project that solves many important problems in the tech industry.",
    image: "https://via.placeholder.com/1200x600?text=Main+Project+Image", // Main image
    gallery: [
      "https://via.placeholder.com/800x400?text=Image+1",
      "https://via.placeholder.com/800x400?text=Image+2",
      "https://via.placeholder.com/800x400?text=Image+3",
    ], // Gallery images
    features: [
      { name: "Enhanced User Experience", icon: <CheckCircle /> },
      { name: "Fast Performance", icon: <Speed /> },
      { name: "Easy Integration", icon: <IntegrationInstructions /> },
    ], // Features of the project
  };

  return (
    <Box sx={{ backgroundColor: "#3B3030", color: "#FFF0D1", py: 6 }}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", mb: 3 }}>
              {project.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
              {project.description}
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "#fff0d1", color: "#3b3030", py: 1.5, px: 4, fontWeight: "bold", borderRadius: "8px", "&:hover": { backgroundColor: "#f0e0a8" } }}>
              Learn More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={project.image}
              alt={project.name}
              style={{ width: "100%", borderRadius: "12px", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Gallery Section */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", mb: 3 }}>
          Project Gallery
        </Typography>
        <Carousel showArrows={true} showStatus={false} infiniteLoop>
          {project.gallery.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} style={{ borderRadius: "12px", objectFit: "cover" }} />
            </div>
          ))}
        </Carousel>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", mb: 3 }}>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {project.features.map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ backgroundColor: "#fff0d1", color: "#3B3030", borderRadius: "12px", boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.1)" }}>
                <CardContent sx={{ display: "flex", alignItems: "center", p: 4 }}>
                  <IconButton sx={{ color: "#3B3030", mr: 2 }}>
                    {feature.icon}
                  </IconButton>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {feature.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProjectPage;
