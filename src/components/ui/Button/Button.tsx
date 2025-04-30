import styles from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  placeholder: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ onClick, placeholder, type = 'submit' }: ButtonProps) => {
  return (
    <button className={styles.btn} onClick={onClick} type={type}>
      {placeholder}
    </button>
  );
};

export default Button;
