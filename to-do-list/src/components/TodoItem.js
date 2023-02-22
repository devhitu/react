import React from "react";

function TodoItem(props){
    return(
        <div className="todo-item">
            {props.item}
            {/* 삭제버튼 */}
        </div>
    )
}

export default TodoItem