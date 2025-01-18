import SetTracker from '../SetTracker/SetTracker';
import { useRef, useState } from 'react';
import './Todo.scss';
import Popover from '../Popover/Popover';
import capstone_edit_icon from '../../assets/icons/capstone_edit_icon.png'
import capstone_trash_icon from '../../assets/icons/capstone_trash_icon.png'
import capstone_menu_icon from '../../assets/icons/capstone_menu_icon.png'
import EditTodoSheet from '../EditTodoSheet/EditTodoSheet';


function Todo({ task, toggleComplete, deleteTodo, editTodo, completeSet }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const containerRef = useRef(null);

    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    const handleDelete = () => {
        deleteTodo(task.id);
        closeMenu();
    };

    const handleEdit = () => {
        setIsSheetOpen(true);
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
                        <img src={capstone_edit_icon} alt="Edit icon" className='edit-icon'/>
                        <h3 className="popover--text-edit">
                            Edit
                        </h3>
                    </div>
                    <div className="popover__menu" onClick={handleDelete}>
                        <img src={capstone_trash_icon} alt="Delete icon" className='delete-icon'/>
                        <h3 className="popover--text-delete">
                            Delete
                        </h3>
                    </div>
                </Popover>
            </div>
            <div className="todo__bottom">
                {task.sets && task.sets.length > 0 && (
                    <SetTracker
                    className='set-btn'
                    todoId={task.id}
                    sets={task.sets}
                    setStack={task.setStack}
                    onToggleSet={completeSet}
                    />
                )}
            </div>
            {isSheetOpen && (
                <EditTodoSheet
                    initialValue={task.task}
                    todoId={task.id}
                    onClose={() => setIsSheetOpen(false)}
                    onUpdate={(newVal, id) => {
                        editTodo(newVal, id);
                        setIsSheetOpen(false);
                    }}
                />
            )}
        </div>
    )
}

export default Todo;

