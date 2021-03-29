import Head from 'next/head'
import React, {useState} from "react"
import styles from '../styles/Home.module.css'

export default function Home() {
  const [ans, setAns] = useState()
  const handleClick = () => setAns(Math.random()>=0.5 ? "sim" : "não")

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Posso perguntar isso em aula?
        </h1>

        <p className={styles.buttons}>{
          <button onClick={handleClick}>a resposta é {ans}</button>
        }
        </p>
        <h1>{ans}</h1>
      </main>
    </div>
  )
}
