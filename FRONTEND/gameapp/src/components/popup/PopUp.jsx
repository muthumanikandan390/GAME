import React, { useRef } from 'react';
import { useState } from 'react';
import styles from './PopUp.module.css';

function PopUp({toggle}) {
const inputRef = useRef();
const [btn , setBtn] =useState(false)
const [ userName , setUserName] = useState([])


function playerOne() {
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

console.log(userName[0] , userName[1])


function clickHandler() {
  setBtn(!btn)
}


  return (

<div>
<div className={styles.popup}>
<button className={styles.x} onClick={toggle}></button>
<div className={styles.inputContainer}>
<h1>enter name <span>{`${!btn ? "player 1" : "player 2"}`}</span></h1>
<input className={styles.input} type="text" ref={inputRef}  />
<br></br>

{btn === false ? <button className={styles.submit} onClick={() => { playerOne();clickHandler(); }} ><span>next</span></button> : <button className={styles.submit} onClick={()=>playerTwo()} ><span>submit</span></button> }


</div>

</div>

</div>

  )
}

export default PopUp
