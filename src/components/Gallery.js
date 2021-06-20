import React from 'react'

export default function Gallery() {
    return (
        <div id="preview-gallery">
                <div id="gallery-grid">
                    <iframe width="560" height="315" 
                            src="https://www.youtube.com/embed/43a0rV_uPxA?playlist=43a0rV_uPxA"
                            title="YouTube video player" 
                            frameborder="0" />

                    <iframe width="560" height="315" 
                            src="https://www.youtube.com/embed/9MUoF7TYBgo?playlist=9MUoF7TYBgoA"
                            title="YouTube video player" 
                            frameborder="0" />
                            
                    <iframe width="560" height="315" 
                            src="https://www.youtube.com/embed/c4sg1mlAXXI?playlist=c4sg1mlAXXI" 
                            title="YouTube video player" 
                            frameborder="0" />
                </div>
        </div>
    )
}
