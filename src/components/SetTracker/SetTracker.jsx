import './SetTracker.scss';

function SetTracker ({ todoId, sets, setStack, onToggleSet }) {

    return (
        <div className="sets">
            {sets.map((isOn, index) => {
                let disabled = false;

                if (!isOn) {
                    if (index > 0 && sets[index -1] === false) {
                        disabled = true;
                        }
                    } else {
                        const top = setStack[setStack,length - 1];
                        if (top !== index) {
                            disabled = true;
                        }
                    }

                return (
                    <button
                        key={index}
                        className={`setUser-btn ${isOn ? 'completed' : ''}`}
                        onClick={() => onToggleSet(todoId, index)}
                        disabled={disabled}
                    >
                        {`Set ${index + 1}`}
                    </button>
                    );
                })}
        </div>
    );
}

export default SetTracker;
