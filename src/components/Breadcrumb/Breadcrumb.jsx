import { Link } from 'react-router-dom'
import styles from './Breadcrumb.module.css'

function Breadcrumb({ to, label }) {
  return (
    <Link to={to} className={styles.breadcrumb}>
      ← {label}
    </Link>
  )
}

export default Breadcrumb