// import logo from './logo.svg';
import React,{useState} from "react";
import "./App.css";

import Todo from "./Todo";

function App() {

  const [listItem, setListItem]=useState("");
  const [items,setItems]=useState([]);

  const item = (event)=> {
    setListItem(event.target.value);
  };

  const deleteItems = (id) =>{
    console.log("delete");
    setItems((oldItems)=>{
      return oldItems.filter((arryElm,i)=>{
        return i !==id;
      })
    })
  }

  const listOfItem =()=>{
      setItems((oldItems)=>{
        return [...oldItems, listItem];
      });
      setListItem("");
  };
  return (
    <>
      <div className="outer_div">
        <nav>TODO-LIST</nav>
        <div className="main_div">
          <input className="input" type="text" placeholder="Add a Item" value={listItem} onChange={item} />
          <button onClick={listOfItem} className="button">+</button>
          <ol>
            {items.map((itemval,i) =>{
              return( <Todo text={itemval} key={i} id={i} onSelect={deleteItems}/>);
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
