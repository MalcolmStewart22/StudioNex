import styles from './StatusPill.module.css'

function StatusPill({ status }) {
  const className = `${styles.pill} ${styles[status.toLowerCase().replace(' ', '-')]}`
  return <span className={className}>{status}</span>
}

export default StatusPill