
import { NavLink } from 'react-router-dom';
import styles from './HomePage.module.css'; // Import the CSS module

function HomePage() {
  return (
    <div className={styles.pageWrapper}>

<NavLink to="/gamepage">
      <div className={styles.buttonWrapper}>
  <div className={styles.buttonInner}>
  <p>PLAY</p>
  </div>
</div>
</NavLink>
    </div>
  );
}

export default HomePage;
