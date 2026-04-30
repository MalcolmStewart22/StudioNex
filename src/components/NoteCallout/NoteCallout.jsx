import styles from './NoteCallout.module.css'

function NoteCallout({ children }) {
  return (
    <aside className={styles.callout}>
      <div className={styles.label}>Note</div>
      <p className={styles.body}>{children}</p>
    </aside>
  )
}

export default NoteCallout