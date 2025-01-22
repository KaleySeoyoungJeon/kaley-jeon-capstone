import './LandingPage.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
            setErrorMessage("Please select one of the targeting body buttons.");
            return;
        }
        navigate('/todo', { state: { bodyPart: selectedBodyPart }});
    };
    
    const [isSelected, setIsSelected] = useState(false);

    const handleStartWithGlow = () => {
        setIsSelected(true);
        setTimeout(() => {
            handleStart();
        }, 400)
    }

    return (
        <div className='landingPage'>
            <div className="marquee">
                <div className="marquee__inner">
                    <p className="marquee__inner--text"> Better Today ✸ where you become 1 % better than yesterday 💪 </p>
                    <p className="marquee__inner--text">Better Today ✸ where you become 1 % better than yesterday 💪 </p>
                    <p className="marquee__inner--text">Better Today ✸ where you become 1 % better than yesterday 💪 </p>
                </div>
            </div>
            <img className='landingPage--logo' src={capstone_logo_md} alt="Logo of Better Today" />
            <p className="landingPage--title">
                Move Forward with Easy Workout Tracking
            </p>
            <div className="landingPage__options">
                <div className="landingPage__options--top">
                    {/* <img className='star-icon' src={capstone_star_icon} alt="Star icon" /> */}
                    <p className="target-text">
                        ✱
                        <br aria-hidden='true' />
                        Choose a targeting area
                    </p>
                </div>
                <div className="landingPage__options--bottom">
                        <button
                            className={`body-btn full-btn ${selectedBodyPart === 'full' ? 'selected' : ''}`}
                            onClick={() => handleBodyPartClick('full')}
                            aria-label="Full body"
                        >
                            <img className="icon-btn" src={capstone_kettle_icon} alt='' aria-hidden='true' />
                            Full
                            <br aria-hidden='true' />
                            Body
                        </button>
                        <button 
                            className={`body-btn upper-btn ${selectedBodyPart === 'upper' ? 'selected' : ''}`}
                            onClick={() => handleBodyPartClick('upper')}
                            aria-label="Upper body"
                        >
                            <img className="icon-btn" src={capstone_dumbell_icon} alt="" aria-hidden='true' />
                            Upper body
                        </button>
                        <button
                            className={`body-btn lower-btn ${selectedBodyPart === 'lower' ? 'selected' : ''}`}
                            onClick={() => handleBodyPartClick('lower')}
                            aria-label="Lower body"
                        >
                            <img className='icon-btn' src={capstone_barbell_icon} alt="" aria-hidden='true' />
                            Lower body
                        </button>
                </div>
            </div>
            <div className="options-error">
                {errorMessage && (
                    <ErrorNotification
                        message={errorMessage}
                        onClose={() => setErrorMessage('')}
                    />
                )}
            </div>
            <div className="start__cta">
                <button 
                    className={`start__cta--btn ${isSelected ? 'selected' : '' }`}
                    onClick={handleStartWithGlow}
                    aria-label="button with thunder icon"
                > 
                    Get Started
                    <img src={capstone_thunder_icon} alt="" aria-hidden='true'  className='start__cta--btn-icon'/>
                </button>
                <p className='start__cta--text'>Getting it done is better than perfecting it</p>
            </div>
        </div>
    )
}

export default LandingPage;