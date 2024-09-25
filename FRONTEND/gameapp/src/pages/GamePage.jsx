import styles from './GamePage.module.css';
import stone from '../assets/stone.png'
import NavBar from '../components/navbar/NavBar';
// import PopUp from '../components/popup/PopUp';
import PopUp from '../components/popup/PopUp';
import PrimaryBtn from '../components/primarybtn/PrimaryBtn';
import { useState } from 'react';
 {/* <img src={stone}  /> */}

function GamePage() {

const [flag , setFlag] = useState(Boolean)

function toggle(){
  setFlag(!flag)
}

  return (
    <div className={styles.gamepage}>

      <NavBar />

     {/* { flag === false ?  <PrimaryBtn toggle={()=>toggle()} /> :  <PopUp toggle={()=>toggle()} /> } */}
     { flag &&  <PrimaryBtn toggle={()=>toggle()} /> }
      {!flag && <PopUp toggle={()=>toggle()} />  }

    </div>
  )
}

export default GamePage
