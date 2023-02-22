import React from "react";
import TodoItem from './TodoItem';

function TodoBoard(props){
    //console.log(props.todoList)
    return(
        <div>
            <h1>To do List</h1>
            {props.todoList.map((item)=><TodoItem item={item}/>)}
        </div>
    )
}

export default TodoBoard