import SetTracker from '../SetTracker/SetTracker';
import { useRef, useState } from 'react';
import './Todo.scss';
import Popover from '../Popover/Popover';
import capstone_edit_icon from '../../assets/icons/capstone_edit_icon.png'
import capstone_trash_icon from '../../assets/icons/capstone_trash_icon.png'
import capstone_menu_icon from '../../assets/icons/capstone_menu_icon.png'

function Todo({ task, toggleComplete, deleteTodo, editTodo, completeSet }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const containerRef = useRef(null);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    const handleDelete = () => {
        deleteTodo(task.id);
        closeMenu();
    };

    const handleEdit = () => {
        editTodo(task.id);
        closeMenu();
    };

    return (
        <div className="todo" ref={containerRef} style={{ position: "relative" }}>
            <div className="todo__top">
                <p
                    onClick={() => toggleComplete(task.id)}
                    className={`todo--text ${task.completed ? 'completed' : ''} `}
                >
                    {task.task}
                </p>
                <button className="menu-btn" onClick={openMenu}>
                    <img 
                        src={capstone_menu_icon} 
                        alt="Menu icon" 
                        className="menu-icon" />
                </button>
                <Popover
                    isOpen={isMenuOpen}
                    onClose={closeMenu}
                >
                    <div className="popover__menu" onClick={handleEdit}>
                        <h3 className="popover--text-edit">
                            Edit
                        </h3>
                        <img src={capstone_edit_icon} alt="Edit icon" className='edit-icon'/>
                    </div>
                    <div className="popover__menu" onClick={handleDelete}>
                        <h3 className="popover--text-delete">
                            Delete
                        </h3>
                        <img src={capstone_trash_icon} alt="Delete icon" className='delete-icon'/>
                    </div>
                </Popover>
            </div>
            <div className="todo__bottom">
                <SetTracker
                    sets={task.sets}
                    completeSet={completeSet}
                    taskId={task.id}
                />
            </div>
        </div>
    )
}

export default Todo;

