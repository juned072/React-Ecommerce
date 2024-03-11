import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Success from "./pages/Success";
import Protected from "./pages/Protected";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/success" element={<Protected element={<Success />} />} />
      </Routes>
    </Router>
  );
};

export default App;
