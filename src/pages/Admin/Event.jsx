import { useState } from "react";
import axios from "axios";
import "./AdminPanel.css";

const Event = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageValidation = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        if (Math.abs(aspectRatio - 3 / 2) < 0.01) {
          resolve(true);
        } else {
          reject(new Error("Image must have a 3:2 aspect ratio."));
        }
      };
      img.onerror = () => {
        reject(new Error("Invalid image file."));
      };
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        await handleImageValidation(file);
        setImage(file);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Authentication token is missing. Please log in.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "https://decor-hub-backend.onrender.com/api/event-products",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Product uploaded successfully:", response.data);

      setName("");
      setDescription("");
      setPrice("");
      setImage(null);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to upload product. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-panel">
      <h1>Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="image-upload">
          <label htmlFor="file-input">Click to upload an image</label>
          <input
            type="file"
            accept="image/*"
            id="file-input"
            onChange={handleImageUpload}
          />
          {image && <p>{image.name}</p>}
        </div>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <div style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "10px",
              top: "10px",
              color: "#333",
            }}
          >
            ₹
          </span>
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ paddingLeft: "25px", width: "100%" }}
            min="0"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Event;
