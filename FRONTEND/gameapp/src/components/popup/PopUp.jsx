
import styles from './PopUp.module.css';

function popUp({toggle}) {
  return (

<div>
<div className={styles.popup}>
<button className={styles.x} onClick={toggle}></button>
<div className={styles.inputContainer}>
<h1>enter name <span>player 1</span></h1>
<input className={styles.input} id="email" name="email" type="email" onChange={undefined} value={undefined} />
<br></br>
<button className={styles.submit} ><span>submit</span></button>
</div>

</div>

</div>

  )
}

export default popUp
