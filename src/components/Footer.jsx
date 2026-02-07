export default function Footer() {
  return (
    <>
      <style>{`
        footer {
          background: #020617;
          color: #e5e7eb;
          padding: 40px 20px;
          text-align: center;
        }

        footer a {
          display: block;
          margin: 8px 0;
          color: #93c5fd;
          text-decoration: none;
        }
      `}</style>

      <footer id="contact">
        <h2>Contact</h2>
        <a href="mailto:abdulazimdeshmukh@gmail.com">abdulazimdeshmukh@gmail.com</a>
        <a href="tel:+917304786189">+91 7304786189</a>
        <a href="https://www.linkedin.com/in/abdulazim1234/">LinkedIn</a>
        <a href="https://github.com/Abdulazim-deshmukh">GitHub</a>
        <p>© 2026 Abdulazim Deshmukh</p>
      </footer>
    </>
  );
}

