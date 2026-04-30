import { useParams } from 'react-router-dom'
import { getProjectBySlug } from '../../data/projects'
import StatusPill from '../../components/StatusPill/StatusPill'
import SectionDivider from '../../components/SectionDivider/SectionDivider'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import NoteCallout from '../../components/NoteCallout/NoteCallout'
import NotFound from '../NotFound'
import styles from './Project.module.css'

function Project() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <NotFound />

  const { number, title, subtitle, status, pitch } = project
  const isDrafting = status === 'Drafting'

  return (
    <article>
      <Breadcrumb to="/" label="The Workshop" />

      <header className={styles.header}>
        <span className={styles.number}>№ {number}</span>
        <h1 className={styles.title}>{title}</h1>
        <StatusPill status={status} />
      </header>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      {isDrafting && (
        <NoteCallout>
          This project hasn't been built yet. What follows is a working design — what I'm trying to make, why, and the open questions I'm still chewing on. It will change.
        </NoteCallout>
      )}

      <SectionDivider label="The Pitch" />
      <p className={styles.body}>{pitch}</p>
      
      {project.designNote && (
        <>
          <SectionDivider label="Where It Stands" />
          <p className={styles.body}>{project.designNote}</p>
        </>
      )}

      {project.stackNotes && (
        <>
          <SectionDivider label="Stack" />
          <p className={styles.body}>{project.stackNotes}</p>
        </>
      )}

      {project.targetStack && (
        <>
          <SectionDivider label="Target Stack" />
          <p className={styles.body}>{project.targetStack}</p>
        </>
      )}

      {project.openQuestions && project.openQuestions.length > 0 && (
        <>
          <SectionDivider label="Open Questions" />
          <ul className={styles.questions}>
            {project.openQuestions.map((q, i) => (
              <li key={i} className={styles.question}>
                <span className={styles.bullet}>·</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  )
}

export default Project