import styles from './LayoutOuter.module.css'

const LayoutOuter = ({ children }) => {
  return (
    <div className={styles.LayoutOuter}>
      <header><h1>Bloop</h1></header>
      <main>{children}</main>
    </div>
  )
}

export default LayoutOuter;
