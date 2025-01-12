import { useState } from "react"


function EditTodo({ editTodo, task}) {

    const [value, setValue] = useState(task.task);

    const handleSubmit = event => {
        event.preventDefault();
        
        if (value.trim() === "") {
            return; 
        }
        editTodo(value, task.id); 
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="todo-input"
                value={value} 
                placeholder="Update workout" 
                onChange={(event) => setValue(event.target.value)} 
                disabled={task.completed && task.sets.every((set) => set)} />
            <button 
                type='submit' 
                className="todo-btn"
                disabled={task.completed && task.sets.every((set) => set)}
            >
                Update
            </button>
        </form>
    )
}

export default EditTodo;