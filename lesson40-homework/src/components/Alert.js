import styles from './Alert.module.scss';

function Alert({ type = 'info', text }) {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      {text}
    </div>
  );
}

export default Alert;
