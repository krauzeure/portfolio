import './ResumeItem.css'

export function ResumeItem(props) {
  return (
    <article className="resume-item" id={props.id}>
        <div className="resume-item-circle-container">
            <div className="resume-item-circle"></div>
        </div>
        <div className="resume-item-tasks">
            <h1>{props.jobtitle}</h1>
            <h2>{props.date}</h2>
            <ul>
                <li className="resume-item-task">{props.task1}</li>
                <li className="resume-item-task">{props.task2}</li>
                <li className="resume-item-task">{props.task3}</li>
            </ul>
        </div>
        <div className="resume-item-logo">
            <img src={props.logo} alt={props.alt}></img>
        </div>
    </article>
  )
}
