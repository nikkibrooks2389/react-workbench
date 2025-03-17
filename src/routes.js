
import React from "react";

import ChallengePage from "./components/ChallengePage/ChallengePage";
import Home from "./pages/Home";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/:category", element: <ChallengePage /> },
  { path: "/:category/:challengeId", element: <ChallengePage /> }, // ✅ Now all challenges are handled dynamically
];

export default routes;