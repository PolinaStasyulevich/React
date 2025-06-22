import styles from './Input.module.scss';

function Input({ label, placeholder, value, onChange, disabled, error }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input
        className={`${styles.input} ${error ? styles.error : ''}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
}

export default Input;
