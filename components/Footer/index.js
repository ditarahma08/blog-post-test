import styles from './Footer.module.scss'

const FooterComponent = () => (
  <footer className={styles['section-footer']}>
    <p className={styles['footer-wording']}>
      Otoklix Blog Copyright 2021
    </p>
  </footer>
)

export default FooterComponent
