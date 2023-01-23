import React from 'react'
import { useRef, useContext } from 'react'
import './Popup.css'
import Close from './close.svg'
import iReact from './react.png'
import JS from './js.png'
import Github from './github.png'
import Git from './git.png'
import HTML from './html.png'
import CSS from './css.png'
import Sass from './sass.png'
import Node from './node.png'
import Kanap1 from './kanap1.gif'
import Kanap2 from './kanap2.gif'
import Kasa1 from './kasa1.gif'
import Kasa2 from './kasa2.gif'
import Ohmyfood1 from './ohmyfood1.gif'
import Ohmyfood2 from './ohmyfood2.gif'
import Airpeger1 from './airpeger1.gif'
import Airpeger2 from './airpeger2.gif'
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
                <p>J'ai travaillé sur le projet Kasa dans le cadre de ma formation et il s'agit de mon premier projet en React. Ce projet m'a permis de découvrir la bibliothèque, de créer des modules courants, et de <u>me baser sur les maquettes pour créer la meilleure expérience utilisateur</u> possible.</p>
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
                <p>I worked on the Kasa project as part of my developer course and it's my first React project. It allowed me to learn how to use the library, how to create popular modules, and how to <u>work from the wireframes to create the best user experience</u> possible.</p>
                <div className="projects-details-images"><img src={Kasa1} alt="gif kasa"/><img src={Kasa2} alt="gif kasa"/></div>
                <div className="projects-details-main"><h3>What I brought to this project</h3>
                    <ul>
                        <li>Integrating wireframes created by the Product Designer (with hooks and components)</li>
                        <li><u>Dynamically integrating</u> information (users and listings)</li>
                        <li>Creating a slideshow for the listings' photos with click, touch, or keyboard usage</li>
                        <li>Creating a collapse module with <u>dynamic height</u></li>
                        <li>Creating several pages for the app with <u>React Router</u> (including a 404 page)</li>
                        <li>Publishing the app with Github pages</li>
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
                <p>I worked on the Ohmyfood! project as part of my Developer course. For this project, I used Sass and I added CSS animations to make the platform more dynamic. I integrated the wireframes with a <u>mobile first</u> mindset, adapting them for a desktop screen later on.</p>
                <div className="projects-details-images"><img src={Ohmyfood1} alt="gif ohmyfood"/><img src={Ohmyfood2} alt="gif ohmyfood"/></div>
                <div className="projects-details-main"><h3>What I brought to this project</h3>
                    <ul>
                        <li>Integrating the wireframes with a mobile first methodology</li>
                        <li>Using <u>Sass variables</u></li>
                        <li><u>Creating animations</u> on the different pages (like, dish selection, page loading)</li>
                        <li>Using and customizing fontawesome icons</li>
                        <li>Publishing the platform with <u>Github Pages</u></li>
                    </ul>
                </div>
            </>;
        }
    } else if(props.project === "Airpéger") {
        projectStack = [iReact, Node, CSS, Git, Github];
        if(langValue.lang) {
            projectDesc =
            <>
                <p>Airpéger est un projet personnel, développé pour des écrivains. J'ai créé la plateforme avec React pour le front, et Node.js pour le back. Après 2 semaines, le site est <u>utilisé par 101 personnes</u>, et plus de 220.000 mots ont déjà été écrits grâce à Airpéger !</p>
                <div className="projects-details-images"><img src={Airpeger1} alt="gif airpéger"/><img src={Airpeger2} alt="gif airpéger"/></div>
                <div className="projects-details-main"><h3>Mon rôle sur ce projet</h3>
                    <ul>
                        <li>Création d'une plateforme <u>en partant de zéro</u></li>
                        <li>Réalisation des maquettes et écriture des specs</li>
                        <li>Création de la partie serveur avec <u>gestion des utilisateurs et envoi d'emails</u> via sendgrid</li>
                        <li>Création d'un dark mode</li>
                        <li>Hébergement du serveur via Vercel</li>
                    </ul>
                </div>
            </>;
        } else {
            projectDesc =
            <>
                <p>Airpéger is a personal project, developed for writers. I created the platform from scratch, using React for the Front, and Node.js for the back. After 2 weeks, <u>101 one writers already use the app</u>, and have written over 220.000 words on Airpéger!</p>
                <div className="projects-details-images"><img src={Airpeger1} alt="gif airpéger"/><img src={Airpeger2} alt="gif airpéger"/></div>
                <div className="projects-details-main"><h3>What I brought to this project</h3>
                    <ul>
                        <li>Creating an app from <u>scratch</u></li>
                        <li>Creating the wireframes and writing the specs</li>
                        <li>Building the server side to <u>handle user accounts and send emails</u> with sendgrid</li>
                        <li>Creating a dark mode</li>
                        <li>Hosting the server on Vercel</li>
                    </ul>
                </div>
            </>;
        }
    } else if(props.project === "Kanap") {
        projectStack = [JS, Git, Github];
        if(langValue.lang) {
            projectDesc =
            <>
                <p>J'ai travaillé sur le site Kanap dans le cadre de ma formation Développeuse Web. Pour ce projet, j'ai intégré le site Kanap en JS en <u>récupérant les informations produit via une API</u> pour les afficher de manière dynamique. J'ai également créé un système de panier via local storage, et géré l'envoi des commandes au serveur.</p>
                <div className="projects-details-images"><img src={Kanap1} alt="gif kanap"/><img src={Kanap2} alt="gif kanap"/></div>
                <div className="projects-details-main"><h3>Mon rôle sur ce projet</h3>
                    <ul>
                        <li>Intégration des produits de manière dynamiques via les informations de l'API</li>
                        <li>Création d'un <u>panier via local storage</u></li>
                        <li><u>Validation de la saisie utilisateur</u> (nombre de produits et informations utilisateur via des Regex)</li>
                        <li>Affichage du numéro de commande récupéré via la méthode get de URLSearchParams</li>
                    </ul>
                </div>
            </>;
        } else {
            projectDesc =
            <>
                <p>I worked on the Kanap platform during my Developer course. For this project, I integrated the Kanap app with JS and <u>fetched the product information via the API</u> to show them dynamically. I also created a cart system with local storage and created the request to send the order to the server.</p>
                <div className="projects-details-images"><img src={Kanap1} alt="gif kanap"/><img src={Kanap2} alt="gif kanap"/></div>
                <div className="projects-details-main"><h3>What I brought to this project</h3>
                    <ul>
                        <li>Integrating products dynamically from the API information</li>
                        <li>Creating a <u>cart system with local storage</u></li>
                        <li><u>Validating the user input</u> (product quantity and user information with Regex)</li>
                        <li>Showing the order ID we got from URLSearchParams' get method</li>
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
