import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import routes from "./routes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />  {/* ✅ Now using Navbar component */}

      <main className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;