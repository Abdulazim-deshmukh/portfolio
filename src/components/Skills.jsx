export default function Skills() {
  const skills = [
    "HTML5","CSS3","JavaScript","React",
    "Python","Django","MySQL","SQLite",
    "MongoDB","Git & GitHub"
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="grid">
        {skills.map(skill => (
          <div className="card" key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
}
