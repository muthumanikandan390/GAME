import styles from './GameUi.module.css';

function GameUi() {
  return (


<div className={styles.popup}>

  <div className={styles.mainContainer}>


  <div className={styles.container1}>


<div className={styles.miniContainer1}>
<h1 className={styles.player}> player 1 </h1>
<button className={styles.playerBtn}>p1 turn</button>
</div>

{/* vs */}
<div className={styles.miniContainer2}>
<h1>vs</h1>
</div>


<div className={styles.miniContainer3}>
<h1 className={styles.player}> player 1 </h1>
<button className={styles.playerBtn}>p1 turn</button>
</div>

  </div>

<div className={styles.container2}>


  </div>

  </div>

</div>



  )
}

export default GameUi
