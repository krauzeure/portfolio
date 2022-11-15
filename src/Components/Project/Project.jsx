import './Project.css'

export function Project(props) {

  return (
    <article 
    className={ props.reversed ? "project-card project-card-reversed" : "project-card" }
    >
        <div className="project-text">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <div className="project-tags">
            <ul>
              {props.tags.map((item, index) => {
                return <li key={`${props.title} - ${index}`} className="project-tag">{item}</li>
              })}
            </ul>
        </div>
        </div>
        <img src={props.img} alt="project illustration" />
    </article>
  )
}
