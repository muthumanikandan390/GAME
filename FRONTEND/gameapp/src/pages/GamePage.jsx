import styles from './GamePage.module.css';
import NavBar from '../components/navbar/NavBar';
import PopUp from '../components/popup/PopUp';
import PrimaryBtn from '../components/primarybtn/PrimaryBtn';
import { useState, useEffect } from 'react';
import GameUi from '../components/gameui/GameUi';

function GamePage() {
  const [flag, setFlag] = useState(false);
  const [gameui, setGameUi] = useState(false);


  function gameRender() {
    const arr = [1];
    return arr.length === 2;
  }


  useEffect(() => {
    setGameUi(gameRender());
  }, []);

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
