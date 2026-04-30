import styles from './StackTag.module.css'

function StackTag({ children }) {
  return <span className={styles.tag}>{children}</span>
}

export default StackTag