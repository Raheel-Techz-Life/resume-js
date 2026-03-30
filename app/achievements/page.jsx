export default function Achievements() {
  return (
    <main id="page-achievements">
  <div className="kicker">Detailed Section / Recognition</div>
  <h1>Recognition <span style={{"color":"var(--accent)"}}>Ledger</span></h1>
  <p className="lead">A focused archive of outcomes from public competitions and technical initiatives. More than medals: these validate execution under pressure and real-world framing.</p>

  <section className="grid">
    <article className="card">
      <span className="badge gold">3rd Place</span>
      <h2>ONEST Hackathon 2025</h2>
      <p>Built Zero-Barrier Jobs, a voice-first employability platform for users with literacy and accessibility constraints, aligned to ONEST ecosystem capabilities.</p>
      <div className="year">25</div>
    </article>

    <article className="card">
      <span className="badge">National Finalist</span>
      <h2>Smart India Hackathon 2025</h2>
      <p>Finalist on two tracks: air-quality intelligence for Delhi-NCR and offline-first healthcare workflow tooling for ASHA workers.</p>
      <div className="year">25</div>
    </article>

    <article className="card">
      <span className="badge">Active Build</span>
      <h2>UIDAI Data Hackathon 2026</h2>
      <p>Developing SAMVIDHAN with multi-framework AI strategy for identity integrity, fraud signal intelligence, and governed analytics at national scale.</p>
      <div className="year">26</div>
    </article>
  </section>

  <section className="matrix">
    <h3>Signal Matrix</h3>
    <div className="table">
      <div className="cell">Competition Exposure</div><div className="cell">State + National</div>
      <div className="cell">Problem Domains</div><div className="cell">GovTech · HealthTech · EnvTech · Jobs</div>
      <div className="cell">Delivery Pattern</div><div className="cell">Prototype-to-Production Thinking</div>
      <div className="cell">Core Edge</div><div className="cell">AI + Full-stack + Systems framing</div>
    </div>
  </section>
</main>
  );
}
