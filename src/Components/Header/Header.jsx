import Logo from './Logo.png'
import LogoDark from './Logo-Dark.png'

import './Header.css'
import { frenchCopy } from '../../text/french'
import { englishCopy } from '../../text/english'

import { useContext, useState } from 'react'
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

    const [menuState, setMenuState] = useState(false);

    const updateMenu = () => {
        setMenuState(!menuState);
    }
    console.log(menuState)

  return (
    <header>
        <nav className="header-nav-container">
            <a href="/"><img 
            src={contextValue.theme ? Logo : LogoDark}
            alt="logo" 
            className="profile-photo"/></a>
            <div className={menuState ? "nav-all-links nav-burger-open" : "nav-all-links"}>
                <div className="nav-links">
                    <ul className="nav-anchors">
                        <a href="/#projects">
                            <li className="nav-item fr">{langValue.lang ? frenchCopy.header.projects : englishCopy.header.projects}</li>
                        </a>
                        <a href="/#experience">
                            <li className="nav-item fr">{langValue.lang ? frenchCopy.header.experience : englishCopy.header.experience}</li>
                        </a>
                        <a href="/#about">
                            <li className="nav-item fr">{langValue.lang ? frenchCopy.header.about : englishCopy.header.about}</li>
                        </a>
                        <a href="/#contact">
                            <li className="nav-item fr">Contact</li>
                        </a>
                    </ul>
                </div>
                <div className="nav-selectors">
                    <div className="language-select nav-selector" onClick={toggleLang}>
                        {langValue.lang ? frenchCopy.header.lang : englishCopy.header.lang}
                    </div>
                    <div className="theme-select nav-selector" onClick={toggleTheme}>
                    {contextValue.theme ? "🌙" : "☀️"}
                    </div>
                </div>
            </div>
            <div className="nav-burger" onClick={updateMenu}>
                <div className="nav-burger-line nav-burger-one"></div>
                <div className="nav-burger-line nav-burger-two"></div>
                <div className="nav-burger-line nav-burger-three"></div>
            </div>
        </nav>
    </header>
  )
}
