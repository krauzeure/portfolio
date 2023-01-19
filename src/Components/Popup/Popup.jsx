import React from 'react'
import { useRef, useEffect } from 'react'
import './Popup.css'
import Close from './close.svg'

export function Popup(props) {

    const closePopup = () => {
        props.popupFunc(false)
      }

    const popupRef = useRef(null);
    const handleOutsideClick = (e) => {
        if(!popupRef.current.contains(e.target)) {
            closePopup();
        } 
    }

  return (
    <div className="popup-container" onClick={handleOutsideClick}>
        <div className="popup-box" ref={popupRef}>
            <div className="popup-close" onClick={closePopup}><img src={Close} alt="Close popup" /></div>
            <div className="popupcontent">
                <div className="popup-heading">
                    <h2>Nom du projet</h2>
                    <div className="popup-heading-stack"></div>
                </div>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</div>
        </div>
    </div>
  )
}
