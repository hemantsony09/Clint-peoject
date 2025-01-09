import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Box,
  TextField,
} from "@mui/material";

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "Product 1",
    description:
      "This is a very long description for Product 1. It goes into detail about the features, uses, and benefits of the product, so users can understand all about it before making a purchase. It covers all aspects in a comprehensive manner.",
    price: "$10",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    name: "Product 2",
    description:
      "This is a very long description for Product 2. It goes into detail about the features, uses, and benefits of the product, so users can understand all about it before making a purchase. It covers all aspects in a comprehensive manner.",
    price: "$20",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    name: "Product 3",
    description:
      "This is a very long description for Product 3. It goes into detail about the features, uses, and benefits of the product, so users can understand all about it before making a purchase. It covers all aspects in a comprehensive manner.",
    price: "$30",
  },
  // Add more products as needed
];

const ProductTable = () => {
  const [expandedId, setExpandedId] = useState(null); // Track the expanded row
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log(`Delete product with id: ${id}`);
  };

  const toggleDescription = (id) => {
    setExpandedId((prev) => (prev === id ? null : id)); // Toggle description for the product
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <Box sx={{ margin: 4 }}>
      <Box
        sx={{ marginBottom: 2, display: "flex", justifyContent: "flex-start" }}
      >
        <TextField
          label="Search by Name"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearch}
          sx={{ marginRight: 2 }}
        />
      </Box>
      <TableContainer component={Paper} sx={{ backgroundColor: "#fff0d1" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "#3b3030", color: "#fff" }}>
                Image
              </TableCell>
              <TableCell style={{ backgroundColor: "#3b3030", color: "#fff" }}>
                Name
              </TableCell>
              <TableCell style={{ backgroundColor: "#3b3030", color: "#fff" }}>
                Description
              </TableCell>
              <TableCell style={{ backgroundColor: "#3b3030", color: "#fff" }}>
                Price
              </TableCell>
              <TableCell style={{ backgroundColor: "#3b3030", color: "#fff" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: 120, height: 120 }}
                  />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <div
                    style={{
                      maxWidth: "300px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {expandedId === product.id
                      ? product.description
                      : `${product.description.substring(0, 100)}...`}
                  </div>
                  <Button
                    onClick={() => toggleDescription(product.id)} // Toggle description when clicked
                    style={{ color: "#3b3030", textTransform: "none" }}
                  >
                    {expandedId === product.id ? "View Less" : "View More"}
                  </Button>
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(product.id)}
                    style={{ backgroundColor: "#3b3030" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
