import './Home.css'

import { useContext } from 'react';
import { Link } from 'react-router-dom'

import LangContext from '../../LangContext';
import { frenchCopy } from '../../text/french'
import { englishCopy } from '../../text/english';

export function Home() {

  const langValue = useContext(LangContext);

  return (
    <main class="main-about">
        <section class="main-description">
            <h1 
            className={langValue.lang ? "anim-typewriter-fr" : "anim-typewriter-en"}>
              <span className="main-description-hello">👋</span> {langValue.lang ? frenchCopy.home.heading : englishCopy.home.heading}</h1>
            <p>{langValue.lang ? frenchCopy.home.subheading : englishCopy.home.subheading}</p>
        </section>

        <div className="home-buttons">
          <Link class="home-cta resume-cta primary-cta" to="/projects">→ {langValue.lang ? frenchCopy.home.primarycta : englishCopy.home.primarycta}</Link>
          <Link class="home-cta projects-cta secondary-cta" to="/resume">→ {langValue.lang ? frenchCopy.home.secondarycta : englishCopy.home.secondarycta}</Link>
        </div>

        <div class="main-content">
          <p><u>{langValue.lang ? frenchCopy.home.about1 : englishCopy.home.about1}</u>{langValue.lang ? frenchCopy.home.about2 : englishCopy.home.about2}</p>
          <p>{langValue.lang ? frenchCopy.home.about3 : englishCopy.home.about3}<u>{langValue.lang ? frenchCopy.home.about4 : englishCopy.home.about4}</u>{langValue.lang ? frenchCopy.home.about5 : englishCopy.home.about5}</p>
          <p>{langValue.lang ? frenchCopy.home.about6 : englishCopy.home.about6}<u>{langValue.lang ? frenchCopy.home.about7 : englishCopy.home.about7}</u>{langValue.lang ? frenchCopy.home.about8 : englishCopy.home.about8}</p>
        </div>
    </main>
  )
}
