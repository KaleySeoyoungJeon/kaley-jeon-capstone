import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TodoWrapper from "../../components/TodoWrapper/TodoWrapper";
import './TodoPage.scss';

function TodoPage() {
    
    const location = useLocation();
    const navigate = useNavigate();

    // reading bodypart from location.state
    const bodyPart = location.state?.bodyPart;

    useEffect(() => {
        if (!bodyPart) {
            navigate('/', { replace: true });
        }
    }, [bodyPart, navigate]);

    //converting the params into text formats
    const targetMap = {
        upper:"Upper Body",
        lower: "Lower Body",
        full: "Full Body",
    }

    const displayText = bodyPart ? targetMap[bodyPart] : null;

    if (!bodyPart) {
        return null; // add spinner later?
    }

    return (
            <div className="todoPage">
                <div className="todoPage__wrapper">
                    <div className="todo--title"> 
                        Targeting
                    </div>
                    <div className={`target-chip ${bodyPart}`}>
                        {bodyPart === 'full' 
                            ? 'Full body' 
                            : bodyPart === 'upper' 
                            ? 'Upper body'
                            : 'Lower body'} 
                    </div>
                </div>
                <TodoWrapper selectedTarget={displayText} />
            </div>
    )
}

export default TodoPage;