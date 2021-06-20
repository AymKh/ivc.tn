import React from 'react'

export default function ExternalLink({link, text}) {
    return (
        <label class="externalLink">
            <a href={link} target="_blank">
                {text}
                <span class="material-icons">call_made</span>
            </a>
        </label>
    )
}
