import React, {useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';


//input창, button 생성
//input에 값을 입력하면 아이템이 추가된다.
//삭제기능 해보기!!
function App() {
  //input값을 저장하는 usestate
  const [inputValue, setInputValue] = useState('')

  //값을 리스트에 저장하는 usestate
  const [todoList, setTodoList] = useState('')
  
  //버튼을 클릭할때마다 ...기존값을 냅두고 신규값 업뎃해줘
  const addItem=()=>{
    setTodoList([...todoList, inputValue])
  }

  return (
    <main>
        {/*
           onChange => input창의 값이 변할때마다 알려줌 
           event.target.value는 input에 입력한 값이 있음
           이 값을 저장하기 위해선 setInputValue 사용(state)
           초기값 inputValue 지정(state)
          */}
        <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)}/>
        <button onClick={addItem}>추가</button>

          {/* components todoboard에 값을 전달*/}
        <TodoBoard todoList={todoList}/>
    </main>
  );
}

export default App;
