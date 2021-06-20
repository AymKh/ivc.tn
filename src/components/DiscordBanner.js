import React from 'react'
import ExternalLink from './ExternalLink'

export default function DiscordBanner() {
    return (
        <div id="discord-banner">
            <div className="container">
                <h1>JOIN THE COMMUNITY ON</h1>
                <ExternalLink text="DISCORD" link="https://discord.gg/XAVvKjmzHV" />
            </div>
        </div>
    )
}
