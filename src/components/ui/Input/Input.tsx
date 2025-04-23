import { ChangeEvent } from 'react';

import styles from './Input.module.css';

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  id: string;
  type: string;
  placeholder: string;
}

const Input = ({
  onChange,
  value,
  id,
  type = 'text',
  placeholder,
}: InputProps) => {
  return (
    <label className={styles.label} htmlFor={id}>
      {placeholder && <span>{placeholder}</span>}
      <input
        className={styles.input}
        onChange={onChange}
        value={value}
        type={type}
        id={id}
      />
    </label>
  );
};

export default Input;
