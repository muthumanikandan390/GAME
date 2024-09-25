/* eslint-disable react/prop-types */
import styles from './PrimaryBtn.module.css';
function PrimaryBtn({toggle}) {
  return (
    <div className={styles.primarybtn} onClick={toggle}>
    <div className={styles.buttonWrapper}>
  <div className={styles.buttonInner}>
  <p>start</p>
  </div>
</div>
    </div>
  )
}

export default PrimaryBtn
