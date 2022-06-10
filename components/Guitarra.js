import Image from "next/image"
import Link from "next/link"

const Guitarra = ({guitarra}) => {

    const {attributes} = guitarra
    const {nombre, descripcion, precio, url, imagen} = attributes
    const urlImagen = imagen.data.attributes.formats.thumbnail.url
  return (
    <div>
        <Image 
            layout='responsive' width={500} height={350} src={urlImagen} alt={`Imagen Guitarra ${nombre}`}
        />
        <div>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>${precio}</p>
            <Link href={`/guitarras/${url}`}>
                Ver Producto
            </Link>
        </div>
    </div>
  )
}

export default Guitarra
