import React from "react";

import "./PageWrapper.css";

const PageWrapper = ({ title, children }) => {
  return (
    <div className="page-container">
      <h1>{title}</h1>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default PageWrapper;