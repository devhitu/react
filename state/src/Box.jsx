import React from 'react';

// box component
function Box(props){
  const clickMe = () => {
    alert('참쉬운 리액트')
  }
  return(
    <div className="box" >
      Box{props.num}.
      {props.name}
      <button onclick={clickMe}>click!</button>
    </div>   
  )
}

export default Box
