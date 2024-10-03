import styles from './GameUi.module.css';
import paper from '../../assets/paper.png';
import stone from '../../assets/stone.png';
import scissor from '../../assets/scissor.png';
import allSign from '../../assets/all.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setplayerOne , setplayerTwo, endGameLogic} from '../../store/slice/gameSlice'


function GameUi() {

const [p1 , p2] = useSelector((state) => state.game.playerArr)

const currentEndCount = useSelector((state) => state.game.endCount)
console.log(console.log("currentEndCount",currentEndCount))

useEffect(() => {
  if (currentEndCount === 8) {
    console.log("end");
  }
}, [currentEndCount]);


const dispatch = useDispatch();



const [imgP1, setImgP1] = useState(allSign)
const [imgP2 , setImgP2] = useState(allSign)
const [result , setResult] = useState('')
const [sign , setSign] = useState('select')
const [signP2 , setSignP2] = useState('select')
const [disablerP1, setDisablerP1] = useState(false);
const [disablerP2, setDisablerP2] = useState(false);



function handleDisableP1() {
  setDisablerP1(true);
  setDisablerP2(false);
}

function handleDisableP2() {
  setDisablerP2(true);
  setDisablerP1(false);
}



const imgArr = [stone, paper, scissor]
console.log("imgArr",imgArr[0])
console.log(typeof(paper))

function randomGen(){
  const inputValue = Math.floor(Math.random() * (3 - 0))
  return inputValue
}

useEffect(function(){

  if (imgP1 === stone) {
      setSign('stone')
  }
  if (imgP1 === paper) {
    setSign('paper')
  }
  if (imgP1 === scissor) {
    setSign('scissor')
  }

  if (imgP2 === stone) {
    setSignP2('stone')
  }
  if (imgP2 === paper) {
    setSignP2('paper')
  }
  if (imgP2 === scissor) {
    setSignP2('scissor')
  }

  },[imgP1 , imgP2])


function handlerRandomP1(){
  const inputValue = randomGen()
  setImgP1(imgArr[inputValue])
  dispatch(endGameLogic())
}


function handlerRandomP2(){
  const inputValue = randomGen()
  setImgP2(imgArr[inputValue])
  dispatch(endGameLogic())
}



  return (
<div className={styles.popup}>

  <div className={styles.mainContainer}>


  <div className={styles.container1}>


<div className={styles.miniContainer1} >
<h1 className={styles.player}> {p1}<span>{`${disablerP2 === true ? "' turn" : ""}`}</span> </h1>
<button className={styles.playerBtn} onClick={()=>{handlerRandomP1(), handleDisableP1()}} disabled={disablerP1}>
  <img className={styles.gameImg} src={imgP1}/>
  <p>{sign}</p>
  </button>
</div>

{/* vs */}
<div className={styles.miniContainer2}>
<h1>vs</h1>
</div>


<div className={styles.miniContainer3}>
<h1 className={styles.player}>{p2}<span>{`${disablerP1 === true ? "' turn" : ""}`}</span> </h1>
<button className={styles.playerBtn} onClick={()=>{handlerRandomP2(), handleDisableP2()}} disabled={disablerP2}>
  <img className={styles.gameImg} src={imgP2}/>
  <p>{signP2}</p>
  </button>


</div>

  </div>

<div className={styles.container2}>
<div className={styles.scoreContainer}>
<h2>player1 score : </h2>
<h2>player2 score : </h2>
</div>
<div className={styles.resultContainer}>
<h1>result : plyer1 lead</h1>
</div>

  </div>

  </div>

</div>



  )
}

export default GameUi
