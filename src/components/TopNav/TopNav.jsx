import { Link } from 'react-router-dom'
import styles from './TopNav.module.css'

function TopNav() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.wordmark}>
        <span>Studio Nex</span>
        <span className={styles.mark}>✦</span>
      </Link>
      <div className={styles.links}>
        <Link to="/devlog" className={styles.link}>Devlog</Link>
      </div>
    </nav>
  )
}

export default TopNav