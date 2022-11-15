import './Resume.css'

import OC from './oc.jpeg'
import Drivy from './drivy.jpeg'
import Schibsted from './schibsted.jpeg'
import LBC from './lbc.png'

import { useContext, useState } from 'react';

import LangContext from '../../LangContext';
import { frenchCopy } from '../../text/french'
import { englishCopy } from '../../text/english';

import { ResumeItem } from '../../Components/ResumeItem/ResumeItem';
import { Link } from 'react-router-dom'

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
    <a href="/resume#test">Test</a>
    <nav className="resume-nav">
            <ul>
                <li className="resume-nav-item resume-nav-experience resume-nav-item-active" id="resume-nav-experience" onClick={changeTab}>
                {langValue.lang ? frenchCopy.resume.experience : englishCopy.resume.experience} 
                    <div 
                    className={`underline-container ${underlineClass}`}
                    >
                        <div className="underline-bar"></div>
                    </div>
                </li>
                <li className="resume-nav-item resume-nav-training" id="resume-nav-training" onClick={changeTab}>
                {langValue.lang ? frenchCopy.resume.training : englishCopy.resume.training}
                </li>
                <li className="resume-nav-item resume-nav-skills" id="resume-nav-skills" onClick={changeTab}>
                {langValue.lang ? frenchCopy.resume.skills : englishCopy.resume.skills}
                </li>
            </ul>
    </nav>

    <section
    className={activeTab === "experience" ? "experience-container" : "experience-container experience-container-hidden"}>

        <ResumeItem 
        date={langValue.lang ? frenchCopy.resume.oc2date : englishCopy.resume.oc2date}
        jobtitle={langValue.lang ? frenchCopy.resume.oc2 : englishCopy.resume.oc2}
        task1={langValue.lang ? frenchCopy.resume.oc2item1 : englishCopy.resume.oc2item1}
        task2={langValue.lang ? frenchCopy.resume.oc2item2 : englishCopy.resume.oc2item2}
        task3={langValue.lang ? frenchCopy.resume.oc2item3 : englishCopy.resume.oc2item3}
        logo={OC}
        alt={"OpenClassrooms logo"}
        />

        <ResumeItem 
        date={langValue.lang ? frenchCopy.resume.oc1date : englishCopy.resume.oc1date}
        jobtitle={langValue.lang ? frenchCopy.resume.oc1 : englishCopy.resume.oc1}
        task1={langValue.lang ? frenchCopy.resume.oc1item1 : englishCopy.resume.oc1item1}
        task2={langValue.lang ? frenchCopy.resume.oc1item2 : englishCopy.resume.oc1item2}
        task3={langValue.lang ? frenchCopy.resume.oc1item3 : englishCopy.resume.oc1item3}
        logo={OC}
        alt={"OpenClassrooms logo"}
        />

        <ResumeItem 
        date={langValue.lang ? frenchCopy.resume.drivydate : englishCopy.resume.drivydate}
        jobtitle={langValue.lang ? frenchCopy.resume.drivy : englishCopy.resume.drivy}
        task1={langValue.lang ? frenchCopy.resume.drivyitem1 : englishCopy.resume.drivyitem1}
        task2={langValue.lang ? frenchCopy.resume.drivyitem2 : englishCopy.resume.drivyitem2}
        task3={langValue.lang ? frenchCopy.resume.drivyitem3 : englishCopy.resume.drivyitem3}
        logo={Drivy}
        alt={"Drivy logo"}
        />

        <ResumeItem 
        date={langValue.lang ? frenchCopy.resume.schibsteddate : englishCopy.resume.schibsteddate}
        jobtitle={langValue.lang ? frenchCopy.resume.schibsted : englishCopy.resume.schibsted}
        task1={langValue.lang ? frenchCopy.resume.schibsteditem1 : englishCopy.resume.schibsteditem1}
        task2={langValue.lang ? frenchCopy.resume.schibsteditem2 : englishCopy.resume.schibsteditem2}
        task3={langValue.lang ? frenchCopy.resume.schibsteditem3 : englishCopy.resume.schibsteditem3}
        logo={Schibsted}
        alt={"Schibsted logo"}
        />

        <ResumeItem 
        id="test"
        date={langValue.lang ? frenchCopy.resume.lbcdate : englishCopy.resume.lbcdate}
        jobtitle={langValue.lang ? frenchCopy.resume.lbc : englishCopy.resume.lbc}
        task1={langValue.lang ? frenchCopy.resume.lbcitem1 : englishCopy.resume.lbcitem1}
        task2={langValue.lang ? frenchCopy.resume.lbcitem2 : englishCopy.resume.lbcitem2}
        task3={langValue.lang ? frenchCopy.resume.lbcitem3 : englishCopy.resume.lbcitem3}
        logo={LBC}
        alt={"Leboncoin logo"}
        />

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
