export default function Work() {
  return (
    <main id="page-work">
  <div className="kicker">Detailed Section / Work</div>
  <h1>Shipped & <span style={{"color":"var(--accent)"}}>Operated</span></h1>
  <p className="lead">This page tracks practical output beyond competition lanes: client delivery, community technical support, portfolio experiments, and open-source motion.</p>

  <section className="grid">
    <article className="card">
      <div className="type">Web Development</div>
      <h2>Real Estate Agency Website</h2>
      <p>Delivered end-to-end property discovery and inquiry flow with backend-integrated listing management. Final handoff completed, publication deferred by client-side backend direction changes.</p>
      <span className="status locked">Unpublished</span>
    </article>

    <article className="card">
      <div className="type">Hackathon Volunteering</div>
      <h2>Operations & Mentoring</h2>
      <p>Contributed to event operations, participant guidance, and cross-team technical troubleshooting across multiple Karnataka ecosystem hackathons.</p>
      <span className="status live">Active</span>
    </article>

    <article className="card">
      <div className="type">Open Source</div>
      <h2>GitHub Build Stream</h2>
      <p>Maintains a mixed repository stream spanning AI/ML explorations, web systems, embedded builds, and Firebase-backed experiments.</p>
      <a className="link" href="https://github.com/Raheel-Techz-Life" target="_blank">Open github.com/Raheel-Techz-Life →</a>
    </article>

    <article className="card">
      <div className="type">Portfolio R&D</div>
      <h2>Design + Motion Prototypes</h2>
      <p>Iterative portfolio and resume experiments focused on design systems, kinetic UI, and personal branding architecture, retained as private drafts.</p>
      <span className="status locked">Unreleased</span>
    </article>
  </section>

  <section className="terminal">
    <div className="line">$ status --focus delivery</div>
    <div className="line"><span style={{"color":"var(--ok)"}}>[OK]</span> Client-grade builds shipped</div>
    <div className="line"><span style={{"color":"var(--ok)"}}>[OK]</span> Community tech contribution ongoing</div>
    <div className="line"><span style={{"color":"var(--ok)"}}>[OK]</span> Open-source repos active</div>
    <div className="line">[NEXT] Convert experimental drafts to public case studies</div>
  </section>
</main>
  );
}
