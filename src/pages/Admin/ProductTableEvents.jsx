import React, { useState, useEffect } from "react";
import axios from "axios";
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
  Modal,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const DragDropArea = styled("div")(({ theme }) => ({
  border: "2px dashed #ccc",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  marginBottom: "15px",
}));

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://decor-hub-backend.onrender.com/api/event-products"
        );
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormValues({
      name: product.name,
      description: product.description,
      price: product.price,
      image: null,
    });
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setEditingProduct(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormValues((prev) => ({ ...prev, image: file }));
  };

  const handleSaveEdit = async () => {
    if (!editingProduct) return;

    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("description", formValues.description);
    formData.append("price", formValues.price);
    if (formValues.image) {
      formData.append("image", formValues.image);
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in local storage");
        return;
      }

      await axios.put(
        `https://decor-hub-backend.onrender.com/api/event-products/${editingProduct._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedProducts = products.map((product) =>
        product._id === editingProduct._id
          ? { ...product, ...formValues, image: editingProduct.image }
          : product
      );

      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
      handleCloseEditModal();
    } catch (err) {
      console.error("Error updating the product:", err);
      alert("Failed to update the product. Please try again.");
    }
  };

  const handleDelete = async (_id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in local storage");
      return;
    }

    try {
      await axios.delete(
        `https://decor-hub-backend.onrender.com/api/event-products/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedProducts = products.filter((product) => product._id !== _id);
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
    } catch (err) {
      console.error("Error deleting the product:", err);
      alert("Failed to delete the product. Please try again.");
    }
  };

  if (loading)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );

  // Add the above `style` in a <style> tag if you're using it directly within JSX

  if (error) return <p>{error}</p>;

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
              <TableCell
                style={{
                  backgroundColor: "#3b3030",
                  color: "#fff",
                  width: "40%",
                  textAlign: "start",
                }}
              >
                Description
              </TableCell>
              <TableCell style={{ backgroundColor: "#3b3030", color: "#fff" }}>
                Price
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#3b3030",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product._id}>
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
                      maxWidth: "500px",
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                    }}
                  >
                    {product.description}
                  </div>
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Box display="flex" justifyContent="center" gap={1}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={openEditModal} onClose={handleCloseEditModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#fff0d1",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Edit Product
          </Typography>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleFormChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formValues.description}
            onChange={handleFormChange}
            multiline
            rows={3}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Price"
            name="price"
            value={formValues.price}
            onChange={handleFormChange}
            sx={{ marginBottom: 2 }}
          />
          {/* <DragDropArea>
            <input
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
              style={{ display: "none" }}
              id="image-upload"
            />
            <label htmlFor="image-upload">
              Drag and drop or click to upload
            </label>
          </DragDropArea> */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSaveEdit}
            sx={{ marginTop: 2 }}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="red"
            fullWidth
            onClick={handleCloseEditModal}
            sx={{ marginTop: 1 }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProductTable;
