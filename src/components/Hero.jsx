export default function Header() {
  return (
    <>
      <style>{`
        header {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #6366f1, #05142b);
          color: white;
          text-align: center;
        }

        .hero img {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 4px solid white;
          margin-bottom: 20px;
        }
      `}</style>

      <header>
        <div className="hero">
          <img src="/PROFILE.jpeg" alt="Profile" />
          <h1>Abdulazim Deshmukh</h1>
          <p>Full Stack Developer</p>
        </div>
      </header>
    </>
  );
}

