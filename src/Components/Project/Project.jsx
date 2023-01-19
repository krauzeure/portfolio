import './Project.css'
import Github from './github.svg'
import ThemeContext from '../../ThemeContext';

import { useContext } from 'react';

export function Project(props) {

  const contextValue = useContext(ThemeContext);

  const openPopup = () => {
    props.popupFunc(true)
    props.showProject(props.title)
  }

  return (

    <article 
    className={ props.reversed ? "project-card project-card-reversed" : "project-card" }>
        <div 
        className="project-text">
          <div className="project-name-desc">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            {props.moreInfo ? <div onClick={openPopup}>Voir plus</div> : ""}
          </div>
          <div className="project-tags">
            <ul>
              {props.tags.map((item, index) => {
                return <li key={`${props.title} - ${index}`} className="project-tag">{item}</li>
              })}
              {props.link ? <a href={props.link} target="_blank" rel="noreferrer"><span 
              className={contextValue.theme ? "material-symbols-outlined" : "material-symbols-outlined material-symbols-outlined-inverted"}
              >open_in_new</span></a> : ""}
              {props.github ? <a href={props.github}><img 
              className={contextValue.theme ? "project-github" : "project-github project-github-inverted"}
              src={Github} 
              alt="github" /></a> : ""}
            </ul>
          </div>
        </div>
        <img src={props.img} alt="project illustration" />
    </article>
  )
}
