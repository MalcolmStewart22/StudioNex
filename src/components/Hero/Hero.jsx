import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>
        Tools, toys, and the occasional <em className={styles.emphasis}>rabbit hole</em>.
      </h1>
      <p className={styles.subhead}>
        A small studio shipping browser-based things by Nex. Mostly tools for tabletop games and worldbuilding, occasionally something stranger.
      </p>
    </section>
  )
}

export default Hero