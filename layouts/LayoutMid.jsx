import styles from './LayoutMid.module.css';

const LayoutMid = ({children}) => {
  return (
    <div className={styles.LayoutMid}>
      <h2>Loop</h2>
      <div>{children}</div>
    </div>
  )
}

export default LayoutMid