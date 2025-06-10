import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Forms from "./pageChekout/Forms.jsx";
import Orcamento from "./pageChekout/Orcamento/Orcamento.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="items-center ">
      <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-2">
        <Orcamento />
        <Forms />
      </div>
    </div>
  </StrictMode>
);
