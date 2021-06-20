import React from 'react'
import ExternalLink from './ExternalLink'
import ButtonLink from './ButtonLink'


export default function HeroSection() {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="flex-container">
                    <div id="description">
                        <h1>ISLAIB vs CORONA</h1>
                        <h3>Free open-source Game</h3>
                        <p>ISLAIB vs Corona is a free, open-source game made by <ExternalLink text="AymKh" link="https://aymkh.tn/" />. This game is built on Unity with the use of <ExternalLink text="ProBuilder" link="https://unity3d.com/unity/features/worldbuilding/probuilder" />. Most of the models are made in <ExternalLink text="Blender" link="https://www.blender.org/" /> or downloaded from free marketplaces such as <ExternalLink text="opengamart.org" link="https://opengameart.org/" /></p>
                        <ButtonLink text="Play" link="https://aymkh.itch.io/islaibvscorona"/>
                    </div>
                    <div id="heroArt">
                        <img src="/images/heroImage.gif" alt="Hero section image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
