import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { devlogEntries, getProjectsWithEntries } from '../../data/devlog'
import DevlogEntry from '../../components/DevlogEntry/DevlogEntry'
import styles from './Devlog.module.css'

function Devlog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeProject = searchParams.get('project')
  const [query, setQuery] = useState('')

  const projectsWithEntries = useMemo(() => getProjectsWithEntries(), [])

  const filtered = useMemo(() => {
    let entries = [...devlogEntries].sort((a, b) => b.date.localeCompare(a.date))
    if (activeProject) {
      entries = entries.filter((e) => e.projectSlug === activeProject)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      entries = entries.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.preview.toLowerCase().includes(q)
      )
    }
    return entries
  }, [activeProject, query])

  function setProjectFilter(slug) {
    if (slug === null) {
      setSearchParams({})
    } else {
      setSearchParams({ project: slug })
    }
  }

  return (
    <section>
      <h1 className={styles.heading}>Devlog</h1>
      <p className={styles.subhead}>
        Build notes, novel approaches, and the occasional bug worth remembering.
      </p>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search notes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.search}
        />
      </div>

      <div className={styles.chips}>
        <button
          className={`${styles.chip} ${!activeProject ? styles.chipActiveAll : styles.chipInactive}`}
          onClick={() => setProjectFilter(null)}
        >
          All
        </button>
        {projectsWithEntries.map((p) => {
          const isActive = activeProject === p.slug
          return (
            <button
              key={p.slug}
              className={`${styles.chip} ${isActive ? styles.chipActiveProject : styles.chipInactive}`}
              onClick={() => setProjectFilter(isActive ? null : p.slug)}
            >
              {p.name}
              {isActive && <span className={styles.chipClear}> ✕</span>}
            </button>
          )
        })}
      </div>

      <div className={styles.entries}>
        {filtered.length === 0 ? (
          <p className={styles.empty}>No entries match.</p>
        ) : (
          filtered.map((entry) => <DevlogEntry key={entry.id} entry={entry} />)
        )}
      </div>
    </section>
  )
}

export default Devlog