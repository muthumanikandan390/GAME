import { NavLink } from 'react-router-dom';
import styles from './Result.module.css';

function Result() {


  function handleSubmit(e){

  }


  return (


    <div className={styles.popup}>

    <div className={styles.container} >
      <div className={styles.container1}>
      <h1> winner 🥇 : ramesh</h1>
      <h1> runner 🥈 : suresh</h1>
      </div>

      <div className={styles.container2}>

      <form onSubmit={handleSubmit}>
  <button type='submit' className={styles.resetBtn}>
    reset
  </button>
</form>
      <NavLink to="/resultPage">
      <button className={styles.navBtn}>
        game result
      </button>
      </NavLink>

      </div>

    </div>

    </div>

      )
    }

export default Result
