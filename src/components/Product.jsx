  import React from "react";
  import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";

  function Product() {
    const navigate = useNavigate(); 

    const projects = [
      {
        id: 1,
        name: "Trade",
        description: "A great project that solves many problems.",
        path: "/gallery/trade", 
      },
      {
        id: 2,
        name: "Events",
        description: "An innovative solution for modern challenges.",
        path: "/gallery/events",
      },
    ];
    const handleCardClick = (path) => {
      navigate(path); 
    };

    return (
      <Box id="portfolio" className="py-16 pt-24 bg-[#3B3030]">
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            className="font-extrabold text-center pb-9 text-[#FFF0D1]"
          >
            Gallery
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card
                  className="group hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden bg-[#FFF0D1]" 
                  elevation={3}
                  onClick={() => handleCardClick(project.path)} 
                >
                  <div className="relative overflow-hidden">
                    <CardMedia
                      height="200"
                      alt={project.name}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent sx={{ backgroundColor: "#FFF0D1" }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      className="font-bold mb-2 text-[#3B3030]" 
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
