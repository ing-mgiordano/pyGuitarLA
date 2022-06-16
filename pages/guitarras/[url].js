import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/Layout"
import styles from "../../styles/Guitarra.module.css"

const Producto = ({nvaGuitarra, agregarCarrito}) => {

    const [cantidad, setCantidad] = useState(1)

    const {attributes, id} = nvaGuitarra
    const {nombre, precio, descripcion, imagen} = attributes
    const urlImagen = imagen.data.attributes.url

    const handleSubmit = e => {
        e.preventDefault()

        if(cantidad < 1) {
            alert('Cantidad no valida') 
            return
        }

        const guitarraSeleccionada = {
            id,
            urlImagen,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(guitarraSeleccionada)
    }
    
  return (
    <Layout
        pagina={`Guitarra ${nombre}`}
    >
        <div className={styles.guitarra}>
            <Image 
                priority='true' layout='responsive' width={180} height={350} src={urlImagen} alt={`Imagen Guitarra ${nombre}`}
            />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion2}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>

                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <label>Cantidad:</label>

                    <select
                        value={cantidad}
                        onChange={e => setCantidad(parseInt(e.target.value))}
                    >
                        <option value='0'>-- Seleccione --</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                    </select>

                    <input
                        type='submit' 
                        value='Agregar al Carrito'
                    />
                </form>
                <Link href={`/tienda`}>
                    <a className={styles.enlacevolver}>
                        {"<"}
                    </a>
                </Link>
            </div>
        </div>
    </Layout> 
  )
}

export async function getServerSideProps({query: {url}}) {
    const urlGuitarra = `${process.env.API_URL}/api/guitarras?populate=imagen&filters[url][$eq]=${url}`
    const respuesta = await fetch(urlGuitarra)
    const resultado = await respuesta.json()
    const nvaGuitarra = resultado.data

    /* console.log(guitarra) */
    return {
        props: {
            nvaGuitarra: nvaGuitarra[0]
        }
    }
}

export default Producto
