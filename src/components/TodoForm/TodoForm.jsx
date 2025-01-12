import { useState } from 'react';

function TodoForm({addTodo}) {

    const [value, setValue] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        if (value) {
        addTodo(value);
        setValue('')
        }
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" 
        className="todo-input" 
        value={value}
        placeholder="Add workout of today"
        onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" className="todo-btn">Add</button>
        </form>
    )
}

export default TodoForm;