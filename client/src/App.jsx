import { Route, Routes } from "react-router-dom";


import "./App.css";
import Login from "./Component/Login";
import Products from "./Component/Products";

import Register from "./Component/Register";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;