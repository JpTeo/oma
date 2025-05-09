import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.min.css";
import Router from "./router";

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

// Obtener el elemento contenedor
const container = document.getElementById("root");

// Verificar que el contenedor existe antes de crear la raíz
if (container) {
  // Crear la raíz de React
  const root = createRoot(container);

  // Renderizar la aplicación
  root.render(<App />);
}
