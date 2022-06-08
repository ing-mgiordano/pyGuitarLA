import Layout from '../components/Layout'
import Entrada from '../components/Entrada'
import styles from "../styles/Blog.module.css"

const Blog = ({entradas}) => {
  const nvaEntrada = entradas.data
  /* console.log(nvaEntrada) */
  
  return (
    <Layout
      pagina='Blog'
    >
      <main className='contenedor'>
        <h2 className='heading'>Blog</h2>

        <div className={styles.blog}>
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

  const url = `${process.env.API_URL}/api/blogs`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json() 

  return {
    props:{
      entradas
    }
  }
}

export default Blog