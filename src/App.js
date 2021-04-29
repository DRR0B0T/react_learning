import React from "react";
import TodoList from "./Todo/TodoList";


function App() {
    let todos = [
        {id:1, completed:false, title: 'Практиковаться в йоге'},
        {id:2, completed:false, title: 'Сделать пробежку'},
        {id:3, completed:false, title: 'Купить еды'},
        {id:4, completed:false, title: 'Купить дом'},
]

    function toggleTodo(id) {
        todos = todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
    }

  return (
      <div className="wrapper">
          <h1>React</h1>

        <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
  )

}
export default App;
