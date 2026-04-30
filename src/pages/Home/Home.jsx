import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import SectionDivider from '../../components/SectionDivider/SectionDivider'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'
import { getRecentEntries } from '../../data/devlog'
import styles from './Home.module.css'

function Home() {
  const recentEntries = getRecentEntries(3)

  return (
    <>
      <Hero />
      <SectionDivider label="The Workshop" />
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>

      {recentEntries.length > 0 && (
        <>
          <div className={styles.recentHeader}>
            <SectionDivider label="Recent Notes" />
            <Link to="/devlog" className={styles.allLink}>
              All notes →
            </Link>
          </div>
          <ul className={styles.recentList}>
            {recentEntries.map((entry) => (
              <li key={entry.id} className={styles.recentItem}>
                <span className={styles.recentDate}>
                  {new Date(entry.date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
                <Link to={`/devlog?project=${entry.projectSlug}`} className={styles.recentTitle}>
                  {entry.title}
                </Link>
                <span className={styles.recentProject}>{entry.projectName}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default Home