import styles from './styles.module.css';
const Button = ({ title, onPressButton, btnStyle = 'primary', icon, type = 'default', link }) => {
  switch (type) {
    case 'link':
      return (
        <a href={link} className={[styles['general'], styles[btnStyle]].join(' ')}>
          {icon && <img src={icon} />}
          {title && title}
        </a>
      );
    default:
      return (
        <button onClick={onPressButton} className={[styles['general'], styles[btnStyle]].join(' ')}>
          {icon && <img src={icon} />}
          {title && title}
        </button>
      );
  }
};

export default Button;
