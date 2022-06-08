import Image from "next/image"
import Layout from '../../components/Layout'
import { formatearFecha } from "../../helpers"
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {

    const nvaEntrada = entrada.data
    const {attributes} = nvaEntrada
    /* console.log(attributes) */
   
    const {titulo, contenido, publishedAt} = attributes
  
    return (
        <Layout>
            <main className='contenedor'>
                <h1 className='heading'>{titulo}</h1>
                <article className={styles.entrada}>
                   {/* <Image 
                        priority='true' layout='responsive' width={800} height={600} src='https://res.cloudinary.com/coloscloud/image/upload/v1654618551/blog_3_c07e85472c.jpg' alt={`imagen blog ${titulo}`}
                    /> */}

                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}
// no puedo usar getStaticPropos directamente si tengo routing dinamico
//necesito usar getStaticPaths (contruye los enlaces necesarios a cada blog)

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/api/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    const nvaEntradas = entradas.data
    /* console.log(nvaEntradas) */
    

    const paths = nvaEntradas.map(entrada => ({
        params: {id: entrada.id.toString()}
    }))
    /* console.log(paths) */

    return {
        paths,
        fallback: false  //puede ser true(si tienes muchas entradas), false(si tienes pocas) o 'blocking'(comportamiento similiar a getServerSideProps )
    }
}

export async function getStaticProps({params: {id}}) {

    console.log(id)
    const url = `${process.env.API_URL}/api/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json() 
    
    return {
      props:{
       entrada
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
