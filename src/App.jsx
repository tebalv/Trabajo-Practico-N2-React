import React, { useState, useEffect } from "react";
import Table from "./Components/Table";
import Form from "./Components/Form";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, nombre: "Auriculares Inalámbricos", precio: 120, categoria: "Electrónica" },
    { id: 2, nombre: "Silla de Escritorio", precio: 300, categoria: "Muebles" },
    { id: 3, nombre: "Cafetera Espresso", precio: 250, categoria: "Electrodomésticos" },
    { id: 4, nombre: "Juego de Mesa - Monopoly", precio: 50, categoria: "Juguetes" },
    { id: 5, nombre: "Libro de Programación en JavaScript", precio: 35, categoria: "Libros" },
  ]);

  const [theme, setTheme] = useState("light");

  //modo oscuro o claro
  useEffect(() => {
    const detectTheme = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(detectTheme.matches ? "dark" : "light");

    const handleThemeChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    detectTheme.addEventListener("change", handleThemeChange);

    return () => {
      detectTheme.removeEventListener("change", handleThemeChange);
    };
  }, []);

  const addProduct = (product) => {
    const nextId = products.length ? products[products.length - 1].id + 1 : 1;
    setProducts((prevState) => [...prevState, { ...product, id: nextId }]);
  };

  return (
    <div style={{ ...styles.container, backgroundColor: theme === "dark" ? "#333" : "#f4f4f4" }}>
      <h1 style={{ color: theme === "dark" ? "white" : "black" }}>Gestión de Productos</h1>
      <Form addProduct={addProduct} theme={theme} />
      <Table data={products} theme={theme} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center", 
    minHeight: "100vh", 
    padding: "20px",
    textAlign: "center",
    boxSizing: "border-box", 
  },
};

export default App;
