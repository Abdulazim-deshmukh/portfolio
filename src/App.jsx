import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <>
      {/* GLOBAL STYLES (SAME AS BEFORE) */}
      <style>{`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", sans-serif;
    scroll-behavior: smooth;
  }

  body {
    background: ${dark ? "#020617" : "#f8fafc"};
    color: ${dark ? "#e5e7eb" : "#0f172a"};
    transition: 0.4s;
  }

  nav {
    position: sticky;
    top: 0;
    backdrop-filter: blur(10px);
    background: ${dark ? "rgba(2,6,23,0.8)" : "rgba(255,255,255,0.8)"};
    border-bottom: 1px solid rgba(255,255,255,0.1);
    z-index: 1000;
  }

  .nav-container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px;
  }

  .logo {
    font-size: 1.4rem;
    font-weight: 700;
    background: linear-gradient(90deg,#6366f1,#3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .nav-links a {
    margin-left: 20px;
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    position: relative;
  }

  .nav-links a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: #6366f1;
    transition: 0.3s;
  }

  .nav-links a:hover::after {
    width: 100%;
  }

  .toggle {
    margin-left: 20px;
    background: linear-gradient(135deg,#6366f1,#3b82f6);
    border: none;
    color: white;
    padding: 6px 14px;
    border-radius: 20px;
    cursor: pointer;
  }

  header {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle at top,#6366f1,#020617);
    color: white;
    text-align: center;
    padding: 40px 20px;
  }

  .hero img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid white;
    box-shadow: 0 0 40px rgba(99,102,241,0.8);
    margin-bottom: 20px;
    animation: float 4s ease-in-out infinite;
  }

  @keyframes float {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  header h1 {
    font-size: 3rem;
    font-weight: 800;
  }

  header p {
    font-size: 1.2rem;
    opacity: 0.9;
  }

  section {
    max-width: 1200px;
    margin: auto;
    padding: 80px 20px;
    animation: fadeUp 1s ease forwards;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }

  h2 {
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 40px;
    background: linear-gradient(90deg,#6366f1,#3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .box {
    background: ${dark ? "rgba(255,255,255,0.04)" : "white"};
    backdrop-filter: blur(12px);
    padding: 35px;
    border-radius: 18px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
    gap: 25px;
  }

  .card {
    background: ${dark ? "rgba(255,255,255,0.05)" : "#f1f5f9"};
    padding: 28px;
    border-radius: 16px;
    transition: 0.4s;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  }

  .card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 60px rgba(99,102,241,0.4);
  }

  footer {
    background: #020617;
    color: #cbd5f5;
    padding: 50px 20px;
    text-align: center;
  }

  footer a {
    display: block;
    margin: 10px 0;
    color: #93c5fd;
    text-decoration: none;
  }

  @media (max-width: 600px) {
    header h1 { font-size: 2.2rem; }
    section { padding: 60px 16px; }
  }
`}</style>


      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
