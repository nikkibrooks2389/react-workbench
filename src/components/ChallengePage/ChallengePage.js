import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { challengeData } from "../../data/challengeData";
import Sidebar from "../Sidebar/Sidebar";


export default function ChallengePage() {
  const { category, challengeId } = useParams();
  const navigate = useNavigate();

  console.log("🔍 Params:", { category, challengeId });

  if (!category || !challengeData[category]) {
    return <h2>Category Not Found</h2>;
  }

  const challenges = challengeData[category];
  const challenge = challenges.find((c) => c.id === challengeId);

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", background: "#f8f8f8" }}>
   <Sidebar category={category} challenges={challenges} challengeId={challengeId} />

      {/* Main content area */}
      <main style={{ flexGrow: 1, padding: "20px", marginLeft: "280px" }}>
        {challenge ? (
          <>
            <h2>{challenge.name}</h2>
            <challenge.component />
          </>
        ) : (
          <h2>Select a Challenge</h2>
        )}
      </main>
    </div>
  );
}