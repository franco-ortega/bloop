import styles from './LayoutInner.module.css';

const LayoutInner = ({ children }) => {
  return (
    <div className={styles.LayoutInner}>
      <h3>Oop</h3>
      <div>{children}</div>
    </div>
  )
}

export default LayoutInner;
