import React, { useState } from 'react'; //JSX를 React.createElement()로 변환하기 때문에, 모든 React 컴포넌트들은 반드시 React 모듈을 불러와야 함
// import logo from './logo.svg';
import './App.css';
import Box from './Box'


function App() { //React 컴포넌트는 파스칼-케이스(pascal-case) 변수명 사용
  let count = 0;

  //state 배열로 반환 [초기값, 바꿀수있게 도와주는 함수]
  const [count2, setCount2] = useState(0)
  const increase = () =>{
    //state를 사용하지 않을 경우
    //업데이트 안되는 이유 : state를 사용하면서 App()을 계속 다시 실행, 일반 변수라서 0으로 초기화
    count = count + 1;

    //state 사용
    setCount2(count2 + 1);

    console.log("state 미사용 :",count, "state 사용",count2)
    //실행창과 console값이 다른이유: 비동기적 실행, 바로실행하지 않고 increase함수가 끝나야 실행한다.
    //console 1 2 3...
    //state 0 1 2 3 ....
    //함수 끝나야 1로 찍히는데 함수 안에 있어서 console에서 0부터 찍힘
  }
  return (
    <div className="App">
        <div>{count}</div>
        <div>{count2}</div>
        <button onClick={increase}>누르d면 증가</button>
        <main>
          <Box name="희주" num="1"/>
          <Box name="소피" num="2"/>
          <Box name="머머" num="3"/>
        </main>
    </div>
  );
}

export default App; // App 컴포넌트들을 다른 모듈에서 사용할 수 있게 함
