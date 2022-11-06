import './Resume.css'

import OC from './oc.jpeg'

import { useContext, useState } from 'react';

import LangContext from '../../LangContext';
import { frenchCopy } from '../../text/french'
import { englishCopy } from '../../text/english';

export function Resume() {

    const langValue = useContext(LangContext);
    const [activeTab, setActiveTab] = useState("experience");

    const changeTab = (e) => {
        setActiveTab(e.target.id.split("-")[2]);
    }

    let underlineClass = "";
    if(activeTab === "experience") {
        underlineClass = "underline-container-experience";
    } else if (activeTab === "training") {
        underlineClass = "underline-container-training";
    } else if (activeTab === "skills") {
        underlineClass = "underline-container-skills";
    }

    console.log(activeTab);

  return (
    <>
    <nav className="resume-nav">
            <ul>
                <li className="resume-nav-item resume-nav-experience resume-nav-item-active" id="resume-nav-experience" onClick={changeTab}>Expérience 
                    <div 
                    className={`underline-container ${underlineClass}`}
                    >
                        <div className="underline-bar"></div>
                    </div>
                </li>
                <li className="resume-nav-item resume-nav-training" id="resume-nav-training" onClick={changeTab}>Formation</li>
                <li className="resume-nav-item resume-nav-skills" id="resume-nav-skills" onClick={changeTab}>Skills</li>
            </ul>
    </nav>

    <section
    className={activeTab === "experience" ? "experience-container" : "experience-container experience-container-hidden"}>

        <article className="resume-item">
            <div className="resume-item-circle-container">
                <div className="resume-item-circle"></div>
            </div>
            <div className="resume-item-tasks">
                <h1>Knowledge Management Specialist @OpenClassrooms</h1>
                <ul>
                    <li className="resume-item-task">{langValue.lang ? frenchCopy.resume.job1item1 : englishCopy.resume.job1item1}</li>
                    <li className="resume-item-task">{langValue.lang ? frenchCopy.resume.job1item2 : englishCopy.resume.job1item2}</li>
                    <li className="resume-item-task">{langValue.lang ? frenchCopy.resume.job1item3 : englishCopy.resume.job1item3}</li>
                </ul>
            </div>
            <div className="resume-item-logo">
                <img src={OC} alt="OpenClassrooms logo"></img>
            </div>
        </article>

        <article className="resume-item">
            <div className="resume-item-circle-container">
                <div className="resume-item-circle"></div>
            </div>
            <div className="resume-item-tasks">
                <h1>Mentor & Coach Support Manager</h1>
                <ul>
                    <li className="resume-item-task">{langValue.lang ? frenchCopy.resume.job2item1 : englishCopy.resume.job2item1}</li>
                    <li className="resume-item-task">{langValue.lang ? frenchCopy.resume.job2item2 : englishCopy.resume.job2item2}</li>
                    <li className="resume-item-task">{langValue.lang ? frenchCopy.resume.job2item3 : englishCopy.resume.job2item3}</li>
                </ul>
            </div>
            <div className="resume-item-logo">
                <img src={OC} alt="OpenClassrooms logo"></img>
            </div>
        </article>
    </section>

    <section
    className={activeTab === "training" ? "training-container" : "training-container training-container-hidden"}>
        training
    </section>

    <section 
    className={activeTab === "skills" ? "skills-container" : "skills-container skills-container-hidden"}>
        skills
    </section>

    </>
  )
}
