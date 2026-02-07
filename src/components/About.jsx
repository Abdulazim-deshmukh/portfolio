export default function About() {
  return (
    <section id="about">
  <style>{`
    .about-wrapper {
      display: flex;
      justify-content: center;
    }

    .about-card {
      max-width: 900px;
      padding: 40px;
      border-radius: 16px;
      background: linear-gradient(
        135deg,
        rgba(99,102,241,0.08),
        rgba(59,130,246,0.08)
      );
      animation: fadeUp 1s ease forwards;
      transform: translateY(30px);
      opacity: 0;
    }

    .about-card:hover {
      transform: translateY(-6px);
      transition: 0.4s ease;
    }

    .about-title {
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 20px;
      background: linear-gradient(90deg, #6366f1, #3b82f6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .about-text {
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 15px;
    }

    .highlight {
      color: #6366f1;
      font-weight: 600;
    }

    @keyframes fadeUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 600px) {
      .about-card {
        padding: 25px;
      }

      .about-title {
        font-size: 1.6rem;
      }

      .about-text {
        font-size: 0.95rem;
      }
    }
  `}</style>

  <div className="about-wrapper">
    <div className="about-card">
      <div className="about-title">About Me</div>

      <p className="about-text">
        I am a passionate <span className="highlight">Full Stack Developer</span>{" "}
        with hands-on experience in building complete web applications from
        frontend to backend. I specialize in crafting responsive, user-friendly
        interfaces using{" "}
        <span className="highlight">HTML, CSS, JavaScript, and React</span>.
      </p>

      <p className="about-text">
        On the backend, I work with{" "}
        <span className="highlight">Python and Django</span> to develop secure
        APIs, manage databases, and handle business logic. I have implemented
        real-world features such as authentication, cart systems, and online
        payments using{" "}
        <span className="highlight">SQLite and Razorpay</span>.
      </p>

      <p className="about-text">
        As a fresher, I am highly motivated to learn and grow in a professional
        environment. I enjoy solving problems, writing clean and maintainable
        code, and continuously improving my technical skills through hands-on
        projects.
      </p>
    </div>
  </div>
</section>
  );
}
