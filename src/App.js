import React, { useState, useEffect } from "react";
import "./App.css";
import useCounter from "./components/CustomHooks";

// to get data from ls

// const getLocalItem = () => {
//   let list = localStorage.getItem("lists");

//   if (list) {
//     return JSON.parse(localStorage.getItem("lists"));
//   } else {
//     return [];
//   }
// };

function App() {
  const { count, increament, decreament,resetCount } = useCounter();

  // const [input, setInput] = useState("");
  // const [todo, setTodo] = useState(getLocalItem());
  // const [toggle, setToggle] = useState(true);
  // const [editItem, setEditItem] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!input) {
  //     window.alert("!plz Fill the Data");
  //   } else if (input && !toggle) {
  //     setInput(
  //       todo.map((elm) => {
  //         if (elm.id === editItem) {
  //           return { ...elm, name: input };
  //         }
  //         return elm;
  //       })
  //     );
  //   } else {
  //     const allInputData = {
  //       id: new Date().getTime().toLocaleString(),
  //       name: input,
  //     };
  //     setTodo([...todo, allInputData]);
  //     setInput("");
  //   }
  // };

  // const deleteTodo = (i) => {
  //   const deleteTodo = todo.filter((elm) => {
  //     return elm.id !== i;
  //   });
  //   setTodo(deleteTodo);
  // };

  // const editTodo = (id) => {
  //   let findTodo = todo.find((elm) => {
  //     return elm.id === id;
  //   });
  //   console.log(findTodo);
  //   setToggle(false);
  //   setInput(findTodo.name);
  //   setEditItem(id);
  // };

  // const RemoveAll = () => {
  //   setTodo([]);
  // };

  // useEffect(() => {
  //   localStorage.setItem("lists", JSON.stringify(todo));
  // }, [todo]);

  return (
    <div className="App">
      <h1>Counter Application: {count}</h1>
      <br />
      <button onClick={increament}>Increament</button>
      <br />
      <button onClick={decreament}>Decreament</button>
      <button onClick={resetCount}>ResetCount</button>
      {/* <h1>Todo Application</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Your Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">{toggle ? "Add Todo" : "Edit Todo"}</button>
        <button className="removeAll" onClick={RemoveAll}>
          Remove All todo
        </button>
      </form>
      <div className="div_ul">
        <ul>
          {todo.map((elm) => (
            <li className="li" key={elm.id}>
              <span>{elm.name}</span>
              <button className="editBtn" onClick={() => editTodo(elm.id)}>
                Edit
              </button>
              <button className="deleteBtn" onClick={() => deleteTodo(elm.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div> */}
      <br />
      <h1>Hello Custom Hooks</h1>
    </div>
  );
}

export default App;
