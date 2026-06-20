"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/project-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = "/projects/ai-cloud-infrastructure";
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "320px",
        }}
      >
        <h1
          className="font-merriweather"
          style={{ fontSize: "24px", textAlign: "center" }}
        >
          This project is password protected
        </h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            fontFamily: "'Nunito', sans-serif",
          }}
        />
        {error && (
          <p style={{ color: "#c00", fontSize: "14px", textAlign: "center" }}>
            {error}
          </p>
        )}
        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "var(--purple)",
            color: "white",
            fontSize: "16px",
            fontFamily: "'Nunito', sans-serif",
            cursor: "pointer",
          }}
        >
          Enter
        </button>
      </form>
    </div>
  );
}
