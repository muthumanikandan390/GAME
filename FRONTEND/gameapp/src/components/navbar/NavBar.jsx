import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navbar}>
      <h1> Stone Paper scissor game !</h1>
      <NavLink to="/resultPage">
      <button className={styles.navbarBtn}>Game Data  &rarr;</button>
      </NavLink>
    </div>

  )
}

export default NavBar
