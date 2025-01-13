import './Popover.scss';
import { useEffect, useRef } from 'react';

function Popover ({ isOpen, onClose, children }) {
    
    const popoverRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                isOpen && 
                popoverRef.current &&
                !popoverRef.current.contains(event.target)
            ) {
                onClose?.();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="popover" ref={popoverRef}>
            {children}
        </div>
    )
}

export default Popover;