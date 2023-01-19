import React from 'react'
import { useRef, useContext } from 'react'
import './Popup.css'
import Close from './close.svg'
import iReact from './react.png'
import Github from './github.png'
import Git from './git.png'
import HTML from './html.png'
import CSS from './css.png'
import Sass from './sass.png'
import Kasa1 from './kasa1.gif'
import Kasa2 from './kasa2.gif'
import Ohmyfood1 from './ohmyfood1.gif'
import Ohmyfood2 from './ohmyfood2.gif'
import LangContext from '../../LangContext'


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

    const langValue = useContext(LangContext); 

    // Defining the content of the popup depending on the project
    let projectStack = [];
    let projectDesc;
    if(props.project === "Kasa") {
        projectStack = [iReact, Git, Github, CSS];
        if(langValue.lang) {
            projectDesc = 
            <>
                <p>J'ai travaillé sur le projet Kasa dans le cadre de ma formation et il s'agit de mon premier projet en React. Ce projet m'a permis de découvrir la librairie, de créer des modules courants, et de <u>me baser sur les maquettes pour créer la meilleure expérience utilisateur</u> possible.</p>
                <div className="projects-details-images"><img src={Kasa1} alt="gif kasa"/><img src={Kasa2} alt="gif kasa"/></div>
                <div className="projects-details-main"><h3>Mon rôle sur ce projet</h3>
                    <ul>
                        <li>Intégration des maquettes fournies par le Product Designer (avec hooks et composants)</li>
                        <li>Intégration <u>dynamique des informations</u> (utilisateurs et listings)</li>
                        <li>Création d'un slideshow pour afficher les photos des annonces avec activation au touch, au clavier ou au clic</li>
                        <li>Création d'un <u>collapse à hauteur dynamique</u></li>
                        <li>Création de <u>plusieurs pages via React Router</u> (dont une page 404)</li>
                        <li>Mise en ligne de la plateforme via Github pages</li>
                    </ul>
                </div>
            </>;
        } else {
            projectDesc =
            <>
                <p>J'ai travaillé sur le projet Kasa dans le cadre de ma formation et il s'agit de mon premier projet en React. Ce projet m'a permis de découvrir la librairie, de créer des modules courants, et de <u>me baser sur les maquettes pour créer la meilleure expérience utilisateur</u> possible.</p>
                <div className="projects-details-images"><img src={Kasa1} alt="gif kasa"/><img src={Kasa2} alt="gif kasa"/></div>
                <div className="projects-details-main"><h3>Mon rôle sur ce projet</h3>
                    <ul>
                        <li>Intégration des maquettes fournies par le Product Designer (avec hooks et composants)</li>
                        <li>Intégration <u>dynamique des informations</u> (utilisateurs et listings)</li>
                        <li>Création d'un slideshow pour afficher les photos des annonces avec activation au touch, au clavier ou au clic</li>
                        <li>Création d'un <u>collapse à hauteur dynamique</u></li>
                        <li>Création de <u>plusieurs pages via React Router</u> (dont une page 404)</li>
                        <li>Mise en ligne de la plateforme via Github pages</li>
                    </ul>
                </div>
            </>;
        }
    } else if(props.project === "Ohmyfood!") {
        projectStack = [HTML, Sass, Git, Github];
        if(langValue.lang) {
            projectDesc =
            <>
                <p>J'ai travaillé sur le projet Ohmyfood! dans le cadre de ma formation. Pour ce projet, j'ai utilisé Sass et j'ai travaillé sur les animations CSS pour dynamiser la plateforme. Les maquettes ont été <u>intégrées en mobile first</u>, puis adaptées au format desktop.</p>
                <div className="projects-details-images"><img src={Ohmyfood1} alt="gif ohmyfood"/><img src={Ohmyfood2} alt="gif ohmyfood"/></div>
                <div className="projects-details-main"><h3>Mon rôle sur ce projet</h3>
                    <ul>
                        <li>Intégration des maquettes en mobile first</li>
                        <li>Utilisation des <u>variables Sass</u></li>
                        <li><u>Création d'animations</u> sur les différentes pages (like, séléction de plat, chargement de la page)</li>
                        <li>Utilisation et personnalisation des icones fontawesome</li>
                        <li>Mise en ligne de la plateforme via <u>Github Pages</u></li>
                    </ul>
                </div>
            </>;
        } else {
            projectDesc =
            <>
                <p>J'ai travaillé sur le projet Ohmyfood! dans le cadre de ma formation. Pour ce projet, j'ai utilisé Sass et j'ai travaillé sur les animations CSS pour dynamiser la plateforme. Les maquettes ont été <u>intégrées en mobile first</u>, puis adaptées au format desktop.</p>
                <div className="projects-details-images"><img src={Kasa1} alt="gif kasa"/><img src={Kasa2} alt="gif kasa"/></div>
                <div className="projects-details-main"><h3>Mon rôle sur ce projet</h3>
                    <ul>
                        <li>Intégration des maquettes en mobile first</li>
                        <li>Utilisation des variables Sass</li>
                        <li><u>Création d'animations</u> sur les différentes pages (like, séléction de plat, chargement de la page)</li>
                        <li>Utilisation et personnalisation des icones fontawesome</li>
                        <li>Mise en ligne de la plateforme via Github Pages</li>
                    </ul>
                </div>
            </>;
        }
    }

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
                </div>
                <div className="popup-description">
                    {projectDesc}
                </div>
            </div>
        </div>
    </div>
  )
}
