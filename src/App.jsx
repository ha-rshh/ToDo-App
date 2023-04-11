import { useState } from "react";

import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      // if todo is not empty will going to set single todo to settodos array
      setTodos([
        {
          id: `${Math.round(Math.random() * 1000)}`,
          todo,
        },
        ...todos,
      ]);
      setTodo("");
    }

    if (edit) {
      const TodoEdit = todos.find((i) => i.id === edit);
      const updatedTodos = todos.map((t) =>
        t.id === TodoEdit.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos)
      setEdit(0)
      setTodo("")
      return;
    }
  };
  const handleDelete = (id) => {
    const deleteTodo = todos.filter((t) => t.id != id);
    setTodos([...deleteTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((item) => item.id === id);
    setTodo(editTodo.todo);
    setEdit(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <form action="" className="todoform" onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit"> {edit ? "Edit" : "Go!!"}</button>
        </form>

        <ul className="allTodos">
          {todos.map((item) => (
            <li className="singleTodo" key={item.id}>
              <span className="todoText"> {item.todo} </span>
              <button onClick={() => handleEdit(item.id)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Done</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
