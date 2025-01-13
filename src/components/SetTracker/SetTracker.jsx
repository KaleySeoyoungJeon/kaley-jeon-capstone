import './SetTracker.scss';

function SetTracker ({ sets, completeSet, taskId }) {

    return (
        <div className="sets">
            {sets.map((set, index) => (
                <button
                    key={index}
                    className={`set-button ${set ? 'completed' : ''}`}
                    onClick={() => completeSet(taskId, index)}
                    disabled={!set && index > 0 && !sets[index -1]}
                >
                    {`Set ${index +1}`}
                </button>
            ))}
        </div>
    
    )
}

export default SetTracker;