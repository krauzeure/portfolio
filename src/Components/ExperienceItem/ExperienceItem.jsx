import './ExperienceItem.css'

export function ExperienceItem(props) {
  return (
    <article 
    className={props.company === props.activeCompany ? "experience-content-item" : "experience-content-item experience-content-item-hidden"}
    >
        <div className="experience-item-tasks">
            <h1>{props.jobtitle}</h1>
            <h2>{props.date}</h2>
            <ul>
                <li className="experience-item-task">{props.task1}</li>
                <li className="experience-item-task">{props.task2}</li>
                <li className="experience-item-task">{props.task3}</li>
            </ul>
        </div>
        {/* <div className="experience-item-logo">
            <img src={props.logo} alt={props.alt}></img>
        </div> */}
    </article>
  )
}
