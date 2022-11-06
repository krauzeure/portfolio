import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react';

import './index.css';

import { AppRoutes } from './Routes'
import { Header } from './Components/Header/Header';
import ThemeContext from './ThemeContext';
import LangContext from './LangContext';
import { SocialMedia } from './Components/SocialMedia/SocialMedia';
import { Footer } from './Components/Footer/Footer';

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
        <BrowserRouter>
        <ThemeContext.Provider value={contextValue}>
        <LangContext.Provider value={langValue}>
            <Header />
            <SocialMedia />
            <AppRoutes />
            <Footer />
        </LangContext.Provider>
        </ThemeContext.Provider>
        </BrowserRouter>
    </div>
  )
}
