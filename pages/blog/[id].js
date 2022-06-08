const EntradaBlog = ({entrada}) => {

  return (
    <div>
        <h1>DEsde blog</h1>
    </div>
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
