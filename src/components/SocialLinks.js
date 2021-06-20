import React from 'react'
import Social from './Social'

export default function SocialLinks() {
    return (
        <div id="socialLinks">
            <div className="container">
                <h3>Follow IVC on</h3>
                <div id="links">
                    <Social name="facebook" link="facebook.com"/>
                    <Social name="instagram" link="facebook.com"/>
                    <Social name="youtube" link="facebook.com"/>
                    <Social name="itch-io" link="facebook.com"/>
                </div>
        </div>
        </div>
    )
}
