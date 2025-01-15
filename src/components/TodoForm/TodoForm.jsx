import { useState } from 'react';
import capstone_add_icon from '../../assets/icons/capstone_add_icon.png'
import './TodoForm.scss';

function TodoForm({ addTodo }) {

    const [isAddOpen, setIsAddOpen] = useState(false);
    const [value, setValue] = useState('');
    const [chosenSetCount, setChosenSetCount] = useState(1);


    const openAddCard = () => {
        setIsAddOpen(true);

        setValue('');
        setChosenSetCount(3);
    };

    const closeAddCard = () => setIsAddOpen(false);

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
        closeAddCard();
    };

    return (
        <div className="todoForm">
            {!isAddOpen && (
                <button className="floating-btn" onClick={openAddCard}>
                    <img src={capstone_add_icon} alt="Plus add icon" className='plus_icon' />
                    Add
                </button>
            )}

            {isAddOpen && (
                <div className="addCard">
                    <div className="addCard__top">
                        <input 
                            type="text" 
                            className="addCard__top--input"
                            value={value}
                            onChange={handleInputChange}
                            placeholder='Type your workout'
                        />
                    </div>
                    <div className="addCard__bottom">
                        <p className="addCard__bottom--label">
                            Choose your sets
                        </p>
                        <div className="addCard__bottom--container">
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
                        <div className="addCard__bottom--btn">
                            <button className='confirm-btn' onClick={handleConfirm}>
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