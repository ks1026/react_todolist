import React from "react";
import './style.css';

function Todo ({todo, onDeleteHandler, onCompleteHandler}) {
  return (
    <div className="todo_container">
      <h2>{todo.title}</h2>
      <p>{todo.body}</p>
      <button onClick={()=>onDeleteHandler(todo.id)} className="del_btn">삭 제</button>
      {/* 자식 컴포넌트에 props(프로퍼티)로 이벤트 핸들러나 함수를 전달하여 사용 할때에는 
      바인딩 필요 매개변수를 받아 사용 가능 */}
      <button onClick={()=>onCompleteHandler(todo.id)} className="compl_btn">{todo.isDone ? "취 소" : "완 료"}</button>
    </div>
    )
  }
  export default Todo