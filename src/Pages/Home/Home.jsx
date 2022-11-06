import './Home.css'

import { Link } from 'react-router-dom'

export function Home() {
  return (
    <main class="main-about">
        <section class="main-description">
            <h1><span className="main-description-hello">👋</span> J'me présente, je m'appelle Cyrielle</h1>
            <p>Dev Front, Project Manager, Amatrice de problèmes à résoudre.</p>
        </section>

        <div className="home-buttons">
          <Link class="home-cta resume-cta" to="/resume">Voir mon CV</Link>
          <Link class="home-cta projects-cta" to="/projects">Voir mes projets</Link>
        </div>

        <div class="main-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ipsum officia atque incidunt, molestias eos nam sit beatae earum molestiae rem optio et nemo repellendus distinctio accusantium aliquam quos ipsa.
            Error amet eaque consequuntur, maxime, tenetur optio nesciunt atque et ullam iusto eligendi inventore excepturi, reprehenderit quasi libero ea in velit laudantium ratione modi! Eum minima quo consectetur unde sit!
            Accusantium excepturi commodi voluptatem labore eligendi, laboriosam maxime mollitia accusamus praesentium. Mollitia, quam eum? Corporis vero tenetur, itaque est praesentium nulla sed exercitationem aperiam necessitatibus beatae fugiat fugit! Fuga, quo?
            Officiis saepe quam reprehenderit non perspiciatis placeat? Aut, temporibus aperiam. In quod veniam aliquid, ipsam assumenda consequuntur impedit. Hic in inventore voluptate placeat dicta veniam neque id quia ipsum facere!
            Iure explicabo quam enim nostrum distinctio quidem delectus perspiciatis aliquid quos ab quaerat ut dolore sint illum, porro error debitis minima temporibus deleniti culpa animi ipsum fugit maxime? 
        </div>
    </main>
  )
}
