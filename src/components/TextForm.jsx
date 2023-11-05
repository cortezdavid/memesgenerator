import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const TextForm = ({ textoMeme, agregarTexto, setTextoMeme, setLeft, setTop, setFontSize, setWidth }) => {
    return (
        <div className="col-xl-6 col-12">
            <div className='p-5 mt-4 formBg'>
                <InputGroup className="mb-3">
                    <Form.Control
                        onChange={e => setTextoMeme(e.target.value)}
                        value={textoMeme}
                        type="text"
                        placeholder="Ponga una frase"
                        name="text"
                    />
                </InputGroup>
                <Form.Label htmlFor="Horizontal">Horizontal</Form.Label>
                <Form.Range id="Horizontal" defaultValue={0} onChange={e => setLeft(e.target.value)} />
                <Form.Label htmlFor="Vertical">Vertical</Form.Label>
                <Form.Range id="Vertical" defaultValue={0} onChange={e => setTop(e.target.value)} />
                <Form.Label htmlFor="tamanio">Tamaño del texto</Form.Label>
                <Form.Range id="tamanio" defaultValue={50} min={20} max={80} onChange={e => setFontSize(e.target.value)} />
                <Form.Label htmlFor="containerText">Contenedor de texto</Form.Label>
                <Form.Range id="containerText" defaultValue={300} min={0} max={500} onChange={e => setWidth(e.target.value)} />
                <button onClick={agregarTexto} className='button2'>Agregar texto</button>
            </div>

        </div>
    )
}

export default TextForm