import React from 'react'

import Github from './github.png'
import LinkedIn from './linkedin.png'
import Medium from './medium.png'

import './SocialMedia.css'

export function SocialMedia() {
  return (
    <div class="social-media-container">
        <img src={Github} alt="github"/>
        <img src={LinkedIn} alt="linkedin"/>
        <img src={Medium} alt="medium"/>
    </div>
  )
}
