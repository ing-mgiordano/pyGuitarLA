import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'


export default function Home({guitarras, curso}) {


  console.log(curso)
  return (
    <Layout
      pagina='Inicio'
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

    </Layout>
  )
}


//si tengo varias URL para consultar se usa promise.all para que se ejecuten en paralelo
export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/api/guitarras?populate=imagen`
  const urlCursos = `${process.env.API_URL}/api/curso?populate=imagen`
  
  const [resGuitarras, resCursos] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos)
  ])

  const [resultGuitarras, resultCursos] = await Promise.all([
    resGuitarras.json(),
    resCursos.json()
  ])
  
  const guitarras = resultGuitarras.data
  const curso = resultCursos.data
  
  

  /* console.log(guitarras) */

  return {
    props: {
      guitarras,
      curso
    }
  }
}