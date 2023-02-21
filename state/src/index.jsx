import React from 'react';
import ReactDOM from 'react-dom/client'; //Ŭ���̾�Ʈ���� ���� �ʱ�ȭ�ϴ� �� ��� �Ǵ� Ŭ���̾�Ʈ�� �޼��带 ����
import './index.css'; //��ü�ۿ� ����Ǵ� ������Ÿ��
import App from './App';
import reportWebVitals from './reportWebVitals'; //���� �����ս��ð����� �м����� ��ü���·� ������

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //Component ���� ��root����� id�� ���� element�� ���
  //StrictMode ���ø����̼� ���� �������� ������ �˾Ƴ� UI�� ������x(���߸�忡���� Ȱ��ȭ), �ڼյ鿡 ���� �ΰ����� �˻�� ��� Ȱ��ȭ
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
