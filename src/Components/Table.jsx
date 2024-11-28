import React, { useState, useEffect } from "react";

const Table = ({ data, theme }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ width: "80%", margin: "20px auto" }}>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="spinner"></div> 
          <p>Cargando...</p>
        </div>
      ) : (
        <table style={{ margin: "20px auto", borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ ...styles.th, backgroundColor: theme === "dark" ? "#555" : "#f0f0f0" }}>ID</th>
              <th style={{ ...styles.th, backgroundColor: theme === "dark" ? "#555" : "#f0f0f0" }}>Nombre</th>
              <th style={{ ...styles.th, backgroundColor: theme === "dark" ? "#555" : "#f0f0f0" }}>Precio</th>
              <th style={{ ...styles.th, backgroundColor: theme === "dark" ? "#555" : "#f0f0f0" }}>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id}>
                <td style={{ ...styles.td, color: theme === "dark" ? "white" : "black" }}>{product.id}</td>
                <td style={{ ...styles.td, color: theme === "dark" ? "white" : "black" }}>{product.nombre}</td>
                <td style={{ ...styles.td, color: theme === "dark" ? "white" : "black" }}>${product.precio}</td>
                <td style={{ ...styles.td, color: theme === "dark" ? "white" : "black" }}>{product.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  th: {
    padding: "8px",
    border: "1px solid #ddd",
  },
  td: {
    padding: "8px",
    border: "1px solid #ddd",
  },
};

export default Table;
