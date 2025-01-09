import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Product() {
  const navigate = useNavigate(); // Initialize the navigate hook

  const projects = [
    {
      id: 1,
      name: "Project One",
      description: "A great project that solves many problems.",
      image: "https://via.placeholder.com/600x400?text=Image+1", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Project Two",
      description: "An innovative solution for modern challenges.",
      image: "https://via.placeholder.com/600x400?text=Image+2", // Replace with actual image URL
    },
  ];

  // Function to handle card click
  const handleCardClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the specific product page using the product ID
  };

  return (
    <Box id="portfolio" className="py-16 bg-[#3B3030]">
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          className="font-extrabold text-center pb-9 text-[#FFF0D1]"
        >
          Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card
                className="group hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden bg-[#FFF0D1]" // Changed bg color to light
                elevation={3}
                onClick={() => handleCardClick(project.id)} // Trigger navigation on click
              >
                <div className="relative overflow-hidden">
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.name}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent sx={{ backgroundColor: "#FFF0D1" }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    className="font-bold mb-2 text-[#3B3030]" // Changed text color to dark
                  >
                    {project.name}
                  </Typography>
                  <Typography variant="body2" className="text-[#3B3030]">
                    {project.description}
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

export default Product;
