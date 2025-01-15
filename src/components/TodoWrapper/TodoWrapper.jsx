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
        setTodos([...todos, 
            {
                id: uuidv4(),
                task: todo.workout,
                sets: Array(todo.chosenSet).fill(false),
                completed: false, 
                isEditing:false,
            },
            ...prev,
        ]);
    };

    const toggleComplete = (id) => {
        setTodos((todos) => todos.map((todo) => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo));
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    const editTodo = (id) => {
        setTodos(
            (prev) =>
                prev.map((todo) =>
            todo.id === id ? {...todo, isEditing: !todo.isEditing } : todo)
        );
    };

    const editTask = (updatedTask, id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? {...todo, task: updatedTask, isEditing: !todo.isEditing }: todo)
        );
    };


    const completeSet = (id, setIndex) => {
        setTodos((prevTodos) => {
            prevTodos.map((todo) => {
                if (todo.id !== id) return todo;

                const updatedSets = [...todo.sets];
                updatedSets[setIndex] = !updatedSets[setIndex];

                const isCompleted = updatedSets.every((val) => val === true);

                return {
                    ...todo,
                    sets: updatedSets,
                    completed: isCompleted,
                }
            })
        })
        
    };

    return (
        <div className='TodoWrapper'>
            <h3 className='target'>Add your workout.</h3> 
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo) => (
                todo.isEditing ? (
                    <EditTodo key={todo.id} editTodo={editTask} task={todo} />
                ) :  <Todo 
                task={todo} 
                key={todo.id}
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                completeSet={completeSet}
                />
            ))}
        </div>
    );
};

export default TodoWrapper;