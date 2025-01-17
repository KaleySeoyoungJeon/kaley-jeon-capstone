import { useEffect, useState } from "react";
import './EditTodoSheet.scss';
import capstone_close_icon from '../../assets/icons/capstone_close_icon.png'


function EditTodoSheet({ initialValue, todoId, editTodo, task, onUpdate }) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value.trim()) return;
        onUpdate(value, taskId);
        onclose();
    };

    const stopProp = (event) => {
        event.stopPropagation();
    }


    return (
            <div className="editTodoSheet">
                <div className="editTodoSheet__overlay" onClick={handleClose}>
                <div className="editTodoSheet__content" onClick={stopProp}>
                    <div className="editTodoSheet__topBar">
                        <p className="editTodoSheet--title">
                            Edit Workout
                        </p>
                        <button 
                            className="editTodoSheet--close-btn" 
                            onClick={handleClose}
                            type='button'>
                            <img className='close-icon'src={capstone_close_icon} alt="Close icon" />
                        </button>
                    </div>
                    <form className="editTodoSheet__form" onSubmit={handleSubmit}>
                        <input
                            type='text'
                            className="editTodoSheet--input"
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                        />
                        <button 
                            className="editTodoSheet_cta"
                            type="submit"
                        >
                            Update
                        </button>
                    </form>
                </div>
                </div>
            </div>
    )
}

export default EditTodoSheet;

