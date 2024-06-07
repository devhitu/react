import './App.css';
// useState 오류 https://velog.io/@puputia/%EB%A6%AC%EC%95%A1%ED%8A%B8-is-denied-but-never-used-%EC%98%A4%EB%A5%98

import React, {useEffect, useState} from 'react'; // eslint-disable-line no-unused-vars


function App() {
  const [count, setCount] = useState(1);
  const handleCountUpdate = () =>{
    setCount(count + 1)
  }
  useEffect{()=>{
    //....
    console.log('렌더링')
  }}
  return (
    <div>
      <button onClick={handleCountUpdate}>Upload</button>
      <span>count:{count}</span>
    </div>
  );
}

export default App;
