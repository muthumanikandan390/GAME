import styles from './GameUi.module.css';
import paper from '../../assets/paper.png';
import stone from '../../assets/stone.png';
import scissor from '../../assets/scissor.png';
import allSign from '../../assets/all.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setplayerOne , setplayerTwo, endGameLogic , scoreLogic} from '../../store/slice/gameSlice';


function GameUi() {

const [p1 , p2] = useSelector((state) => state.game.playerArr)

const currentEndCount = useSelector((state) => state.game.endCount)
// console.log(console.log("currentEndCount",currentEndCount))

// useEffect(() => {
//   if (currentEndCount === 8) {
//     // console.log("end");
//   }
// }, [currentEndCount]);


const dispatch = useDispatch();



const [imgP1, setImgP1] = useState(allSign)
const [imgP2 , setImgP2] = useState(allSign)
const [result , setResult] = useState('')
const [sign , setSign] = useState('select')
const [signP2 , setSignP2] = useState('select')
const [disablerP1, setDisablerP1] = useState(false);
const [disablerP2, setDisablerP2] = useState(false);
const [winner , setWinner] = useState('')
const [ countP1 , setCountP1] = useState(0)
const [ countP2 , setCountP2] = useState(0)
const [count , setCount] = useState(0)
const [round , setRound] = useState(0)
const [enabler , setEnabler] = useState('')
const [togglerP1 , setTogglerP1] = useState(false)
const [togglerP2 , setTogglerP2] = useState(false)



function handleRound(){
  setRound((prev)=> prev + 1 )
}


function handleTogglerP1(){
  setTogglerP1(true)
  setTogglerP2(false)

}
function handleTogglerP2(){
  setTogglerP2(true)
  setTogglerP1(false)
}

function handleCount(){
  setCount((prev)=> prev + 1)
}



function handleDisableP1() {
  setDisablerP1(true);
  // setDisablerP2(false);
}

function handleDisableP2() {
  setDisablerP2(true);
  // setDisablerP1(false);
}


function handleEnable(){
  setDisablerP1(false);
  setDisablerP2(false);
  setImgP1(allSign)
  setImgP2(allSign)
}




const imgArr = [stone, paper, scissor]
// console.log("imgArr",imgArr[0])
// console.log(typeof(paper))

function randomGen(){
  const inputValue = Math.floor(Math.random() * (3))
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

  // if ((imgP1 === allSign))
  //   setSign('select')

  if (imgP2 === stone) {
    setSignP2('stone')
  }
  if (imgP2 === paper) {
    setSignP2('paper')
  }
  if (imgP2 === scissor) {
    setSignP2('scissor')
  }
  // if ((imgP2 === allSign))
  //   setSign('select')

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

// useEffect(function(){

//   if (imgP1 === imgP2){
//     setWinner('tie')
//     console.log('tie')
//     return
//   }

//   if (imgP1 === stone && imgP2 === scissor || imgP1 === scissor && imgP2 === paper || imgP1 === 'paper' && imgP2 === stone) {
//     setWinner('P1')
//     console.log('P1')
//     return
//   }

//   if (imgP2 === stone && imgP1 === scissor || imgP2 === scissor && imgP1 === paper || imgP2 === 'paper' && imgP1 === stone) {
//     setWinner('P2')
//     console.log('P2')
//     return
//   }
//   console.log('P2')

// },[imgP1 , imgP2])

useEffect(() => {
  // Check for a tie
  if (imgP1 === imgP2) {
    setWinner('tie');
    console.log('tie');
    return;
  }

  if (
    (imgP1 === stone && imgP2 === scissor) ||
    (imgP1 === scissor && imgP2 === paper) ||
    (imgP1 === paper && imgP2 === stone)
  ) {
    setWinner('P1');
    console.log('P1');
    return;
  }
  if (
    (imgP2 === stone && imgP1 === scissor) ||
    (imgP2 === scissor && imgP1 === paper) ||
    (imgP2 === paper && imgP1 === stone)
  ) {
    setWinner('P2');
    // setImgP2(allSign)
    console.log('P2');
    return;
  }
  // setImgP1(allSign)
  // setImgP2(allSign)
  console.log('No winner determined');
}, [imgP1, imgP2]);


useEffect(function(){
  if (winner === 'P1') {
    setCountP1((prev)=>prev + 10 )
  }
  if (winner === 'tie') {
    setCountP1((prev)=>prev + 0 )
  }
  if (winner === 'P2') {
    setCountP2((prev)=>prev + 10 )
  }

},[winner])


//paying the stores score p1 p2 , winner name logic

  useEffect(() => {
      if(currentEndCount === 12 ) {
        const bothscore = {
          player1Name:p1,
          player2Name:p2,
          player1score:{countP1},
          player2score:{countP2},
          winner: countP1 > countP2 ? p1 : p2,
          runner: countP1 < countP2 ? p1 : p2,
          tie : countP1 === countP2 ? 'tie' : '',
        }
        dispatch(scoreLogic(bothscore))
      }
  }, [currentEndCount , countP1 , countP2 , dispatch , p1 , p2]);








// useEffect(function(){

//   if (count === 3 ){
//     setImgP1(allSign)
//     setImgP2(allSign)
//     setCount(0)
//     console.log("count",count)
//   }

// },[count])



  return (
<div className={styles.popup}>

  <div className={styles.mainContainer}>


  <div className={styles.container1}>


<div className={styles.miniContainer1} >
<h1 className={styles.player}> {p1}<span>{`${togglerP2 === true ? "'s turn" : ""}`}</span> </h1>
<button className={styles.playerBtn} onClick={()=>{handlerRandomP1(), handleDisableP1() , handleCount(), handleRound() , handleTogglerP1()}} disabled={disablerP1}>
  <img className={styles.gameImg} src={imgP1}/>
  <p>{sign}</p>
  </button>
</div>

{/* vs */}
<div className={styles.miniContainer2}>
<h4>Round : {round}</h4>
<h2>vs</h2>
<button className={styles.resetBtn} onClick={handleEnable}>restart</button>

</div>


<div className={styles.miniContainer3}>
<h1 className={styles.player}>{p2}<span>{`${togglerP1 === true ? "'s turn" : ""}`}</span> </h1>
<button className={styles.playerBtn} onClick={()=>{handlerRandomP2(), handleDisableP2() ,handleCount() , handleTogglerP2()}} disabled={disablerP2}>
  <img className={styles.gameImg} src={imgP2}/>
  <p>{signP2}</p>
  </button>


</div>

  </div>

<div className={styles.container2}>
<div className={styles.scoreContainer}>
<h2>player1 score : {countP1}</h2>
<h2>player2 score : {countP2}</h2>
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
