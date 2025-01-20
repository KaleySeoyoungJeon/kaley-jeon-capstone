import './ErrorNotification.scss';


function ErrorNotification( { message } ) {

    if (!message) return null;

    return (
            <div className="error-notification">
                <div className="error-notification--icon">
                    <span className='error-notification--mark'>
                        !
                    </span>
                </div>
                <p className="error-notification--text">
                    {message}
                </p>
        </div>
    )
}

export default ErrorNotification;