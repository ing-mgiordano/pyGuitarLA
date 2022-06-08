import { useRouter } from 'next/router'

const EntradaBlog = () => {

    const router = useRouter()
    console.log(router.query)

  return (
    <div>
        <h1>DEsde blog</h1>
    </div>
  )
}

export async function getServerSideProps({query: {id}}) {

    console.log(id)
    const url = `http://localhost:1337/api/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json() 
    console.log(entrada)
    return {
      props:{
       
      }
    }
  }

export default EntradaBlog
