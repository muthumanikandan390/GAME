import { NavLink } from 'react-router-dom';
import styles from './ResultPage.module.css'; // Import the CSS module
function ResultPage()  {
  return (
    <div className={styles.pageWrapper}>

<NavLink to="/result">
      <div className={styles.buttonWrapper}>
  <div className={styles.buttonInner}>
  <p>PLAY</p>
  </div>
</div>
</NavLink>
    </div>
  );
}

export default ResultPage
