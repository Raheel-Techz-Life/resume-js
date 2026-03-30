import styles from './experience.module.css'

export default function Experience() {
  return (
    <main className={styles.main}>
      <div className={styles.kicker}>Detailed Section / Experience</div>
      <h1 className={styles.heading}>
        Operating <span>Timeline</span>
      </h1>
      <p className={styles.lead}>
        A fuller view of leadership, engineering, coordination, and delivery
        contexts. Focus is on ownership, execution velocity, and systems
        thinking under team constraints.
      </p>

      <section className={styles.timeline}>

        <article className={styles.item}>
          <div className={styles.date}>2026 — Present</div>
          <div className={styles.role}>Secretary, IEEE Computer Society</div>
          <div className={styles.org}>IEEE CS Bangalore Chapter · KLE Institute of Technology</div>
          <p className={styles.desc}>
            Leading technical planning for Student Internship & Mentorship
            Program 2026. Balancing architectural guidance with team throughput
            and review discipline.
          </p>
          <ul className={styles.bullets}>
            <li>Directed architecture calls across web and ML substreams</li>
            <li>Maintained quality gates for pull requests and release readiness</li>
            <li>Owned mentor-facing communication and delivery commitments</li>
          </ul>
        </article>

        <article className={styles.item}>
          <div className={styles.date}>2024 — 2025</div>
          <div className={styles.role}>Webmaster, IEEE Computer Society</div>
          <div className={styles.org}>IEEE CS Bangalore Chapter · KLE Institute of Technology</div>
          <p className={styles.desc}>
            Managed chapter digital infrastructure and reliability of web
            communication channels while supporting technical events and
            operational needs.
          </p>
          <ul className={styles.bullets}>
            <li>Maintained public-facing web stack and updates cycle</li>
            <li>Supported event-tech coordination and publishing workflows</li>
          </ul>
        </article>

        <article className={styles.item}>
          <div className={styles.date}>2024</div>
          <div className={styles.role}>Intern</div>
          <div className={styles.org}>Scaler School of Technology</div>
          <p className={styles.desc}>
            Worked through structured engineering modules covering software
            foundations, coding rigor, and professional collaboration habits.
          </p>
          <ul className={styles.bullets}>
            <li>Practiced implementation under constrained timelines</li>
            <li>Strengthened CS fundamentals and problem-solving discipline</li>
          </ul>
        </article>

        <article className={styles.item}>
          <div className={styles.date}>Ongoing</div>
          <div className={styles.role}>CS Engineer (AI/ML Focus)</div>
          <div className={styles.org}>KLE Institute of Technology · Hubli, Karnataka</div>
          <p className={styles.desc}>
            Pursuing applied AI/ML while building practical systems through
            hackathons, open-source work, and high-ownership student
            leadership roles.
          </p>
        </article>

      </section>

      <section className={styles.statline}>
        <div className={styles.stat}>
          <b>2+</b>
          <span>Years Active</span>
        </div>
        <div className={styles.stat}>
          <b>3×</b>
          <span>Hackathon Finalist</span>
        </div>
        <div className={styles.stat}>
          <b>4</b>
          <span>Roles Held</span>
        </div>
        <div className={styles.stat}>
          <b>1.4B+</b>
          <span>Records Touched</span>
        </div>
      </section>
    </main>
  )
}