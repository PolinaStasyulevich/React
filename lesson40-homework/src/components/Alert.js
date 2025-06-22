import styles from './Alert.module.scss';

function Alert({ type = 'info', text }) {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <div className={styles.content}>
        {type === 'warning' && <i className="fa-solid fa-triangle-exclamation"></i>}
        {type === 'error' && <i className="fa-solid fa-circle-xmark"></i>}
        {type === 'success' && <i className="fa-solid fa-circle-check"></i>}
        {type === 'info' && <i className="fa-solid fa-circle-info"></i>}
        {type === 'note' && <i className="fa-solid fa-bell"></i>}
        <span>{text}</span>
      </div>
      <i className="fa-regular fa-circle-xmark"></i>
    </div>
  );
}

export default Alert;
