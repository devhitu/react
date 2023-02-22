import React from 'react';

function Box(props){
  const clickMe = () => {
  alert('경고창')  
  return (
      <div className='box'>
        Box{props.um}.
        {props.name}
        <button onClick={clickMe}>click!</button>
      </div>
    );
  };
  
}
export default Box;

