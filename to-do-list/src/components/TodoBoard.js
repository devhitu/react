import React from "react";
import TodoItem from './TodoItem';

function TodoBoard({ todoList }){
    return(
        <div>
            <h1>To do List</h1>
            {
                todoList.length === 0
                    ? <p>데이터가 없습니다.</p>
                    : todoList.map((item)=><TodoItem item={item}/>)}
        </div>
    )
}

export default TodoBoard