import './Home.css'

import Download from './download.png'
import DownloadDark from './download-dark.png'

import { useContext, useState } from 'react';

import LangContext from '../../LangContext';
import ThemeContext from '../../ThemeContext';
import { frenchCopy } from '../../text/french'
import { englishCopy } from '../../text/english';
import { Project } from '../../Components/Project/Project';
import { ExperienceItem } from '../../Components/ExperienceItem/ExperienceItem';

export function Home() {

  const langValue = useContext(LangContext);
  const ThemeValue = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("OpenClassrooms");

  const changeSelector = (e) => {
    setActiveTab(e.target.textContent);
  }

  let arrowClass = "experience-item-arrow experience-item-arrow-openclassrooms";
  if(activeTab === "OpenClassrooms") {
    arrowClass = "experience-item-arrow experience-item-arrow-openclassrooms"
  } else if (activeTab === "Drivy") {
    arrowClass = "experience-item-arrow experience-item-arrow-drivy"
  } else if (activeTab === "Schibsted") {
    arrowClass = "experience-item-arrow experience-item-arrow-schibsted"
  } else if (activeTab === "Leboncoin") {
    arrowClass = "experience-item-arrow experience-item-arrow-leboncoin"
  }

  return (
    <>
        <section className="main-description">
            <h1 
            className={langValue.lang ? "anim-typewriter-fr" : "anim-typewriter-en"}>
              {langValue.lang ? frenchCopy.home.heading : englishCopy.home.heading}
            </h1>
            <p>{langValue.lang ? frenchCopy.home.subheading : englishCopy.home.subheading}</p>
        </section>

        <section className="projects main-section"id="projects">
          <h2>Projets</h2>
          <div className="projects-top-border"></div>
            <Project title={"Kanap"} text={"Intégration du site Kanap avec Javascript. Récupération des produits via l’API, création d’un panier via le local storage, et envoi de la commande au serveur. "} />

            <Project title={"Kanap"} text={"Intégration du site Kanap avec Javascript. Récupération des produits via l’API, création d’un panier via le local storage, et envoi de la commande au serveur. "} reversed={true} />

            <Project title={"Kanap"} text={"Intégration du site Kanap avec Javascript. Récupération des produits via l’API, création d’un panier via le local storage, et envoi de la commande au serveur. "} />
        </section>

        <section className="experience main-section" id="experience">
        <h2>Experience</h2>
          <div className="projects-top-border"></div>

          <div className="experience-container">
            <div className="experience-selector">
              <ul>
                <li className="experience-item" onClick={changeSelector}>OpenClassrooms</li>
                <li className="experience-item" onClick={changeSelector}>Drivy</li>
                <li className="experience-item" onClick={changeSelector}>Schibsted</li>
                <li className="experience-item" onClick={changeSelector}>Leboncoin</li>
              </ul>
              <a href="/">
                <div className="resume-download">
                  <img 
                  src={ThemeValue.theme ? Download : DownloadDark}
                  alt={langValue.lang ? "Télécharger CV" : "Download resume"} 
                  />
                  {langValue.lang ? frenchCopy.resume.download : englishCopy.resume.download} 
                </div>
              </a>
            </div>
            <span className={arrowClass}>↠</span>
            <div className="experience-content">

              <ExperienceItem 
              jobtitle={langValue.lang ? frenchCopy.resume.oc2 : englishCopy.resume.oc2}
              date={langValue.lang ? frenchCopy.resume.oc2date : englishCopy.resume.oc2date}
              task1={langValue.lang ? frenchCopy.resume.oc2item1 : englishCopy.resume.oc2item1}
              task2={langValue.lang ? frenchCopy.resume.oc2item2 : englishCopy.resume.oc2item2}
              task3={langValue.lang ? frenchCopy.resume.oc2item3 : englishCopy.resume.oc2item3}
              company="OpenClassrooms"
              activeCompany={activeTab}
              />

              <ExperienceItem 
              jobtitle={langValue.lang ? frenchCopy.resume.oc1 : englishCopy.resume.oc1}
              date={langValue.lang ? frenchCopy.resume.oc1date : englishCopy.resume.oc1date}
              task1={langValue.lang ? frenchCopy.resume.oc1item1 : englishCopy.resume.oc1item1}
              task2={langValue.lang ? frenchCopy.resume.oc1item2 : englishCopy.resume.oc1item2}
              task3={langValue.lang ? frenchCopy.resume.oc1item3 : englishCopy.resume.oc1item3}
              company="OpenClassrooms"
              activeCompany={activeTab}
              />

              <ExperienceItem 
              jobtitle={langValue.lang ? frenchCopy.resume.drivy : englishCopy.resume.drivy}
              date={langValue.lang ? frenchCopy.resume.drivydate : englishCopy.resume.drivydate}
              task1={langValue.lang ? frenchCopy.resume.drivyitem1 : englishCopy.resume.drivyitem1}
              task2={langValue.lang ? frenchCopy.resume.drivyitem2 : englishCopy.resume.drivyitem2}
              task3={langValue.lang ? frenchCopy.resume.drivyitem3 : englishCopy.resume.drivyitem3}
              company="Drivy"
              activeCompany={activeTab}
              />

              <ExperienceItem 
              jobtitle={langValue.lang ? frenchCopy.resume.schibsted : englishCopy.resume.schibsted}
              date={langValue.lang ? frenchCopy.resume.schibsteddate : englishCopy.resume.schibsteddate}
              task1={langValue.lang ? frenchCopy.resume.schibsteditem1 : englishCopy.resume.schibsteditem1}
              task2={langValue.lang ? frenchCopy.resume.schibsteditem2 : englishCopy.resume.schibsteditem2}
              task3={langValue.lang ? frenchCopy.resume.schibsteditem3 : englishCopy.resume.schibsteditem3}
              company="Schibsted"
              activeCompany={activeTab}
              />

              <ExperienceItem 
              jobtitle={langValue.lang ? frenchCopy.resume.lbc : englishCopy.resume.lbc}
              date={langValue.lang ? frenchCopy.resume.lbcdate : englishCopy.resume.lbcdate}
              task1={langValue.lang ? frenchCopy.resume.lbcitem1 : englishCopy.resume.lbcitem1}
              task2={langValue.lang ? frenchCopy.resume.lbcitem2 : englishCopy.resume.lbcitem2}
              task3={langValue.lang ? frenchCopy.resume.lbcitem3 : englishCopy.resume.lbcitem3}
              company="Leboncoin"
              activeCompany={activeTab}
              />

            </div>
          </div>

        </section>

        {/* <div className="main-content">
          <p><u>{langValue.lang ? frenchCopy.home.about1 : englishCopy.home.about1}</u>{langValue.lang ? frenchCopy.home.about2 : englishCopy.home.about2}</p>
          <p>{langValue.lang ? frenchCopy.home.about3 : englishCopy.home.about3}<u>{langValue.lang ? frenchCopy.home.about4 : englishCopy.home.about4}</u>{langValue.lang ? frenchCopy.home.about5 : englishCopy.home.about5}</p>
          <p>{langValue.lang ? frenchCopy.home.about6 : englishCopy.home.about6}<u>{langValue.lang ? frenchCopy.home.about7 : englishCopy.home.about7}</u>{langValue.lang ? frenchCopy.home.about8 : englishCopy.home.about8}</p>
        </div> */}
    </>
  )
}
