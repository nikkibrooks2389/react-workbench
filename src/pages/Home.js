import React from "react";

import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper/PageWrapper";
const pages = [
  { path: "/state-management", name: "State Management" },
  { path: "/ui", name: "UI Components" },
  { path: "/networking", name: "Networking" },
  { path: "/animation", name: "Animation" },
  { path: "/games", name: "Games" },
  { path: "/utilities", name: "Utilities" },
];

export default function Home() {
  return (
    <PageWrapper title="React WorkBench">
      <p>Select a challenge:</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {pages.map(({ path, name }) => (
          <Link
            to={path}
            key={path}
            style={{
              padding: "15px",
              border: "1px solid #ccc",
              textAlign: "center",
              textDecoration: "none",
              background: "#f9f9f9",
              borderRadius: "5px"
            }}
          >
            {name}
          </Link>
        ))}
      </div>
      </PageWrapper>
  );
}
