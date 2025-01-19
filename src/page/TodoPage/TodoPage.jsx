import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TodoWrapper from "../../components/TodoWrapper/TodoWrapper.jsx";
import './TodoPage.scss';
import capstone_logo_md from '../../assets/logos/capstone_logo_md.png'

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
                <div className="logo">
                    <img src={capstone_logo_md} alt="Logo icon" className="logo--icon" />
                </div>
                <div className="todoPage__card">
                    <div className="todoPage__card--top">
                        <p className="card-text">Loream ipsum</p>
                    </div>
                </div>
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