import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'


export default function Home({guitarras, curso, entradas}) {


  /* console.log(entradas) */
  return (
    <Layout
      pagina='Inicio'
      guitarra={guitarras[3]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>

        <Listado 
          guitarras={guitarras}
        />
      </main>

      <Curso 
        curso = {curso}
      />

      <section className='contenedor'>
        <ListadoBlog
          entradas={entradas}
        />
      </section>

    </Layout>
  )
}


//si tengo varias URL para consultar se usa promise.all para que se ejecuten en paralelo
export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/api/guitarras?populate=imagen`
  const urlCursos = `${process.env.API_URL}/api/curso?populate=imagen`
  const urlBlog = `${process.env.API_URL}/api/blogs?populate=imagen&pagination[limit]=3`
  
  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])

  const [resultGuitarras, resultCursos, resultBlog] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()
  ])
  
  const guitarras = resultGuitarras.data
  const curso = resultCursos.data
  const entradas = resultBlog.data
  
  

  /* console.log(guitarras) */

  return {
    props: {
      guitarras,
      curso,
      entradas
    }
  }
}