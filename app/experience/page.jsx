export default function Experience() {
  return (
    <main id="page-experience">
  <div className="kicker">Detailed Section / Experience</div>
  <h1>Operating <span style={{"color":"var(--accent)"}}>Timeline</span></h1>
  <p className="lead">A fuller view of leadership, engineering, coordination, and delivery contexts. Focus is on ownership, execution velocity, and systems thinking under team constraints.</p>

  <section className="timeline">
    <article className="item">
      <div className="date">2026 — Present</div>
      <div className="role">Secretary, IEEE Computer Society</div>
      <div className="org">IEEE CS Bangalore Chapter · KLE Institute of Technology</div>
      <p className="desc">Leading technical planning for Student Internship & Mentorship Program 2026. Balancing architectural guidance with team throughput and review discipline.</p>
      <ul className="bullets">
        <li>Directed architecture calls across web and ML substreams</li>
        <li>Maintained quality gates for pull requests and release readiness</li>
        <li>Owned mentor-facing communication and delivery commitments</li>
      </ul>
    </article>

    <article className="item">
      <div className="date">2024 — 2025</div>
      <div className="role">Webmaster, IEEE Computer Society</div>
      <div className="org">IEEE CS Bangalore Chapter · KLE Institute of Technology</div>
      <p className="desc">Managed chapter digital infrastructure and reliability of web communication channels while supporting technical events and operational needs.</p>
      <ul className="bullets">
        <li>Maintained public-facing web stack and updates cycle</li>
        <li>Supported event-tech coordination and publishing workflows</li>
      </ul>
    </article>

    <article className="item">
      <div className="date">2024</div>
      <div className="role">Intern</div>
      <div className="org">Scaler School of Technology</div>
      <p className="desc">Worked through structured engineering modules covering software foundations, coding rigor, and professional collaboration habits.</p>
      <ul className="bullets">
        <li>Practiced implementation under constrained timelines</li>
        <li>Strengthened CS fundamentals and problem-solving discipline</li>
      </ul>
    </article>

    <article className="item">
      <div className="date">Ongoing</div>
      <div className="role">CS Engineer (AI/ML Focus)</div>
      <div className="org">KLE Institute of Technology · Hubli, Karnataka</div>
      <p className="desc">Pursuing applied AI/ML while building practical systems through hackathons, open-source work, and high-ownership student leadership roles.</p>
    </article>
  </section>

  <section className="statline"></section>
</main>
  );
}
