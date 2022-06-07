import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import Header from './Header'
import Footer from './Footer'


const Layout = ({children, pagina}) => {
  return (
      
    <div>
      <Head> {/* contenido que van a tener todas las paginas en general */}
        <title>GuitarLA - {pagina}</title>
        <meta name='description' content='Sitio Web de venta de Guitarras'/>
        <link rel='icon' href='/img/header_guitarra.png' />
      </Head>

      <Header />
        
      {children}   {/* contenido de cada pagina en particular */}

      <Footer />
        
    </div>
  )
}

export default Layout
