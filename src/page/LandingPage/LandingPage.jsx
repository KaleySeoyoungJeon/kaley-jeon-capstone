import './LandingPage.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ErrorNotification from '../../components/ErrorNotification/ErrorNotification';
import capstone_thunder_icon from '../../assets/icons/capstone_thunder_icon.png'
import capstone_logo_md from '../../assets/logos/capstone_logo_md.png'
import capstone_star_icon from '../../assets/icons/capstone_star_icon.png'
import capstone_kettle_icon from '../../assets/icons/capstone_kettle_icon.png'
import capstone_dumbell_icon from '../../assets/icons/capstone_dumbell_icon.png'
import capstone_barbell_icon from '../../assets/icons/capstone_barbell_icon.png'


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

            {/* make change here for the new button section */}
            <div className="landingPage__options">
                <div className="landingPage__options--top">
                    <img className='star-icon' src={capstone_star_icon} alt="Star icon" />
                    <p className="target-text">
                        Choose a targeting area
                    </p>
                </div>
                <div className="landingPage__options--bottom">
                    <div className="button-group">
                        <img className="icon-btn" src={capstone_kettle_icon} alt="Kettle bell icon" />
                        <button
                            className={`body-btn full-btn ${selectedBodyPart === 'full' ? 'selected' : ''}`}
                            onClick={() => handleBodyPartClick('full')}
                            aria-label="Full body"
                        >
                            Full
                            <br aria-hidden='true' />
                            Body
                        </button>
                    </div>
                    <div className="button-group">
                        <img className="icon-btn" src={capstone_dumbell_icon} alt=""  />
                        <button 
                            className={`body-btn upper-btn ${selectedBodyPart === 'upper' ? 'selected' : ''}`}
                            onClick={() => handleBodyPartClick('upper')}
                            aria-label="Upper body"
                        >
                            Upper body
                        </button>
                    </div>
                    <div className="button-group">
                        <img className='icon-btn' src={capstone_barbell_icon} alt="barbell icon" />
                        <button
                            className={`body-btn lower-btn ${selectedBodyPart === 'lower' ? 'selected' : ''}`}
                            onClick={() => handleBodyPartClick('lower')}
                            aria-lable="Lower body"
                        >
                            Lower body
                        </button>
                    </div>
                </div>
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