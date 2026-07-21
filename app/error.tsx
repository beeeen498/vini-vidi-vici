"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        gap: "15px",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "60px", color: "#E6D393" }}>Oops!</h1>
      <h2>Something went wrong</h2>
      <p style={{ color: "#aaa", maxWidth: "400px" }}>
        An unexpected error occurred. Please try again.
      </p>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
