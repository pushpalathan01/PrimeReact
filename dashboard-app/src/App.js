import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrapping pages inside MainLayout */}
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default App;


// <Router> (BrowserRouter)
// It enables navigation between different pages in our app.

// 2️⃣ <Routes>
// Defines all the possible routes (pages) in our app.