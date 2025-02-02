import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from '../TodoForm/TodoForm';
import './TodoWrapper.scss';
import Todo from '../Todo/Todo';


uuidv4(); 

function TodoWrapper() {

    //localStorage
    const [todos, setTodos] = useState(() => {
        const savaedTodos = localStorage.getItem('workoutData');
        return savaedTodos ? JSON.parse(savaedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('workoutData', JSON.stringify(todos));
    }, [todos]);

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

    const editTodo = (newVal, id) => {
        console.log("TodoWrapper: editTodo with", newVal, id);
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? {...todo, task: newVal } : todo)
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
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo) => (
                <Todo 
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