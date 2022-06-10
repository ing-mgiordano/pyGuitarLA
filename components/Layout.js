import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


const Layout = ({children, pagina}) => {
  return (
      
    <div>
      <Head> {/* contenido que van a tener todas las paginas en general */}
        <title>GuitarLA - {pagina}</title>
        <meta name='description' content='Sitio Web de venta de Guitarras'/>
        <link rel='icon' href='/img/header_guitarra.png' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <Header />
        
      {children}   {/* contenido de cada pagina en particular */}

      <Footer />
        
    </div>
  )
}

export default Layout
