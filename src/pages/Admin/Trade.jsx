import { useState } from "react";
import "./AdminPanel.css"; // Add this CSS for styling

const Trade = () => {
  const [image, setImage] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleImageDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      name,
      description,
      price,
      image,
    };
    console.log("Product submitted: ", productData);
    // Handle the upload logic here, e.g., sending data to a server
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel 1</h1>
      <form onSubmit={handleSubmit}>
        <div
          className={`image-dropzone ${dragging ? "dragging" : ""}`}
          onClick={() => document.getElementById("file-input").click()} // Trigger file input on click
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleImageDrop}
        >
          {image ? (
            <img src={image} alt="Uploaded Preview" />
          ) : (
            <p>Drag & Drop an image here or click to upload</p>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="file-input" // Add an id to the input for easier reference
          />
        </div>
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
        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Trade;
