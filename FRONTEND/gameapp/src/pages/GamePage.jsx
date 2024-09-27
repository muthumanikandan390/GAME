import styles from './GamePage.module.css';
import NavBar from '../components/navbar/NavBar';
import PopUp from '../components/popup/PopUp';
import PrimaryBtn from '../components/primarybtn/PrimaryBtn';
import { useState, useEffect } from 'react';
import GameUi from '../components/gameui/GameUi';
import { useSelector, useDispatch } from 'react-redux';
// import { playerArrLengthCheck } from '../store/slice/gameSlice';


function GamePage() {
  const [flag, setFlag] = useState(false);
  const [gameui, setGameUi] = useState(false);
  const myLength = useSelector((state) => state.game.playerArrLength)
  console.log("hello",myLength)




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
//     setGameUi(true);  // Set GameUi directly instead of toggling
//   }
// }, [myLength]);


  return (
    <div className={styles.gamepage}>
      <NavBar />


      {gameui ? (
        <GameUi />
      ) : (
        <>
          {!flag && <PrimaryBtn toggle={() => setFlag(true)} />}
          {flag && <PopUp toggle={() => setFlag(false)} />}
        </>
      )}
    </div>
  );
}

export default GamePage;
