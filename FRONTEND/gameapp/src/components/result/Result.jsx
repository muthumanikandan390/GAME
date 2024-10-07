import { NavLink } from 'react-router-dom';
import styles from './Result.module.css';
import { useSelector, useDispatch } from 'react-redux';

function Result() {


  const {player1, player2, player1Score , player2Score , winner , runner , tied} = useSelector((state) => state.game.result)
  // console.log("resultObj form result ui",resultObj)
  // const { player1, player2, player1Score, player2Score, winner, runner, tied } = useSelector(
  //   (state) => state.game.result
  // );
  // console.log("resultObj",resultObj.player1)
  console.log(tied.length)




  function handleSubmit(e){

  }


  return (


    <div className={styles.popup}>

    <div className={styles.container} >
      <div className={styles.container1}>
        { tied.length != 0 ? <h1>Tied</h1> :
        <>
        <h1> winner 🥇 : {winner}</h1>
      <h1> runner 🥈 : {runner}</h1>
      </> }

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
