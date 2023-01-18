import React from 'react'

import Github from './github.svg'
import LinkedIn from './linkedin.svg'

import './SocialMedia.css'

import { useContext } from 'react'

import ThemeContext from '../../ThemeContext'

export function SocialMedia() {

  const contextValue = useContext(ThemeContext);

  return (
    <div className="social-media-container">
        <a href="https://github.com/krauzeure" target="_blank" rel="noreferrer">
          <img src={Github} alt="github"
          className={contextValue.theme ? "social-media-logo" : "social-media-logo social-media-logo-inverted"}/>
        </a>
        <a href="https://www.linkedin.com/in/cyrielle-chasles/" target="_blank" rel="noreferrer">
          <img src={LinkedIn} alt="linkedin"
          className={contextValue.theme ? "social-media-logo" : "social-media-logo social-media-logo-inverted"}/>
        </a>
    </div>
  )
}
