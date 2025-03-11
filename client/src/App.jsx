import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/HomePage")); 
const About = lazy(() => import("./pages/AboutPage"))
// const NotFound = lazy(() => import("./pages/NotFoundPage")); 

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
