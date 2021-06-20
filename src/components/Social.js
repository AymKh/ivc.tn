import React from 'react'

export default function Social({name, link}) {
    return (
        <a href={link} target="_blank">
            <i class={`fab fa-${name}`}></i>
            <p id="tooltip">{name}</p>
        </a>
    )
}
