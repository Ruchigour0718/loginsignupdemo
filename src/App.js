import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Bloglist from "./component/Bloglist";
import Blogdetail from "./component/Blogdetail";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="bloglist" element={<Bloglist />} />
        <Route path="blogdetail" element={<Blogdetail />} />
      </Routes>
    </div>
  );
};

export default App;
