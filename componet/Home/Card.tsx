"use client";
import React, { useState } from "react";

type CardProps = {
  children: React.ReactNode;
  detailsContent: React.ReactNode; // allow text, buttons, etc
  className?: string;
  style?: React.CSSProperties;
};

export default function Card({
  children,
  detailsContent,
  className = "",
  style,
   ...props 
}: CardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center cursor-pointer overflow-hidden ${className}`}
      style={style}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
       {...props}
    >
      {children}

      {showDetails && (
        <div className="absolute inset-0  text-white flex items-end justify-center "
        style={{backgroundColor:" #0000006b"}}>
          {detailsContent}
        </div>
      )}
    </div>
  );
}
