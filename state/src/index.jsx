import React from 'react';
import ReactDOM from 'react-dom/client'; //클라이언트에서 앱을 초기화하는 데 사용 되는 클라이언트별 메서드를 제공
import './index.css'; //전체앱에 실행되는 전역스타일
import App from './App';
import reportWebVitals from './reportWebVitals'; //앱의 퍼포먼스시간들을 분서갛여 객체형태로 보여줌

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //Component 들을 ‘root’라는 id를 가진 element에 띄움
  //StrictMode 애플리케이션 내의 잠재적인 문제를 알아냄 UI를 렌더링x(개발모드에서만 활성화), 자손들에 대한 부가적인 검사와 경고를 활성화
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
