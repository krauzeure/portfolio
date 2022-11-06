import Cyrielle from './cyrielle.jpeg'
import France from './france.png'
import USA from './us.png'

import './Header.css'
import { frenchCopy } from '../../text/french'
import { englishCopy } from '../../text/english'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from '../../ThemeContext'
import LangContext from '../../LangContext'

export function Header() {

    const contextValue = useContext(ThemeContext);

    const toggleTheme = () => {
        contextValue.updateTheme(!contextValue.theme);
    }

    const langValue = useContext(LangContext);

    const toggleLang = () => {
        langValue.updateLang(!langValue.lang);
    }

  return (
    <header>
        <nav>
            <div className="nav-links">
            <Link to="/"><img src={Cyrielle} alt="cyrielle" className="profile-photo"/></Link>
            <ul>
                    <Link to="/">
                        <li className="nav-item fr">{langValue.lang ? frenchCopy.header.home : englishCopy.header.home}</li>
                    </Link>
                    <Link to="/resume">
                        <li className="nav-item fr">{langValue.lang ? frenchCopy.header.resume : englishCopy.header.resume}</li>
                    </Link>
                    <Link to="/projects">
                        <li className="nav-item fr">{langValue.lang ? frenchCopy.header.projects : englishCopy.header.projects}</li>
                    </Link>
                </ul>
            </div>
            <div className="nav-selectors">
                <div className="language-select nav-selector" onClick={toggleLang}>
                    <img src={langValue.lang ? USA : France} alt="language"/>
                </div>
                <div className="theme-select nav-selector" onClick={toggleTheme}>
                {contextValue.theme ? "🌙" : "☀️"}
                </div>
            </div>
        </nav>
    </header>
  )
}
