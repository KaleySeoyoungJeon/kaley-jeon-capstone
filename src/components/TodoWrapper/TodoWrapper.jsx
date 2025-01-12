import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from '../TodoForm/TodoForm.jsx';
import Todo from '../Todo/Todo.jsx';
import EditTodo from '../EditTodo/EditTodoForm.jsx';
import './TodoWrapper.scss';
uuidv4();

function TodoWrapper() {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing:false}]) 
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id ===id ? {...todo, completed: ! todo.completed} : todo))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    const completeSet = (id, setIndex) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                const updateSets = [...todo.sets];
                updatedSets [setIndex] = true;

                const isAllSetsCompleted = updatedSets.every((set) => set);

                return {
                    ...todo,
                    sets: updateSets,
                    completed: isAllSetsCompleted,
                };
            }
            return todo;
        }))
    };

    return (
        <div className='TodoWrapper'>
            <h1>Better Today</h1> 
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo) => (
                todo.isEditing ? (
                    <EditTodo key={todo.id} editTodo={editTask} task={todo} />
                ) :  <Todo 
                task={todo} 
                key={todo.id}
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo}
                editTodo={editTodo} />
            ))}
        </div>
    )
}

export default TodoWrapper;