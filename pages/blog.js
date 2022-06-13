import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'

const Blog = ({entradas}) => {
  
  /* console.log(entradas) */
  
  return (
    <Layout
      pagina='Blog'
    >
      <main className='contenedor'>
        <ListadoBlog
          entradas={entradas}
        />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {

  const url = `${process.env.API_URL}/api/blogs?populate=imagen`
  const respuesta = await fetch(url)
  const resEntradas = await respuesta.json()
  const entradas = resEntradas.data

  return {
    props:{
      entradas
    }
  }
}

export default Blog