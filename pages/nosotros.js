import Image from "next/image";
import Layout from '../components/Layout'
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout
      pagina='Nosotros'
    >
      <main className='contenedor'>

        <h2 className='heading'>Nosotros</h2>

        <div className={styles.contenido}>

          <Image layout='responsive' priority width={600} height={450} src='/img/nosotros.jpg' alt='Imagen Nosotros'/>
          
          <div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris ultrices vel massa vel commodo. Vestibulum eu aliquet 
              nisl. Vestibulum a feugiat nisi, a cursus eros. Nulla et felis 
              at est porta fermentum. Proin efficitur dui vulputate libero 
              porttitor semper. Curabitur pulvinar enim ultrices posuere pretium. 
              Donec non turpis lorem. Sed dapibus tincidunt sapien, sit amet viverra 
              libero interdum in. Proin malesuada blandit justo non finibus. Sed sed 
              nibh et nulla efficitur porta vitae id sapien. Etiam mollis magna ac 
              lorem molestie ultrices vel vel nisl.
            </p>
            <p>
              Proin iaculis at velit sodales laoreet. Nunc gravida erat sit amet nibh dictum 
              malesuada. Phasellus lobortis dapibus eros, in placerat lorem blandit vel. Aenean 
              tempus augue eget tincidunt pharetra. Duis at justo sapien. Aliquam ut pharetra 
              turpis, eget semper nibh. Cras sodales fermentum facilisis. Sed sed lectus vitae 
              dolor placerat aliquet. Phasellus vel dignissim elit. Praesent in pellentesque 
              nisi, a dignissim sem. Vestibulum interdum enim sit amet magna convallis blandit. 
              Proin posuere velit pharetra, egestas mi nec, luctus lectus. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Quisque euismod blandit ligula, sit amet 
              convallis risus pharetra faucibus. Vestibulum varius porttitor ornare. Fusce vitae 
              mauris arcu.
            </p>
            
          </div>

        </div>

      </main>
    </Layout>
  )
}

export default Nosotros
