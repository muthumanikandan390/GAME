import React, { useRef } from 'react';
import { useState , useEffect } from 'react';
import styles from './PopUp.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { setplayerOne , setplayerTwo } from '../../store/slice/gameSlice'

function PopUp({toggle}) {
const inputRef = useRef();
const [btn , setBtn] =useState(false)
const [ userName , setUserName] = useState([])


const count = useSelector((state) => state.game.value)

const dispatch = useDispatch()



function playerOne() {
  const inputValue = inputRef.current.value;
  setUserName((prevUserNames) => {
    if (inputValue === undefined ) {
      return prevUserNames
    }
    if ( typeof inputValue === "string" && inputValue.length === 0) {
      alert("enter a name")
      return prevUserNames
    } else {
      return [...prevUserNames, inputValue];
    }

  }) ;

  inputRef.current.value = ""

}

dispatch(setplayerOne(userName[0]));



function playerTwo() {
  const inputValue = inputRef.current.value;
  setUserName((prevUserNames) => {
    if (inputValue === undefined ) {
      return prevUserNames
    }
    if ( typeof inputValue === "string" && inputValue.length === 0) {
      return prevUserNames
    } else {
      return [...prevUserNames, inputValue];
    }
  });

  inputRef.current.value = ""


}

dispatch(setplayerTwo(userName[1]));


useEffect(function(){
  if (userName.length === 1) {
    setBtn((prevBtn) => !prevBtn);
  }
},[userName.length])


useEffect(function(){
  if(userName.length > 0 ){
    console.log("useEffects - userName",userName)
  }
})



function clickHandler() {

  if (userName.length === 1) {
    setBtn((prevBtn) => !prevBtn);
  }

}

  return (

<div>
<div className={styles.popup}>
<button className={styles.x} onClick={toggle}></button>
<div className={styles.inputContainer}>
<h1>enter name <span>{`${!btn ? "player 1" : "player 2"}`}</span></h1>
<input className={styles.input} type="text" ref={inputRef}  />
<br></br>

{btn === false ? <button className={styles.submit} onClick={() => { playerOne(); clickHandler(); }} ><span>next</span></button> : <button className={styles.submit} onClick={()=>playerTwo()} ><span>submit</span></button> }


</div>

</div>

</div>

  )
}

export default PopUp
