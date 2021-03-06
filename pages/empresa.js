import Head from 'next/head'

import Navbar from '../layout/navbar';
import Footer from '../layout/footer';

import { Typography } from '@material-ui/core';
import styles from '../styles/About.module.css'

export default function Home() {
  return (
    <div id={styles.body}>
      <Head>
        <title>Nosotros</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8"/>
        <meta name="author" content="DiosPlon" />
        <meta name="robots" content="index"/>
        <meta httpEquiv="expires" content="23200"/>
        <meta name="copyright" content="CannibalCommunity es dueña de esta patente y todo este diseño" />
        <meta name="description" content="Describimos las filosofias de nuestra empresa, junto con nuestro objetivo y nuestro modelo de negocio"/>
        <meta name="keywords" content="servicios, presentacion serviout, constructores eficientes, contratistas bogota, contratistas cundinamarca" />
      </Head>
      <Navbar/>

      <main className={styles.container}>
        <div className={styles.concepto}>
          <h5 className={styles.title}>
            Filosofia
          </h5>

          <p className={styles.parrafo}>
          Sabemos las necesidades y requerimientos que desean nuestros clientes, por esta razón nos enfocamos en tres pilares.<span className={styles.clave}>Calidad</span>, <span className={styles.clave}>Garantia</span> y <span className={styles.clave}>Compromiso</span>, Llegando así a el cumplimiento y elaboración de los servicios solicitados
          </p>
        
        </div>

        <div className={styles.info}>
          <div className={styles.data}>
            <h6 className={styles.title}>Mision</h6>
            <p className={styles.parrafo}>
            Somos una empresa dedicada a la prestación de servicios de construcción, telecomunicaciones, mudanzas para hogar y empresas; con un personal altamente calificado cumpliendo los requerimientos de nuestros clientes.
            </p>
          </div>
          <div className={styles.data}>
            <h6 className={styles.title}>Vision</h6>
            <p className={styles.parrafo}>
            Sabemos el compromiso que tenemos como empresa con nuestros clientes, por eso para el año 2025 contaremos con todas las normas ISO. las cuales nos certificaran en la calidad y elaboración de nuestros procesos
            </p>
          </div>
        </div>

        

      </main>
      <Footer />
      
    </div>
  )
}
