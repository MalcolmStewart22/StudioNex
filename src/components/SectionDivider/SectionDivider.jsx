import styles from './SectionDivider.module.css'

function SectionDivider({ label }) {
  return (
    <div className={styles.divider}>
      <span className={styles.label}>{label}</span>
      <span className={styles.line} />
    </div>
  )
}

export default SectionDivider