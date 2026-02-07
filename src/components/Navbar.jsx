export default function Navbar({ dark, setDark }) {
  return (
    <>
      <style>{`
        nav {
          position: sticky;
          top: 0;
          background: ${dark ? "#020617" : "#ffffff"};
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          z-index: 1000;
        }

        .nav-container {
          max-width: 1100px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
        }

        .logo {
          font-size: 1.4rem;
          font-weight: bold;
          color: #6366f1;
        }

        .nav-links a {
          margin-left: 20px;
          text-decoration: none;
          color: inherit;
          font-weight: 600;
        }

        .toggle {
          margin-left: 20px;
          cursor: pointer;
          border: none;
          background: #6366f1;
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
        }
      `}</style>

      <nav>
        <div className="nav-container">
          <div className="logo">Abdulazim</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <button className="toggle" onClick={() => setDark(!dark)}>
              {dark ? "☀ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

