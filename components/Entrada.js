
const Entrada = ({nvaEntrada}) => {
    const {id, attributes} = nvaEntrada
    const {titulo, resumen, contenido} = attributes
  return (
    <article>
        <h1>{id}</h1>
        <h1>{titulo}</h1>
        <p>{resumen}</p>
    </article>
  )
}

export default Entrada
