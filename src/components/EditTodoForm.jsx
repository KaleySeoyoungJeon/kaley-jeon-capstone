import { useState } from "react"


function EditTodo({ editTodo, task}) {

    const [value, setValue] = useState(task.task);

    const handleSubmit = event => {
        event.preventDefault();
        
        if (value.trim() === "") {
            return; // to prevent empty submissions from users
        }
        editTodo(value, task.id); //to call the correct function
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input"
            value={value} placeholder="Update task" onChange={(event) => setValue(event.target.value)} />
            <button type='submit' className="todo-btn">Update</button>
        </form>
    )
}

export default EditTodo;