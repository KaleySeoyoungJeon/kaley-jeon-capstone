import { useState } from 'react';
import capstone_add_icon from '../../assets/icons/capstone_add_icon.png'
import './TodoForm.scss';

function TodoForm({ addTodo }) {

    // controlls the bottom card 
    const [isAddOpen, setIsAddOpen] = useState(false);

    // workout name typed by user
    const [value, setValue] = useState('');

    // user's chosen number of sets (1-5). Default is 1
    const [chosenSetCount, setChosenSetCount] = useState(1);

    // always stores it in state after user chooses how many sets (see handleSetCount)
    const [sets, setSets] = useState([false]);

    // stack for toggling sets in LIFO order (unclick only the last set)
    const [setStack, setSetStack] = useState([]);

    const openAddCard = () => setIsAddOpen(true);
    const closeAddCard = () => setIsAddOpen(false);

    // clicking a set => toggle it if the previous set is on
    // if there's only 1 in total, clciking it on will complete the todo
    const handleSetClick = (index) => {
        setSets((prevSets) => {
            const newSets = [...prevSets];
            const newStack = [...setStack];

            if (!newSets[index]) {
                const canTurnOn = (index === 0) || newSets[index -1] === true;
                if (canTurnOn) {
                    newSets[index] = true,
                    newStack.push(index);
                    setSetStack(newStack);
                }
            } else {
                const top = newStack[newStack.length -1];
                if (top === index) {
                    newSets[index] = false;
                    newStack.pop();
                    setSetStack(newStack);
                }
            }
            return newSets;
        })
    };

    const handleInputChange = (event) => {
        setValue(event.target.value);
    }


    const handleConfirm = () => {
        if (!value.trim()) return;
        addTodo({ 
            workout: value, 
            chosenSet: selectedSet +1,
        });

    setValue('');
    setChosenSetCount(1);
    setSets([false]);
    setSetStack([]);
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
                                    onClick={() => handleSetClick(count)}
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