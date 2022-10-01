import Head from 'next/head';
import styles from './LayoutOuter.module.css'

const LayoutOuter = ({ children }) => {
  return (
    <div className={styles.LayoutOuter}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header><h1>Bloop</h1></header>
      <main>{children}</main>
    </div>
  )
}

export default LayoutOuter;
