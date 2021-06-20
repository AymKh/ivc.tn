import React from 'react'
import ButtonLink from "./ButtonLink"
import Gallery from './Gallery'

export default function VirtualTour() {
    return (
        <div id="vt">
            <div className="container">
                <p>A Virtual tour inside the Higher Institute of Applied Languages and Computer Science of Beja.Done using Blender & Unity 3D. Explore every corner of ISLAIB without having to physically be there.</p>
                <ButtonLink text="Take a walk" link="https://aymkh.itch.io/islaib-virtual-tour"/>
                <Gallery />
            </div>
        </div>
    )
}
