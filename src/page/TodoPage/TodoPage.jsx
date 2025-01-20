import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TodoWrapper from "../../components/TodoWrapper/TodoWrapper.jsx";
import './TodoPage.scss';
import capstone_logo_md from '../../assets/logos/capstone_logo_md.png'
import quotes from '../../data/quotes.js'


function getDaySuffix(day) {
    if (day>=11 && day <=13) {
        return 'th';
    } 
    switch (day % 10) {
        case 1: 
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

function TodoPage() {
    
    const location = useLocation();
    const navigate = useNavigate();
    const bodyPart = location.state?.bodyPart;

    useEffect(() => {
        if (!bodyPart) {
            navigate('/', { replace: true });
        }
    }, [bodyPart, navigate]);

    const targetMap = {
        upper:"Upper Body",
        lower: "Lower Body",
        full: "Full Body",
    }

    // to display real-time
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        function updateDateTime() {
            const now = new Date();
            
            const day = now.getDate();
            const suffix = getDaySuffix(day);

            const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
            ];
            const month = monthNames[now.getMonth()];

            const year = now.getFullYear();
            
            let hours = now.getHours();
            const ampm = hours >= 12? "PM" : "AM";
            hours = hours % 12;
            hours = hours || 12;
            let minutes = now.getMinutes();
            if (minutes < 10 ) {
                minutes = '0' + minutes;
            }

            const dateLine = `${day}${suffix} ${month} ${year}`;
            const timeLine = `${hours}:${minutes} ${ampm}`

            const formatted = dateLine + '\n' + timeLine;
            setCurrentTime(formatted);
        }
        updateDateTime();
        const timeerId = setInterval(updateDateTime, 60_000);
        return () => clearInterval(timeerId);
    })

    const displayText = bodyPart ? targetMap[bodyPart] : null;

    //random quotes
    const [randomQuote] = useState(() => {
        const index = Math.floor(Math.random() * quotes.length);
        return quotes[index]?.text || "1% better today!";//fallback
    });
 
    if (!bodyPart) {
        return null; // add spinner later?
    }

    return (
            <div className="todoPage">
                <div className="logo">
                    <img src={capstone_logo_md} alt="Logo icon" className="logo--icon" />
                </div>
                <div className="workoutBoard">
                    <div className="workoutBoard__card-top">
                        <p className="card-text">Workout Board</p>
                    </div>
                    <div className="workoutBoard__card-mid">
                        <div className="target-title"> 
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
                    <div className="workoutBoard__card-bottom">
                        <p className="workoutBoard__card-bottom--time">
                            {currentTime.split('\n')[0]}
                            <br />
                            {currentTime.split('\n')[1]}
                        </p>
                        <p className="workoutBoard__card-bottom--text">
                            <p className="quote-label">
                                Quote of the day:
                            </p>
                            {randomQuote}
                        </p>
                    </div>
                </div>
                    <TodoWrapper selectedTarget={displayText} />
            </div>
    )
}

export default TodoPage;