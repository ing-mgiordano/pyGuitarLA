

const Curso = ({curso}) => {

    const {attributes} = curso
    const {titulo, contenido, imagen} = attributes
    const urlImagen = imagen.data.attributes.url

    return (
        <section>
            <div className='contenedor'>
                <div>
                    <h2>{titulo}</h2>
                    <p>{contenido}</p>

                    <a href='#'>Mas Información</a>
                </div>
            </div>
        </section>
    )
}

export default Curso
