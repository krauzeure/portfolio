import './Home.css'

import Cyrielle from './cyrielle.png'
import P5 from './P5.png'
import P7 from './P7.jpeg'
import P3 from './P3.jpg'

import { useContext, useState } from 'react';

import LangContext from '../../LangContext';
import { frenchCopy } from '../../text/french'
import { englishCopy } from '../../text/english';
import { Project } from '../../Components/Project/Project';
import { ExperienceItem } from '../../Components/ExperienceItem/ExperienceItem';

export function Home() {

  const langValue = useContext(LangContext);
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
            <p>{langValue.lang ? frenchCopy.home.desc : englishCopy.home.desc}</p>
        </section>

        <section className="projects main-section" id="projects">
          <h2>{langValue.lang ? frenchCopy.mainheader.projects : englishCopy.mainheader.projects}</h2>
          <div className="section-top-border"></div>
            <Project 
            title={"Kanap"} 
            text={langValue.lang ? frenchCopy.projects.kanap : englishCopy.projects.kanap} 
            img={P5} 
            tags={["Javascript", "API", "localStorage"]}
            />

            <Project 
            title={"Kasa"} 
            text={langValue.lang ? frenchCopy.projects.kasa : englishCopy.projects.kasa} 
            reversed={true} 
            img={P7} 
            tags={["React", "CSS", "Github pages"]} 
            link={"https://krauzeure.github.io/dwP7"}
            github={"https://github.com/krauzeure/dwP7"}
            />

            <Project 
            title={"Ohmyfood!"} 
            text={langValue.lang ? frenchCopy.projects.ohmyfood : englishCopy.projects.ohmyfood} 
            img={P3} 
            tags={["SASS", "HTML", "Animation"]} 
            link={"https://krauzeure.github.io/dwP3/"}
            github={"https://github.com/krauzeure/dwP3"}
            />
        </section>

        <section className="experience main-section" id="experience">
        <h2>{langValue.lang ? frenchCopy.mainheader.experience : englishCopy.mainheader.experience}</h2>
          <div className="section-top-border"></div>

          <div className="experience-container">
            <div className="experience-selector">
              <ul>
                <li className="experience-item" onClick={changeSelector}>OpenClassrooms</li>
                <li className="experience-item" onClick={changeSelector}>Drivy</li>
                <li className="experience-item" onClick={changeSelector}>Schibsted</li>
                <li className="experience-item" onClick={changeSelector}>Leboncoin</li>
              </ul>
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
          <a href="/">
                <div className="resume-download button">
                  {/* <img 
                  src={ThemeValue.theme ? Download : DownloadDark}
                  alt={langValue.lang ? "Télécharger CV" : "Download resume"} 
                  /> */}
                  {langValue.lang ? frenchCopy.resume.download : englishCopy.resume.download} 
                </div>
              </a>
        </section>

        <section className="about main-section" id="about">
          <h2>{langValue.lang ? frenchCopy.mainheader.about : englishCopy.mainheader.about}</h2>
          <div className="section-top-border"></div>

          <div className="about-container">
            <div className="about-content">
                <p>
                  <u>{langValue.lang ? frenchCopy.home.about1 : englishCopy.home.about1}</u>
                  {langValue.lang ? frenchCopy.home.about2 : englishCopy.home.about2}
                </p>
                <p>
                  {langValue.lang ? frenchCopy.home.about3 : englishCopy.home.about3}
                  <u>{langValue.lang ? frenchCopy.home.about4 : englishCopy.home.about4}</u>
                  {langValue.lang ? frenchCopy.home.about5 : englishCopy.home.about5}
                </p>
                <p>
                  {langValue.lang ? frenchCopy.home.about6 : englishCopy.home.about6}
                  <u>{langValue.lang ? frenchCopy.home.about7 : englishCopy.home.about7}</u>
                  {langValue.lang ? frenchCopy.home.about8 : englishCopy.home.about8}
                </p>
            </div>
            <div className="about-photo">
              <div className="about-photo-background"></div>
              <img src={Cyrielle} alt="Cyrielle" />
            </div>
          </div>
        </section>

        <section className="contact main-section" id="contact">
          <h2>{langValue.lang ? frenchCopy.mainheader.contact : englishCopy.mainheader.contact}</h2>
          <div className="section-top-border"></div>
            <p>{langValue.lang ? frenchCopy.home.contact : englishCopy.home.contact}</p>
            <a href="mailto:cyrielle.chasles@gmail.com">
                <div className="contact-cta button">
                  {langValue.lang ? frenchCopy.home.contactcta : englishCopy.home.contactcta} 
                </div>
            </a>
        </section>
    </>
  )
}
