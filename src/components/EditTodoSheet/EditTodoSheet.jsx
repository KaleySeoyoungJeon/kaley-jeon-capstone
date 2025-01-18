import { useEffect, useState } from "react";
import capstone_close_icon from '../../assets/icons/capstone_close_icon.png'
import './EditTodoSheet.scss'


function EditTodoSheet({ initialValue, todoId, onUpdate, onClose }) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value.trim()) return;
        console.log("EditTodoSheet: submitting", value, todoId);
        onUpdate(value, todoId);
        onClose();
    };

    const stopProp = (event) => {
        event.stopPropagation();
    }

    const handleClose = () => {
        onClose();
    }

    return (
            <div className="editTodoSheet">
                <div className="editTodoSheet__overlay" onClick={handleClose}>
                <div className="editTodoSheet__content" onClick={stopProp}>
                    <div className="editTodoSheet__global">
                        <p className="editTodoSheet--title">
                            Edit Workout
                        </p>
                        <button 
                            className="editTodoSheet--close-btn" 
                            onClick={handleClose}
                            type='button'
                        >
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
                            className="editTodoSheet--cta"
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

