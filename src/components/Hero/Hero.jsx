import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>
        Welcome to my workshop. <em className={styles.emphasis}>Some</em> of these work.
      </h1>
      <p className={styles.subhead}>
        Just a guy making browser-based tools for tabletop games, worldbuilding, and whatever else I've wandered into recently.
      </p>
    </section>
  )
}

export default Hero