import Link from "next/link"
import Image from "next/image"
import { formatearFecha } from "../helpers"
import styles from "../styles/Entrada.module.css"

const Entrada = ({nvaEntrada}) => {
    const {id, attributes} = nvaEntrada
    const {titulo, resumen, publishedAt} = attributes
  return (
    <article>

      {/* <Image 
        priority='true' layout='responsive' width={800} height={600} src='https://res.cloudinary.com/coloscloud/image/upload/v1654618551/blog_3_c07e85472c.jpg' alt={`imagen blog ${titulo}`}
      /> */}

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${id}`}>
          <a className={styles.enlace}>
            Leer Entrada
          </a>
        </Link>
      </div>
    </article>
  )
}

export default Entrada
