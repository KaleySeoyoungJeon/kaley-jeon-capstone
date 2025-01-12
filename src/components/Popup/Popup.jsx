import { useRef, useState } from 'react';
import './Popup.scss';
import capstone_edit_icon from '../../assets/icons/capstone_edit_icon.png'
import capstone_trash_icon from '../../assets/icons/capstone_trash_icon.png'

function Popup ({ onEdit, OnDelete }) {
    
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onclose();
        }
    };

    return (
        <div className="popup" onClick={handleOverlayClick}>
            <div className="popup__wrapper">
                    <button className="popup__btn-edit" onClick={onEdit}>
                        <img src={capstone_edit_icon} alt="Edit icon" className="edit-icon" />
                        <h3>Edit</h3>
                    </button>
                    <button className="popup__btn-delete" OnDelete={OnDelete}>
                        <img src={capstone_trash_icon} alt="Delete icon" className="delete-icon" />
                        <h3>Edit</h3>
                    </button>
            </div>
        </div>
    )
    }

export default Popup;