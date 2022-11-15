import React from 'react';
import { useState } from 'react';

import './index.css';

import { Header } from './Components/Header/Header';
import ThemeContext from './ThemeContext';
import LangContext from './LangContext';
import { SocialMedia } from './Components/SocialMedia/SocialMedia';
import { Footer } from './Components/Footer/Footer';
import { Home } from '../src/Pages/Home/Home'

export function App() {

    const [theme, setTheme] = useState(true);
    const [lang, setLang] = useState(true);

    const contextValue = {
        theme: theme,
        updateTheme: setTheme
    }

    const langValue = {
        lang: lang,
        updateLang: setLang
    }

  return (
    <div className={theme ? "light-theme main-container" : "dark-theme main-container"}>
        <ThemeContext.Provider value={contextValue}>
        <LangContext.Provider value={langValue}>
            <Header />
            <SocialMedia />
            <main>
                <Home />
            </main>
            <Footer />
        </LangContext.Provider>
        </ThemeContext.Provider>
    </div>
  )
}
