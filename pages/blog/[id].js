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

export default EntradaBlog
