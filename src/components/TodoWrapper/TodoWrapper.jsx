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
        const setCount = todo.chosenSet || 1;
        setTodos((prev) => [
            {
                id: uuidv4(),
                task: todo.workout,
                sets: Array(setCount).fill(false),
                setStack: [],
                completed: false, 
                isEditing:false,
            },
            ...prev,
        ]);
    };

    const toggleComplete = (id) => {
        setTodos((prev) => 
            prev.map((todo) => 
                todo.id === id ? {...todo, completed: !todo.completed} : todo));
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    const editTodo = (id) => {
        setTodos((prev) =>
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

    // lIFO forward/backward logic
    const completeSet = (todoId, setIndex) => {
        setTodos((prev) => 
            prev.map((todo) => {
                if (todo.id !== todoId) return todo;
                
                const newSets = [...todo.sets];
                const newStack = [...todo.setStack];

                if (!newSets[setIndex]) {
                    newSets[setIndex] = true;
                    newStack.push(setIndex);
                } else {
                    const top = newStack[newStack.length - 1];
                    if (top === setIndex) {
                        newSets[setIndex] = false;
                        newStack.pop();
                    }
                }

                const allOn = newSets.every((val) => val === true);

                return {
                    ...todo,
                    sets: newSets,
                    setStack: newStack,
                    completed: allOn,
                };
            })
        );
    };


    return (
        <div className='TodoWrapper'>
            {/* <h3 className='target'>Add your workout.</h3>  */}
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