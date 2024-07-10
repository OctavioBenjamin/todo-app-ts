import { useState } from "react";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import { FilterValue, TodoTitle, type Todo as TodoType } from "./types";
import { TodoId } from "./types";
import { TODO_FILTERS } from "./components/consts";

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length

  const completedCount = todos.length - activeCount

  const handleRemoveAllCompleted = ():void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({title}: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return ( 
    <>
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos 
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove} 
        todos={todos}/>
      <Footer
        activeCount={activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveAllCompleted}
        completedCount={completedCount}
        />

    </div>
    <p>Creditos: <a href="https://www.youtube.com/@midulive">MiduDev</a></p>
    
    </>
   )
}

export default App;
