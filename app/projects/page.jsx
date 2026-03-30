'use client'
import { useState } from 'react'
import styles from './projects.module.css'

export default function Projects() {
  const [expanded, setExpanded] = useState(null)

  const toggle = (id) => setExpanded(prev => prev === id ? null : id)

  return (
    <main className={styles.main}>
      <div className={styles.kicker}>Detailed Section / Projects</div>
      <h1 className={styles.heading}>
        Project <span>Dossier</span>
      </h1>
      <p className={styles.lead}>
        Expanded technical snapshots of core builds, with architecture flavor,
        stack decisions, and deployment intent. Same visual system, deeper
        engineering narrative.
      </p>

      <div className={styles.grid}>

        {/* SAMVIDHAN */}
        <article
          data-id="01"
          className={`${styles.card} ${expanded === '01' ? styles.cardExpanded : ''}`}
          onClick={() => toggle('01')}
        >
          <h2 className={styles.cardTitle}>SAMVIDHAN</h2>
          <div className={styles.meta}>UIDAI Data Hackathon 2026 · Flagship AI Platform</div>
          <p className={styles.cardDesc}>
            Identity-intelligence suite designed for Aadhaar-scale governance analytics.
            Target profile: sub-500ms response pipelines, privacy-preserving access patterns,
            and auditable fraud insights across high-volume citizen records.
          </p>
          <div className={styles.tags}>
            <span className={styles.tag}>Next.js 16</span>
            <span className={styles.tag}>FastAPI</span>
            <span className={styles.tag}>Python 3.11</span>
            <span className={styles.tag}>RBAC</span>
            <span className={styles.tag}>Differential Privacy</span>
          </div>
          <div className={styles.techPanel}>
            <div className={styles.code}>{`frameworks = ["ADIF", "IRF", "AFIF", "PROF", "AMF", "PPAF"]
SLO = {"p95_latency_ms": 500, "auditability": "strict", "privacy_mode": "enabled"}`}</div>
          </div>
          <div className={styles.projectDetails}>
            <div className={styles.detailGrid}>
              <div className={styles.detailBlock}>
                <h4>Overview</h4>
                <p>Powered by 6 AI frameworks for governance intelligence, citizen privacy,
                and policy optimization. Serves 1.4B+ citizens with fraud detection,
                data integrity verification, and privacy-preserving analytics.</p>
              </div>
              <div className={styles.detailBlock}>
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
            <div className={styles.techStackGrid}>
              {['Next.js 16','React 19','FastAPI','Python','TypeScript','AI/ML','Privacy Tech','Government Tech'].map(t => (
                <span key={t} className={styles.techTag}>{t}</span>
              ))}
            </div>
          </div>
        </article>

        {/* DELHI AQI */}
        <article
          data-id="02"
          className={`${styles.card} ${expanded === '02' ? styles.cardExpanded : ''}`}
          onClick={() => toggle('02')}
        >
          <h2 className={styles.cardTitle}>Delhi AQI Monitor</h2>
          <div className={styles.meta}>Smart India Hackathon 2025 · Environmental Intelligence</div>
          <p className={styles.cardDesc}>
            Real-time dashboard and predictive layer for Delhi-NCR stations. Includes
            24-hour forecast trendline, cross-station comparison, and source-level
            contribution cues for decision support.
          </p>
          <div className={styles.tags}>
            <span className={styles.tag}>Next.js 14</span>
            <span className={styles.tag}>TypeScript</span>
            <span className={styles.tag}>Mapbox</span>
            <span className={styles.tag}>Recharts</span>
          </div>
          <div className={styles.techPanel}>
            <div className={styles.code}>ingest -{'>'} clean -{'>'} feature_window -{'>'} forecast_model -{'>'} map_overlay -{'>'} alert_panel</div>
          </div>
          <div className={styles.projectDetails}>
            <p className={styles.cardDesc}>Detailed information coming soon.</p>
          </div>
        </article>

        {/* ASHA SYNC */}
        <article
          data-id="03"
          className={`${styles.card} ${expanded === '03' ? styles.cardExpanded : ''}`}
          onClick={() => toggle('03')}
        >
          <h2 className={styles.cardTitle}>ASHA Sync Pro</h2>
          <div className={styles.meta}>SIH 2025 · Offline-First Rural Healthcare</div>
          <p className={styles.cardDesc}>
            PWA focused on low-connectivity healthcare workflows for ASHA workers.
            Core priorities: uninterrupted local capture, multilingual voice inputs,
            sync reliability, and low-friction usability in the field.
          </p>
          <div className={styles.tags}>
            <span className={styles.tag}>IndexedDB</span>
            <span className={styles.tag}>Service Workers</span>
            <span className={styles.tag}>Web Speech API</span>
            <span className={styles.tag}>PWA</span>
          </div>
          <div className={styles.techPanel}>
            <div className={styles.code}>{`queue.push(formPayload)
if (network.online) syncEngine.flush(queue)
else cache.persist(queue)`}</div>
          </div>
          <div className={styles.projectDetails}>
            <p className={styles.cardDesc}>Detailed information coming soon.</p>
          </div>
        </article>

        {/* ZERO BARRIER JOBS */}
        <article
          data-id="04"
          className={`${styles.card} ${expanded === '04' ? styles.cardExpanded : ''}`}
          onClick={() => toggle('04')}
        >
          <h2 className={styles.cardTitle}>Zero-Barrier Jobs</h2>
          <div className={styles.meta}>ONEST Hackathon 2025 · 3rd Place</div>
          <p className={styles.cardDesc}>
            Voice-first employability access layer for users with low literacy constraints.
            Missed-call and IVR driven flow, multilingual routing, and WhatsApp bridge
            to improve application completion rates.
          </p>
          <div className={styles.tags}>
            <span className={styles.tag}>ONEST</span>
            <span className={styles.tag}>BHASHINI</span>
            <span className={styles.tag}>IVR</span>
            <span className={styles.tag}>WhatsApp API</span>
          </div>
          <div className={styles.techPanel}>
            <div className={styles.code}>phone_call -{'>'} intent_detect -{'>'} language_route -{'>'} profile_capture -{'>'} job_match -{'>'} confirmation</div>
          </div>
          <div className={styles.projectDetails}>
            <p className={styles.cardDesc}>Detailed information coming soon.</p>
          </div>
        </article>

      </div>
    </main>
  )
}