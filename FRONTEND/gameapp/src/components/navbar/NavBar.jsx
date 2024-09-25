import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navbar}>
      <h1> Stone Paper scissor game !</h1>
      <button className={styles.navbarBtn}>Game Data  &rarr;</button>
    </div>

  )
}

export default NavBar
