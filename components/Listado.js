import Guitarra from "./Guitarra"

const Listado = ({guitarras}) => {
    console.log(guitarras)
  return (
    <div>
        {guitarras.map( guitarra => (
            <Guitarra 
                key={guitarra.attributes.url}
                guitarra={guitarra}
            />
        ))}
    </div>
  )
}

export default Listado
