import './App.css';
import { useState, useCallback } from 'react';


/**
 * shallowCopy = [...listName]
 * listName 1 ['가습기 세척 방법', '수원역 가는 방법','3월 주요 일정']
 * listName 2 ['욕실 청소 방법', '수원역 가는 방법','3월 주요 일정'] => react 첫번째 인자가 바뀌었으니 첫번째 인자 부분을 re-render [] === [] false => 리렌더링
 * 
 * shallowCopy = listName => 직접적으로 바꿔버림 ..
 * listName 1 ['욕실 청소 방법', '수원역 가는 방법','3월 주요 일정']
 * listName 2 ['욕실 청소 방법', '수원역 가는 방법','3월 주요 일정'] => react 바뀐게 없는데 ?? [] === [] true => 바뀐게 없으니 렌더링하지 않겠다.
 */
function App() {
  let [listName, setListName] = useState(['가습기 세척 방법', '수원역 가는 방법','3월 주요 일정'])
  let [like, setLike] = useState(0);
  const handleClick = useCallback(() => {
    // const shallowCopy = listName;
    // shallowCopy[0] = '욕실 청소 방법'

    const shallowCopy = [...listName]
    shallowCopy[0] = '욕실 청소 방법'
    setListName(shallowCopy);

    //3. 
    // let shallowCopy = [...listName]; //화살표를 새로 바꿔주세요..라는 뜻
    // shallowCopy[0] = '욕실 청소 방법'
    // listNameChange(shallowCopy) 
  }, [listName]);
  return (
    <div className="App">
      <header className="nav-black">
        <div className="inner">
          <h1>React Blog</h1>
        </div>
      </header>
      <div className="listBoard">
        <div className="inner"> 
          <button onClick={handleClick}>글 수정</button>
          <button>가나다순 정렬</button>
          <ul>
            <li className="list">
              <h4>{listName[0]}</h4> 
              {/* ()=>{setLike(like+1)} === ()=>{setLike(like+1)} false */}
              {like} <span className="like" onClick={()=>{setLike(like+1)}}>👍</span> 
            </li>
            <li className="list">
              <h4>{listName[1]}</h4> 
              {like} <span className="like" onClick={()=>{setLike(like+1)}}>👍</span> 
            </li>
            <li className="list">
              <h4>{listName[2]}</h4> 
              {like} <span className="like" onClick={()=>{setLike(like+1)}}>👍</span> 
            </li>
          </ul>
        </div>        
      </div>
      <Modal></Modal>
    </div>
  );
}

// 컴포넌트를 쓰는 상황
//1. 반복적인 html축약할때
//2. 큰 페이지들을 개발할때
//3. 자주 변경되는 UI들
//단점 1. state를 가져다 쓸때 문제생김 not defined

function Modal(){ 
  return(
    // 병렬기입을 하고싶으면... <></>
    <> 
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>    
    </>
    
  )
}

export default App;
