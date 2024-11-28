import React, { useState } from "react";

const Form = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    nombre: "",
    precio: "",
    categoria: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProduct.nombre && newProduct.precio && newProduct.categoria) {
      addProduct({
        ...newProduct,
        precio: parseFloat(newProduct.precio),
      });
      setNewProduct({ nombre: "", precio: "", categoria: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="nombre"
        value={newProduct.nombre}
        onChange={handleInputChange}
        placeholder="Nombre del producto"
        required
        style={styles.input}
      />
      <input
        type="number"
        name="precio"
        value={newProduct.precio}
        onChange={handleInputChange}
        placeholder="Precio"
        required
        style={styles.input}
      />
      <input
        type="text"
        name="categoria"
        value={newProduct.categoria}
        onChange={handleInputChange}
        placeholder="Categoría"
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Agregar Producto
      </button>
    </form>
  );
};

const styles = {
  form: {
    marginTop: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
    margin: "0 auto",
  },
  input: {
    padding: "8px",
    width: "100%",
    marginBottom: "10px",
    border: "1px solid #ddd",
  },
  button: {
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
  },
};

export default Form;
