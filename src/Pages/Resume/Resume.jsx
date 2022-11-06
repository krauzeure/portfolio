import './Resume.css'

import OC from './oc.jpeg'

import { useContext } from 'react';

import LangContext from '../../LangContext';
import { frenchCopy } from '../../text/french'
import { englishCopy } from '../../text/english';

export function Resume() {

    const langValue = useContext(LangContext);

  return (
    <section className="resume-container">
        <article className="resume-item">
            <div className="resume-item-circle-container">
                <div className="resume-item-circle"></div>
            </div>
            <div>
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
    </section>
  )
}
