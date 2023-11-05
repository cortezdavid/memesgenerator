import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import Buttons from './components/Buttons';
import ContainerImg from './components/ContainerImg';
import TextForm from './components/TextForm';

const App = () => {

  const [memes, setMemes] = useState([])
  const [meme, setMeme] = useState(null)
  const [textoMeme, setTextoMeme] = useState("")
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [fontSize, setFontSize] = useState(50)
  const [width, setWidth] = useState(300)

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(resp => resp.json())
      .then(data => {
        setMemes(data.data.memes)
        const indice = Math.floor(Math.random() * data.data.memes.length);
        setMeme(data.data.memes[indice]);
      })
  }, [])

  const cambiarMeme = () => {
    const indice = Math.floor(Math.random() * memes.length)
    setMeme(memes[indice])
    setTextoMeme("")
    Reiniciar()
  }

  const agregarTexto = () => {
    const nuevoTexto = document.createElement("h2");
    nuevoTexto.innerText = textoMeme;
    nuevoTexto.style.top = `${top}%`;
    nuevoTexto.style.left = `${left}%`;
    nuevoTexto.style.fontSize = `${fontSize}px`;
    nuevoTexto.style.width = `${width}px`;
    nuevoTexto.classList.add("eliminar")

    const contenedorExportar = document.getElementById("exportar");
    contenedorExportar.appendChild(nuevoTexto);

    setTextoMeme("")
    setTop(0)
    setLeft(0)
  };

  const Reiniciar = () => {
    const nodosH2 = [...document.querySelectorAll(".eliminar")]
    nodosH2.map(hdos => hdos.remove());
  }

  return (
    <>
      <h1 className="text-center">Generador de memes</h1>
      <div className="d-flex flex-wrap container">
        <div className="d-flex flex-column justify-content-center align-items-center col-xl-6 col-12">
          <ContainerImg meme={meme} top={top} left={left} fontSize={fontSize} width={width} textoMeme={textoMeme} />
          <Buttons cambiarMeme={cambiarMeme} Reiniciar={Reiniciar} />
        </div>
        <TextForm textoMeme={textoMeme} agregarTexto={agregarTexto} setTextoMeme={setTextoMeme} setLeft={setLeft} setTop={setTop} setFontSize={setFontSize} setWidth={setWidth} />
      </div>
    </>
  )
}

export default App
