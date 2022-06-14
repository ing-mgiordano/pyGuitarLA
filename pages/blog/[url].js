import Image from "next/image"
import Link from "next/link"
import Layout from '../../components/Layout'
import { formatearFecha } from "../../helpers"
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {

    const {attributes} = entrada
    /* console.log(attributes) */
    const {titulo, contenido, publishedAt, imagen} = attributes
    const urlImagen = imagen.data.attributes.formats.thumbnail.url
  
    return (
        <Layout
            pagina={titulo}
        >
            <main className='contenedor'>
                <h1 className='heading'>{titulo}</h1>
                <article className={styles.entrada}>
                   <Image 
                        priority='true' layout='responsive' width={800} height={600} src={urlImagen} alt={`imagen blog ${titulo}`}
                    />

                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>

                    <Link href={`/blog`}>
                        <a className={styles.enlacevolver}>
                             Volver
                        </a>
                    </Link>
                </article>
            </main>
        </Layout>
    )
}
// no puedo usar getStaticPropos directamente si tengo routing dinamico
//necesito usar getStaticPaths (contruye los enlaces necesarios a cada blog)

export async function getStaticPaths() {

    const url = `${process.env.API_URL}/api/blogs?populate=imagen`
    const respuesta = await fetch(url)
    const resultEntradas = await respuesta.json()
    const entradas = resultEntradas.data
    /* console.log(nvaEntradas) */
    const paths = entradas.map(entrada => ({
        params: {url: entrada.attributes.url}
    }))
    /* console.log(paths) */

    return {
        paths,
        fallback: false  //puede ser true(si tienes muchas entradas), false(si tienes pocas) o 'blocking'(comportamiento similiar a getServerSideProps )
    }
}

export async function getStaticProps({params: {url}}) {

    /* console.log(url) */
    const urlBlog = `${process.env.API_URL}/api/blogs?populate=imagen&filters[url][$eq]=${url}`
    const respuesta = await fetch(urlBlog)
    const resultEntrada = await respuesta.json()
    const entrada = resultEntrada.data
    
    return {
      props:{
        entrada: entrada[0]
      }
    }
}

/* export async function getServerSideProps({query: {id}}) {

    console.log(id)
    const url = `${process.env.API_URL}/api/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json() 
    
    return {
      props:{
       entrada
      }
    }
} */

export default EntradaBlog
