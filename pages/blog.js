import Layout from '../components/Layout'
import Entrada from '../components/Entrada'

const Blog = ({entradas}) => {
  const nvaEntrada = entradas.data
  
  return (
    <Layout
      pagina='Blog'
    >
      <main className='contenedor'>
        <h2 className='heading'>Blog</h2>

        <div>
          {nvaEntrada.map((entrada) => (
            <Entrada 
              key={entrada.id}
              nvaEntrada={entrada}
            />
          ))}
        </div>
      </main>
        
    </Layout>

  )
}

export async function getStaticProps() {

  const url = 'http://localhost:1337/api/blogs'
  const respuesta = await fetch(url)
  const entradas = await respuesta.json() 

  return {
    props:{
      entradas
    }
  }
}

export default Blog