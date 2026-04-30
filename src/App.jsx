import { Routes, Route } from 'react-router-dom'
import TopNav from './components/TopNav/TopNav'
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import Devlog from './pages/Devlog/Devlog'
import Entry from './pages/Entry/Entry'
import NotFound from './pages/NotFound'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<Project />} />
        <Route path="/devlog" element={<Devlog />} />
        <Route path="/devlog/:id" element={<Entry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App