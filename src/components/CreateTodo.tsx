import { useState } from "react"
import { TodoTitle } from "../types"

interface Props {
    saveTodo: ({title}: TodoTitle ) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo } ) => {
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (event: React.KeyboardEvent<HTMLFormElement>): void => {
        event.preventDefault()
        saveTodo({title: inputValue})
        setInputValue("")
    }

    return (
        <form onSubmit={handleSubmit}>

            <input 
                type="text" 
                className="new-todo"
                onChange={(e)=> { setInputValue(e.target.value) }} 
                placeholder="¿Que quieres haer?"
                autoFocus/>
        </form>
    )
}