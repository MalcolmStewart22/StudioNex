import { useParams } from 'react-router-dom'
import { getEntryById } from '../../data/devlog'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import NotFound from '../NotFound'
import styles from './Entry.module.css'

function formatDate(iso) {
  const date = new Date(iso)
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function Entry() {
  const { id } = useParams()
  const entry = getEntryById(id)

  if (!entry) return <NotFound />

  return (
    <article>
      <Breadcrumb to="/devlog" label="Devlog" />

      <header className={styles.header}>
        <h1 className={styles.title}>{entry.title}</h1>
        <div className={styles.meta}>
          <time className={styles.date}>{formatDate(entry.date)}</time>
          <span className={styles.separator}>·</span>
          <span className={styles.project}>{entry.projectName}</span>
        </div>
      </header>

      <div className={styles.body}>
        {entry.body.map((paragraph, i) => (
          <p key={i} className={styles.paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

export default Entry