import { useState } from 'react';
import capstone_add_icon from '../../assets/icons/capstone_add_icon.png'
import capstone_close_icon from '../../assets/icons/capstone_close_icon.png'
import './TodoForm.scss';

function TodoForm({ addTodo }) {

    const [isAddOpen, setIsAddOpen] = useState(false);
    const [value, setValue] = useState('');
    const [chosenSetCount, setChosenSetCount] = useState(1);


    const openAddSheet = () => {
        setIsAddOpen(true);

        setValue('');
        setChosenSetCount(3);
    };

    const closeAddSheet = () => {
        setIsAddOpen(false);
    }

    const handleInputChange = (event) => {
        setValue(event.target.value);
    }

    const handleSetCount = (count) => {
        setChosenSetCount(count);
    }

    const handleConfirm = () => {
        if (!value.trim()) return;

        addTodo({ 
            workout: value, 
            chosenSet: chosenSetCount,
        });
        
        setValue('');
        setChosenSetCount(3);
        closeAddSheet();
    };

    return (
        <div className="todoForm">
            {!isAddOpen && (
                <button className="floating-btn" onClick={openAddSheet}>
                    <img src={capstone_add_icon} alt="Plus add icon" className='plus_icon' />
                    Add
                </button>
            )}

            {isAddOpen && (
                <div className="addSheet">
                    <div className="addSheet__overlay" onClick={closeAddSheet}/>
                    <div className="addSheet__bottom">
                        <div className="addSheet__global">
                            <p className="addSheet__global--title">
                                    Add Workout
                                </p>
                            <button 
                                className="addSheet__global--close-btn" 
                                onClick={closeAddSheet}
                                type='button'
                            >
                                <img className='close-icon'src={capstone_close_icon} alt="Close icon" />
                            </button>
                        </div>
                        <div className="addSheet__top">
                            <input 
                                type="text" 
                                className="addSheet__top--input"
                                value={value}
                                onChange={handleInputChange}
                                placeholder='Type your workout'
                            />
                        </div>
                        <div className="addSheet__content" onClick={(event) => event.stopPropagation()}>
                            <p className="addSheet__content--label">
                                Choose your sets
                            </p>
                            <div className="addSheet__content--sets">
                                {[1, 2, 3, 4, 5].map((count) => (
                                    <button 
                                        key={count}
                                        type='button'
                                        className={`count-btn ${chosenSetCount === count ? "selected" : ''}`}
                                        onClick={() => handleSetCount(count)}
                                    >
                                        {count}
                                    </button>
                            ))}
                        </div>
                        </div>
                        <div className="addSheet__bottom--cta">
                            <button className='confirm-btn' type='submit' onClick={handleConfirm}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TodoForm;