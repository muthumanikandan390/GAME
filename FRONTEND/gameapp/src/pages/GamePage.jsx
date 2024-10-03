import styles from './GamePage.module.css';
import NavBar from '../components/navbar/NavBar';
import PopUp from '../components/popup/PopUp';
import PrimaryBtn from '../components/primarybtn/PrimaryBtn';
import { useState, useEffect } from 'react';
import GameUi from '../components/gameui/GameUi';
import { useSelector, useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import Result from '../components/result/Result';
// import { playerArrLengthCheck } from '../store/slice/gameSlice';


function GamePage() {
  const [flag, setFlag] = useState(false);
  const [gameui, setGameUi] = useState(false);
  const [resultUi , setResultUi] = useState(false);

  const myLength = useSelector((state) => state.game.playerArrLength)
  // console.log("hello",myLength)
  const currentEndCount = useSelector((state) => state.game.endCount)
  // console.log(console.log("currentEndCount",currentEndCount))

  useEffect(() => {
      // console.log("currentEndCount",currentEndCount);
      if(currentEndCount === 12 ) {
        setResultUi((prevState)=> !prevState )
      }
  }, [currentEndCount]);



  const inputUi = useSpring({
    opacity: !flag ? 0 : 1,
    transform: !flag ? 'translateY(0)' : 'translateY(-20px)',
    config: { tension:900, friction: 160 },
    from: { opacity: 1, transform: 'translateY(-20px)' },
  })

  const gameUiSpring = useSpring({
    opacity: gameui ? 1 : 0,
    transform: gameui ? 'translateY(0)' : 'translateY(-20px)',
    config: { tension:900, friction: 100 },
  });




useEffect(function(){
  const currentValue = myLength
  if(currentValue === 2 ) {
    setGameUi(true)
  } else {
    return
  }
}, [myLength])


// useEffect(() => {
//   if (myLength === 2) {
//     setGameUi(true);
//   }
// }, [myLength]);


  return (
    <div className={styles.gamepage}>
      <NavBar />


      {gameui ? (

    resultUi ? <animated.div style={gameUiSpring}> <Result /></animated.div> : <animated.div style={gameUiSpring}>
    <GameUi />

  </animated.div>


      ) : (
        <>
          {!flag && <PrimaryBtn toggle={() => setFlag(true)} />}

          <animated.div style={inputUi}>
          {flag && <PopUp toggle={() => setFlag(false)} />}


          </animated.div>


        </>
      )}
    </div>
  );
}

export default GamePage;
