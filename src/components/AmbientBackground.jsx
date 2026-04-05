import React from 'react';
import '../App.css'; 

export default function AmbientBackground() {
  return (
    <div className="ambient-background">
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>
      <div className="ambient-orb orb-3"></div>
      <div className="noise-overlay"></div>
    </div>
  );
}
