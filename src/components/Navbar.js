import React from 'react'
import ButtonLink from './ButtonLink'


export default function Navbar() {
    return (
        <header>
            <div className="container">
                <div className="brand">
                    <a href="/">
                        <img src="/images/Logo.png" alt="ivc logo" width="100" />
                        <h3>ISLAIBvsCorona</h3>
                    </a>
                </div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="https://www.youtube.com/playlist?list=PLZNJ8Qa5Vr1Vo_pKTLfkI6PWBmVrW8Jye" target="_blank">DevLogs ↗</a></li>
                        <li><a href="https://github.com/islaibvscorona/ivc-the-game/releases" target="_blank">Releases ↗</a></li>
                        <li><a href="#vt">Virtual-Tour</a></li>
                        <ButtonLink text="Play" link="https://aymkh.itch.io/islaibvscorona"/>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
