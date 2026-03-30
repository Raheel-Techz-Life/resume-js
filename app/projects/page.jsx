export default function Projects() {
  return (
    <main id="page-projects">
  <div className="kicker">Detailed Section / Projects</div>
  <h1>Project <span style={{"color":"var(--accent)"}}>Dossier</span></h1>
  <p className="lead">Expanded technical snapshots of core builds, with architecture flavor, stack decisions, and deployment intent. Same visual system, deeper engineering narrative.</p>

  <div className="grid">
    <article className="card" data-id="01" id="project-samvidhan">
      <h2>SAMVIDHAN</h2>
      <div className="meta">UIDAI Data Hackathon 2026 · Flagship AI Platform</div>
      <p>Identity-intelligence suite designed for Aadhaar-scale governance analytics. Target profile: sub-500ms response pipelines, privacy-preserving access patterns, and auditable fraud insights across high-volume citizen records.</p>
      <div className="tags">
        <span className="tag">Next.js 16</span><span className="tag">FastAPI</span><span className="tag">Python 3.11</span><span className="tag">RBAC</span><span className="tag">Differential Privacy</span>
      </div>
      <div className="tech-panel"><div className="code">frameworks = ["ADIF", "IRF", "AFIF", "PROF", "AMF", "PPAF"]
SLO = &#123;"p95_latency_ms": 500, "auditability": "strict", "privacy_mode": "enabled"&#125;</div></div>
      <div className="project-details">
        <div className="detail-grid">
            <div className="detail-block">
                <h4>Overview</h4>
                <p>Powered by 6 AI frameworks for governance intelligence, citizen privacy, and policy optimization. Serves 1.4 billion+ citizens with fraud detection, data integrity verification, and privacy-preserving analytics. Features differential privacy, federated analytics, and real-time anomaly detection with 40+ API endpoints.</p>
            </div>
            <div className="detail-block">
                <h4>Key Features</h4>
                <ul>
                    <li>6 Intelligence Frameworks (ADIF, IRF, AFIF, PROF, AMF, PPAF)</li>
                    <li>40+ FastAPI endpoints with complete API documentation</li>
                    <li>Fraud detection & anomaly analysis with geospatial tracking</li>
                    <li>Differential privacy & federated analytics</li>
                </ul>
            </div>
        </div>
        <h3>Technology Stack</h3>
        <div className="tech-stack-grid">
            <span className="tech-tag">Next.js 16</span>
            <span className="tech-tag">React 19</span>
            <span className="tech-tag">FastAPI</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">AI/ML</span>
            <span className="tech-tag">Privacy Tech</span>
            <span className="tech-tag">Government Tech</span>
        </div>
      </div>
    </article>

    <article className="card" data-id="02" id="project-aqi">
      <h2>Delhi AQI Monitor</h2>
      <div className="meta">Smart India Hackathon 2025 · Environmental Intelligence</div>
      <p>Real-time dashboard and predictive layer for Delhi-NCR stations. Includes 24-hour forecast trendline, cross-station comparison, and source-level contribution cues for decision support.</p>
      <div className="tags">
        <span className="tag">Next.js 14</span><span className="tag">TypeScript</span><span className="tag">Mapbox</span><span className="tag">Recharts</span>
      </div>
      <div className="tech-panel"><div className="code">ingest -&gt; clean -&gt; feature_window -&gt; forecast_model -&gt; map_overlay -&gt; alert_panel</div></div>
      <div className="project-details">
        <p>Detailed information about the Delhi AQI Monitor project will go here.</p>
      </div>
    </article>

    <article className="card" data-id="03" id="project-asha">
      <h2>ASHA Sync Pro</h2>
      <div className="meta">SIH 2025 · Offline-First Rural Healthcare</div>
      <p>PWA focused on low-connectivity healthcare workflows for ASHA workers. Core priorities: uninterrupted local capture, multilingual voice inputs, sync reliability, and low-friction usability in the field.</p>
      <div className="tags">
        <span className="tag">IndexedDB</span><span className="tag">Service Workers</span><span className="tag">Web Speech API</span><span className="tag">PWA</span>
      </div>
      <div className="tech-panel"><div className="code">queue.push(formPayload)
if (network.online) syncEngine.flush(queue)
else cache.persist(queue)</div></div>
      <div className="project-details">
        <p>Detailed information about the ASHA Sync Pro project will go here.</p>
      </div>
    </article>

    <article className="card" data-id="04" id="project-onest">
      <h2>Zero-Barrier Jobs</h2>
      <div className="meta">ONEST Hackathon 2025 · 3rd Place</div>
      <p>Voice-first employability access layer for users with low literacy constraints. Missed-call and IVR driven flow, multilingual routing, and WhatsApp bridge to improve application completion rates.</p>
      <div className="tags">
        <span className="tag">ONEST</span><span className="tag">BHASHINI</span><span className="tag">IVR</span><span className="tag">WhatsApp API</span>
      </div>
      <div className="tech-panel"><div className="code">phone_call -&gt; intent_detect -&gt; language_route -&gt; profile_capture -&gt; job_match -&gt; confirmation</div></div>
      <div className="project-details">
        <p>Detailed information about the Zero-Barrier Jobs project will go here.</p>
      </div>
    </article>
  </div>
</main>
  );
}
