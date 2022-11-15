import './Project.css'

export function Project(props) {
  return (
    <article 
    className={ props.reversed ? "project-card project-card-reversed" : "project-card"}
    >
        <div className="project-text">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <div className="project-tags">
            <ul>
                <li className="project-tag">Javascript</li>
                <li className="project-tag">API</li>
                <li className="project-tag">Panier</li>
            </ul>
        </div>
        </div>
        <img src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
    </article>
  )
}
