import { Link } from 'react-router-dom'
import StatusPill from '../StatusPill/StatusPill'
import StackTag from '../StackTag/StackTag'
import styles from './ProjectCard.module.css'

function ProjectCard({ project }) {
  const { number, title, subtitle, description, stack, status, links } = project
  const isLive = status === 'Live'
  
  const cardClass = `${styles.card} ${isLive ? styles.live : styles.draft}`

  return (
    <article className={cardClass}>
      {isLive && <span className={styles.stripe} />}
      
      <header className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.number}>№ {number}</span>
          <span className={styles.separator}>—</span>
          <span>{title}</span>
        </h2>
        <StatusPill status={status} />
      </header>
      
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      
      <p className={styles.description}>{description}</p>
      
      {isLive && stack && stack.length > 0 && (
        <div className={styles.stack}>
          {stack.map((tech) => (
            <StackTag key={tech}>{tech}</StackTag>
          ))}
        </div>
      )}
      
      {links && links.length > 0 && (
        <div className={styles.links}>
          {links.map((link) => (
            link.external ? (
              <a 
                key={link.label}
                href={link.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link 
                key={link.label}
                to={link.href}
                className={styles.link}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>
      )}
    </article>
  )
}

export default ProjectCard