import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './DevlogEntry.module.css'

function formatDate(iso) {
  const date = new Date(iso)
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function DevlogEntry({ entry }) {
  const [isExpanded, setIsExpanded] = useState(false)

  function toggle() {
    setIsExpanded((prev) => !prev)
  }

  return (
    <article className={styles.entry}>
      <header className={styles.header}>
        <button onClick={toggle} className={styles.titleButton}>
          <h3 className={styles.title}>{entry.title}</h3>
        </button>
        <time className={styles.date}>{formatDate(entry.date)}</time>
      </header>
      <div className={styles.project}>{entry.projectName}</div>

      {!isExpanded && <p className={styles.preview}>{entry.preview}</p>}

      {isExpanded && (
        <div className={styles.body}>
          {entry.body.map((paragraph, i) => (
            <p key={i} className={styles.paragraph}>{paragraph}</p>
          ))}
          <Link to={`/devlog/${entry.id}`} className={styles.permalink}>
            Read full →
          </Link>
        </div>
      )}
    </article>
  )
}

export default DevlogEntry