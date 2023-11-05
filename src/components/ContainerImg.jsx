import React from 'react'

const ContainerImg = ({ meme, top, left, fontSize, width, textoMeme }) => {
    return (
        <div id="exportar" className="containerImg mb-4">
            {meme && (
                <>
                    <img className="w-100 h-100" src={meme.url} alt={meme.name} />
                    <h2
                        style={{
                            top: `${top}%`,
                            left: `${left}%`,
                            fontSize: `${fontSize}px`,
                            width: `${width}px`
                        }}
                    >
                        {textoMeme}
                    </h2>
                </>
            )}
        </div>
    )
}

export default ContainerImg