import './ErrorNotification.scss';


function ErrorNotification( { message } ) {

    if (!message) return null;

    return (
        <div>
            <div className="error-notification">
                <div className="erorr-notification--icon">
                    <p className='erorr-notification--mark'>
                        !
                    </p>
                </div>
                <p className="error-notification--text">
                    {message}
                </p>
            </div>
        </div>
    )
}

export default ErrorNotification;