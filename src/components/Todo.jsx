import capstone_edit_icon from '../assets/icons/capstone_edit_icon.png'
import capstone_trash_icon from '../assets/icons/capstone_trash_icon.png'

function Todo({task, toggleComplete, deleteTodo, editTodo}) {
    return (
    <div className="todo-item">
        <p onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
        <div>
            <img
            src={capstone_edit_icon}
            alt='Edit icon'
            onClick={() => editTodo(task.id) } />
            <img 
            src={capstone_trash_icon}
            alt="Trash icon"
            onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
    )
}

export default Todo;