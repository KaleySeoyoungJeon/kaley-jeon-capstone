import './LandingPage.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ErrorNotification from '../../components/ErrorNotification/ErrorNotification';
import capstone_thunder_icon from '../../assets/icons/capstone_thunder_icon.png'
import capstone_logo_md from '../../assets/logos/capstone_logo_md.png'


function LandingPage() {

    const navigate = useNavigate();
    const [selectedBodyPart, setSelectedBodyPart] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleBodyPartClick = (bodyPart) => {
        setSelectedBodyPart(bodyPart);
        setErrorMessage('');
    };

    const handleStart = () => {
        if (!selectedBodyPart) {
            setErrorMessage("Please select one of the targeting body parts.");
            return;
        }
        navigate('/todo', { state: { bodyPart: selectedBodyPart }});
    };


    return (
        <div className='landingPage'>
            <div className="marquee">
                <div className="marquee__inner">
                    <p className="marquee__inner--text">where you become 1 % better than yesterday 💪 </p>
                    <p className="marquee__inner--text">✸ where you become 1 % better than yesterday 💪 </p>
                    <p className="marquee__inner--text">where you become 1 % better than yesterday 💪 </p>
                </div>
            </div>
            <img className='landingPage--logo' src={capstone_logo_md} alt="Logo of Better Today" />
            <p className="landingPage--title">
                Move Forward with Easy Workout Tracking
            </p>
            <div className="landingPage__options">
                <button
                    className={`body-btn full-btn ${selectedBodyPart === 'full' ? 'selected' : ''}`}
                    onClick={() => handleBodyPartClick('full')}
                >
                    Full body
                </button>
                <button 
                    className={`body-btn upper-btn ${selectedBodyPart === 'upper' ? 'selected' : ''}`}
                    onClick={() => handleBodyPartClick('upper')}
                >
                    Upper body
                </button>
                <button
                    className={`body-btn lower-btn ${selectedBodyPart === 'lower' ? 'selected' : ''}`}
                    onClick={() => handleBodyPartClick('lower')}
                >
                    Lower body
                </button>
                </div>
            <div className="start__cta">
                <button 
                    className='start__cta--btn' 
                    onClick={handleStart}
                > 
                    Get Started
                    <img src={capstone_thunder_icon} alt="Thunder icon"  className='start__cta--btn-icon'/>
                </button>
                <p className='start__cta--text'>Getting it done is better than perfecting it</p>
            </div>
            <ErrorNotification
                message={errorMessage}
                onClose={() => setErrorMessage('')}
            />

        </div>
    )
}

export default LandingPage;