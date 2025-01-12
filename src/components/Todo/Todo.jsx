import SetTracker from '../SetTracker/SetTracker';

function Todo({ task, toggleComplete, deleteTodo, editTodo, completeSet }) {
    return (
    <div className="todo">
        <p onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? 'completed' : ''}`}>
            {task.task}
        </p>
        <SetTracker
            sets={task.sets}
            completeSet={completeSet}
            taskId={task.id}
        />

    </div>
    )
}

export default Todo;