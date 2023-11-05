import html2canvas from "html2canvas"

const DownloadButton = () => {
    const descargar = (e) => {
        html2canvas(document.getElementById("exportar"), { useCORS: true }).then(function (canvas) {
            let img = canvas.toDataURL("memes/jpg")
            let link = document.createElement("a")
            link.download = "memespropio.jpg"
            link.href = img
            link.click()
        })
    }

    return (
        <button onClick={descargar} className="button2">Descargar</button>
    )
}

export default DownloadButton