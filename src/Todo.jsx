import React from "react";
import "./App.css";

export default function Todo(props) {
  

   return (
    <>
      <div className="todolist">
        <li className="list">{props.text}</li>
        <i className="fa-solid fa-trash trashbox" onClick={()=>{
          props.onSelect(props.id);
        }}></i>
      </div>
    </>
  );
}
