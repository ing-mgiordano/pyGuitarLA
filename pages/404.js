import Link from "next/link"
import Layout from '../components/Layout'
import styles from "../styles/NoEncontrado.module.css"

const NoEncontrado = () => {
  return (
    <Layout>
        <div className={styles.noEncontrado}>
            <h1 className='heading'>Página no encontrada</h1>
        
            <Link href='/'>
                <a className={styles.enlace}>
                    Volver al incio
                </a>
            </Link>
        </div>
    </Layout>
  )
}

export default NoEncontrado
