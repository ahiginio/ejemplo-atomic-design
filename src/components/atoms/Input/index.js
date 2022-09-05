import styles from './styles.module.css';
const Input = ({
  type = 'text',
  inputStyle = 'default',
  onChangeValue,
  placeholder = 'Ingresa tu texto acá',
  icon,
  hasIcon = false,
  required = false,
  onPressIcon,
  name
}) => {
  return hasIcon ? (
    <div className={styles['containerStyle']}>
      <input
        type={type}
        required={required}
        className={styles[inputStyle]}
        onChange={onChangeValue}
        placeholder={placeholder}
        name={name}
      />
      <img src={icon} onClick={onPressIcon} />
    </div>
  ) : (
    <input
      type={type}
      required={required}
      className={styles[inputStyle]}
      onChange={onChangeValue}
      placeholder={placeholder}
      name={name}
    />
  );
};
export default Input;
