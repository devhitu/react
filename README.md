# [리액트 개념 정리]
> #### 출처: [React Hooks에 취한다](https://www.youtube.com/playlist?list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO)  
***

## 목차
[1 React Hooks](#1-React-Hooks)  
[2 ](#2-)
[3 ](#3-)  
[4 ](#4-)  
[5 ](#5-)  
[6 ](#6-)  
[7 ](#7-)  
[8 ](#8-)  
[9 ](#9-)  
[10 추가](#10-추가)  
* * *
## 1 React Hooks에 취한다
### 🟥 [1-1. useState 15분만에 마스터하기](https://youtu.be/G3qglTF-fFI?list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO)  

#### Hooks란? 
- 함수형 컴포넌트를 class형 컴포넌트의 기능을 사용할 수 있도록 해주는 기능
- 함수형 컴포넌트는 리렌더링 할때 무조건 새롭게 선언, 초기화, 메모리 할당을 함(stateless)
- class형 컴포넌트는 state, life cycle로 상태관리가 용이함
- 공식문서에서는 함수형 컴포넌트를 권장하는 추세
#### Hooks 규칙
1. 웬만하면 최상위에서만 호출(반복, 조건, 중첩문에서 호출할순없음)  
  단, 반복문안에 useState는 가능.(순서가 확실할 경우)
2. Hooks를 만들땐 앞에 'use'를 붙이기
3. React는 Hooks 호출되는 순서에 의존함
4.  Hooks안에 Hooks 선언 금지
***
#### useState
- = 동적상태관리
```js
function Forem(){
    const[name, setName] =  useState('Maby');
          변수, 함수                  초기값
}
```


### 🟧 [1-2. useEffect 깔끔하게 마스터하기](https://youtu.be/kyodvzc5GHU?list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO)
#### useEffect
- = sideEffect를 수행
- (생명주기함수: mount/update/unmount)
-  class에서 componetDidMount/componetDidUpdate/componetWillUnmount
```js
useEffect(function persistForm(){
    localStorage.setItem('formData', name);
});


1. }) 일 경우, 공란인 경우 => 렌더링될때마다 실행
1. }[]) 일 경우, = 의존성배열이 없는 경우 => 초기에만 렌더링
1. }[aa]) 일 경우, = 의존성배열이 있는 경우 => 배열이 실행될때만 렌더링
```

```js
useEffect(()=>{
    ...
    return()=>{

    }
}[])

✔ 여기서, return부분은 컴포넌트가 언마운트될 때 호출
- clean up
- componetWillUnmount
```
### 🟨 [1-3. useRef 완벽 정리 1# 변수 관리](https://youtu.be/VxqZrL4FLz8?list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO)
#### useRef
1. 저장공간으로 사용
    state의 경우, 렌더링시 내부변수들을 모두 초기화 시킴  
    ref의 경우 변수값을 유지하되, 렌더를 발생시키지 않음(변화는 감지함)
2. DOM에 접근
    (예) 아이디 작성 input에 사용자가 직접 focus하지 않아도 렌더시 focus()되어있게 하는 예제

```js
```
### 🟩 [1-4. useRef 완벽 정리 2# DOM 요소 접근](https://youtu.be/EMK8oUUwP5Q?list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO)
### 🟦 [1-5. useContext + Context API ](https://youtu.be/LwvXVEHS638?list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO)
### 🟪 [1-6. useMemo 제대로 사용하기](https://youtu.be/e-CnI8Q5RY4?list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO)
#### useMemo
- 컴포넌트 최적화🧹
- 함수의 리턴값을 메모리에 기억하여 값을 재사용한다.
- 무분별한 사용은 성능을 악화시킴
```js
const value = useMemo(()=>{
    return calculate() //useMemo가 리턴해주는 값
}[item])
```
### 🟫 [1-7. useCallback 짱 쉬운 강의](https://youtu.be/XfUF9qLa3mU?list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO)
#### useCallback
- 컴포넌트 최적화🧹
- 컴포넌트가 렌더링 될때 특정함수를 재사용해서 재렌더링 방지
- 자식컴포넌ㅌ츠에 props로 매번 함수전달할수 없기때문에 useCallback을 꼭 사용해야함
```js
const onSave = useCallback(()=>{
    console.log(name)
}[])

[]이 공란인 배열이면 렌더링될때마다 초기값을 0으로 받아오기때문에 
꼭! 재생성할 기준을 할당해야함
```
### ⬛ [1-8. useReducer 확실히 정리해드려요](https://youtu.be/tdORpiegLg0?list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO)
### ⬜ [1-9. React.memo로 컴포넌트 최적화하기 (ft. useMemo, useCallback)](https://youtu.be/oqUgcxwrnSY?list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO)
### 🔳 [1-10. Custom Hooks 커스텀 훅](https://youtu.be/S6POUU2-tr8?list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO)




* * *
## 2 
### 🟥 [2-1. ]()
### 🟧 [2-2. ]()
### 🟨 [2-3. ]()
### 🟩 [2-4. ]()
### 🟦 [2-5. ]()
### 🟪 [2-6. ]()
### 🟫 [2-7. ]()
### ⬛ [2-8. ]()
### ⬜ [2-9. ]()
### 🔳 [2-10.]()
### 🔲 [2-11.]()


* * *
## 3
### 🟥 [3-1. ]()
### 🟧 [3-2. ]()
### 🟨 [3-3. ]()
### 🟩 [3-4. ]()
### 🟦 [3-5. ]()
### 🟪 [3-6. ]()
### 🟫 [3-7. ]()
### ⬛ [3-8. ]()
### ⬜ [3-9. ]()
### 🔳 [3-10.]()
### 🔲 [3-11.]()
