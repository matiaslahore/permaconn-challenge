import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ProductCreate from "./components/Product/ProductCreate";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4 mt-12 ">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/create" element={<ProductCreate />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

