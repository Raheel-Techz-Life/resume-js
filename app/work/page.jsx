import styles from './work.module.css'

export default function Work() {
  return (
    <main className={styles.main}>
      <div className={styles.kicker}>Detailed Section / Work</div>
      <h1 className={styles.heading}>
        Shipped & <span>Operated</span>
      </h1>
      <p className={styles.lead}>
        This page tracks practical output beyond competition lanes: client
        delivery, community technical support, portfolio experiments, and
        open-source motion.
      </p>

      <section className={styles.grid}>

        <article className={styles.card}>
          <div className={styles.type}>Web Development</div>
          <h2 className={styles.cardTitle}>Real Estate Agency Website</h2>
          <p className={styles.cardDesc}>
            Delivered end-to-end property discovery and inquiry flow with
            backend-integrated listing management. Final handoff completed,
            publication deferred by client-side backend direction changes.
          </p>
          <span className={`${styles.status} ${styles.locked}`}>Unpublished</span>
        </article>

        <article className={styles.card}>
          <div className={styles.type}>Hackathon Volunteering</div>
          <h2 className={styles.cardTitle}>Operations & Mentoring</h2>
          <p className={styles.cardDesc}>
            Contributed to event operations, participant guidance, and
            cross-team technical troubleshooting across multiple Karnataka
            ecosystem hackathons.
          </p>
          <span className={`${styles.status} ${styles.live}`}>Active</span>
        </article>

        <article className={styles.card}>
          <div className={styles.type}>Open Source</div>
          <h2 className={styles.cardTitle}>GitHub Build Stream</h2>
          <p className={styles.cardDesc}>
            Maintains a mixed repository stream spanning AI/ML explorations,
            web systems, embedded builds, and Firebase-backed experiments.
          </p>
          <a
            className={styles.link}
            href="https://github.com/Raheel-Techz-Life"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open github.com/Raheel-Techz-Life →
          </a>
        </article>

        <article className={styles.card}>
          <div className={styles.type}>Portfolio R&D</div>
          <h2 className={styles.cardTitle}>Design + Motion Prototypes</h2>
          <p className={styles.cardDesc}>
            Iterative portfolio and resume experiments focused on design
            systems, kinetic UI, and personal branding architecture, retained
            as private drafts.
          </p>
          <span className={`${styles.status} ${styles.locked}`}>Unreleased</span>
        </article>

      </section>

      <section className={styles.terminal}>
        <div className={styles.termLine}>$ status --focus delivery</div>
        <div className={styles.termLine}>
          <span className={styles.termOk}>[OK]</span> Client-grade builds shipped
        </div>
        <div className={styles.termLine}>
          <span className={styles.termOk}>[OK]</span> Community tech contribution ongoing
        </div>
        <div className={styles.termLine}>
          <span className={styles.termOk}>[OK]</span> Open-source repos active
        </div>
        <div className={styles.termLine}>
          [NEXT] Convert experimental drafts to public case studies
        </div>
      </section>
    </main>
  )
}