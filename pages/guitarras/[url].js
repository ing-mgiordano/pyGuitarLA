import Image from "next/image"
import Layout from "../../components/Layout"
import styles from "../../styles/Guitarra.module.css"

const Producto = ({nvaGuitarra}) => {

    const {attributes} = nvaGuitarra
    const {nombre, precio, descripcion, imagen} = attributes
    const urlImagen = imagen.data.attributes.url
    
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
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
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
