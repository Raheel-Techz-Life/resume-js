import styles from './contact.module.css'

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.kicker}>Detailed Section / Contact</div>
      <h1 className={styles.heading}>
        Open <span>Channel</span>
      </h1>
      <p className={styles.lead}>
        Available for internships, collaboration, research conversations, and
        high-impact builds. If your problem space matters at scale, reach out.
      </p>

      <div className={styles.links}>
        <a className={styles.link} href="mailto:raheelhosmani05@gmail.com">
          Email · raheelhosmani05@gmail.com
        </a>
        <a className={styles.link} href="https://www.linkedin.com/in/raheel-hosmani-78ab92315/" target="_blank" rel="noopener noreferrer">
          LinkedIn · Connect
        </a>
        <a className={styles.link} href="https://github.com/Raheel-Techz-Life" target="_blank" rel="noopener noreferrer">
          GitHub · Connect
        </a>
      </div>

      <div className={styles.panel}>
        <div className={styles.line}>$ availability --query current</div>
        <div className={styles.line}>status: OPEN</div>
        <div className={styles.line}>{`preferred_modes: ["Internship", "Collaboration", "Research", "GovTech / AI Systems"]`}</div>
        <div className={styles.line}>location: Hubli, Karnataka, India</div>
        <div className={styles.line}>response_window: 24-72h</div>
      </div>
    </main>
  )
}