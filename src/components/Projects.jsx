export default function Projects() {
  return (
<section id="projects">
  <h2>Projects</h2>
  <div className="grid">
    
    <div className="card">
      <h3 style={{ marginBottom: "10px", color: "#6366f1" }}>
        MiniShop Website
      </h3>
      <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
        An e-commerce web application similar to Amazon where users can browse
        products, add items to cart, and make secure online payments.
      </p>
      <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>
        <strong>Tech Stack:</strong><br />
        HTML, CSS, JavaScript, React, Python, Django, SQLite, Razorpay
      </p>
    </div>

    <div className="card">
      <h3 style={{ marginBottom: "10px", color: "#6366f1" }}>
        Foodie Website
      </h3>
      <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
        A food ordering website where users can explore restaurants, view menus,
        place food orders, and complete payments online.
      </p>
      <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>
        <strong>Tech Stack:</strong><br />
        HTML, CSS, JavaScript, Python, Django, SQLite, Razorpay
      </p>
    </div>

    <div className="card">
      <h3 style={{ marginBottom: "10px", color: "#6366f1" }}>
        Portfolio Website
      </h3>
      <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
        A personal portfolio website to showcase my skills, projects, and
        contact details with a modern UI and dark mode support.
      </p>
      <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>
        <strong>Tech Stack:</strong><br />
        HTML, CSS, JavaScript, React
      </p>
    </div>

  </div>
</section>
  );
}

