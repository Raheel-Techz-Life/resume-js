import styles from './achievements.module.css'

export default function Achievements() {
  return (
    <main className={styles.main}>
      <div className={styles.kicker}>Detailed Section / Recognition</div>
      <h1 className={styles.heading}>
        Recognition <span>Ledger</span>
      </h1>
      <p className={styles.lead}>
        A focused archive of outcomes from public competitions and technical
        initiatives. More than medals: these validate execution under pressure
        and real-world framing.
      </p>

      <section className={styles.grid}>

        <article className={styles.card}>
          <span className={`${styles.badge} ${styles.badgeGold}`}>3rd Place</span>
          <h2 className={styles.cardTitle}>ONEST Hackathon 2025</h2>
          <p className={styles.cardDesc}>
            Built Zero-Barrier Jobs, a voice-first employability platform for
            users with literacy and accessibility constraints, aligned to ONEST
            ecosystem capabilities.
          </p>
          <div className={styles.year}>25</div>
        </article>

        <article className={styles.card}>
          <span className={styles.badge}>National Finalist</span>
          <h2 className={styles.cardTitle}>Smart India Hackathon 2025</h2>
          <p className={styles.cardDesc}>
            Finalist on two tracks: air-quality intelligence for Delhi-NCR and
            offline-first healthcare workflow tooling for ASHA workers.
          </p>
          <div className={styles.year}>25</div>
        </article>

        <article className={styles.card}>
          <span className={styles.badge}>Active Build</span>
          <h2 className={styles.cardTitle}>UIDAI Data Hackathon 2026</h2>
          <p className={styles.cardDesc}>
            Developing SAMVIDHAN with multi-framework AI strategy for identity
            integrity, fraud signal intelligence, and governed analytics at
            national scale.
          </p>
          <div className={styles.year}>26</div>
        </article>

      </section>

      <section className={styles.matrix}>
        <h3 className={styles.matrixTitle}>Signal Matrix</h3>
        <div className={styles.table}>
          <div className={styles.cell}>Competition Exposure</div>
          <div className={styles.cell}>State + National</div>
          <div className={styles.cell}>Problem Domains</div>
          <div className={styles.cell}>GovTech · HealthTech · EnvTech · Jobs</div>
          <div className={styles.cell}>Delivery Pattern</div>
          <div className={styles.cell}>Prototype-to-Production Thinking</div>
          <div className={styles.cell}>Core Edge</div>
          <div className={styles.cell}>AI + Full-stack + Systems framing</div>
        </div>
      </section>
    </main>
  )
}