import './SetTracker.scss';

function SetTracker ({ todoId, sets, setStack, onToggleSet }) {

    const setCount = sets.length;

    const baseButtonWidth = 60;
    const gap = 16;

    const containerWidth = setCount * baseButtonWidth + (setCount - 1) * gap;

    const lastTrueIndex = sets.lastIndexOf(true);
    const fillPercent =
        lastTrueIndex < 0 ? 0 : ((lastTrueIndex + 1) / setCount) * 100;

    const rawFill = fillPercent - 4;
    const adjustedFill = rawFill < 0 ? 0 : rawFill;


    return (
        <div className="progressTube"
            style={{ width: `${containerWidth}px`}}
        >
            <div 
                className="progressTube__fill"
                style={{ width: `${adjustedFill}%`}}
            />

            <div className="progressTube__buttons">
                {sets.map((isOn, index) => {
                    let disabled = false;
                    
                    if (!isOn) {
                        if (index > 0 && sets[index - 1] === false) {
                            disabled = true; 
                        } 
                    } else {
                        const top = setStack[setStack.length - 1];
                        if (top !== index) {
                            disabled = true;
                        }
                    }
                return (
                    <button
                        key={index}
                        className={`progressTube__set-btn ${isOn ? 'selected' : ''}`}
                        onClick={() => onToggleSet(todoId, index)}
                        disabled={disabled}
                    >
                        {`Set ${index + 1}`}
                    </button>
                );
                })}
            </div>
        </div>
    );
}

export default SetTracker;
