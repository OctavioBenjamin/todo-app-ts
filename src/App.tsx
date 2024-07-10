import { useState } from "react";
import { Todos } from "./components/Todos";
import { type Todo as TodoType } from "./types";
import { TodoId } from "./types";

const mockTodos = [
  {
    id: "1",
    title: "Preparar comida",
    completed: true
  },
  {
    id: "2",
    title: "Estudiar para la universidad",
    completed: false
  },
  {
    id: "3",
    title: "Pasear al perro",
    completed: false
  }
]

const App = () => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: completed
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return ( 
    <div className="todoapp">
      <Todos 
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove} 
        todos={todos}/>
    </div>
   )
}

export default App;
