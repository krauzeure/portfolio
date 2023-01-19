import React from 'react'
import { useRef } from 'react'
import './Popup.css'
import Close from './close.svg'
import iReact from './react.png'
import Github from './github.png'
import Git from './git.png'
import HTML from './html.png'
import CSS from './css.png'

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

    // Defining the content of the popup depending on the project
    let projectStack = [];
    let projectDesc;
    if(props.project === "Kasa") {
        projectStack = [iReact, Git, Github, CSS];
        projectDesc = "Ceci est le projet Kasa <p>test</p>"
    }
    console.log(projectStack)

  return (
    <div className="popup-container" onClick={handleOutsideClick}>
        <div className="popup-box" ref={popupRef}>
            <div className="popup-close" onClick={closePopup}><img src={Close} alt="Close popup" /></div>
            <div className="popupcontent">
                <div className="popup-heading">
                    <h2>{props.project}</h2>
                    <ul className="popup-heading-stack">
                        {projectStack.map((item, index) => {
                            return <li key={`${props.project}-${index}`}><img src={item} alt="logo stack"/></li>
                        })}
                    </ul>
                </div>{projectDesc}</div>
        </div>
    </div>
  )
}
