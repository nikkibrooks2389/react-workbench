import React from "react";

import { useNavigate } from "react-router-dom";
import "./Sidebar.css"; // ✅ Import CSS for styling

export default function Sidebar({ category, challenges, challengeId }) {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <h3>{category.replace("-", " ").toUpperCase()} Challenges</h3>
      <ul className="sidebar-list">
        {challenges.map(({ id, name }) => (
          <li key={id} className="sidebar-item">
            <button
              onClick={() => navigate(`/${category}/${id}`)}
              className={id === challengeId ? "sidebar-button active" : "sidebar-button"}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}