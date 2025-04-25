import { ChangeEvent } from 'react';

import styles from './Textarea.module.css';

interface TextareaProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  id: string;
  placeholder: string;
}

const Textarea = ({ onChange, value, id, placeholder }: TextareaProps) => {
  return (
    <label className={styles.label} htmlFor={id}>
      {placeholder && <span>{placeholder}</span>}
      <textarea
        className={styles.textarea}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        id={id}
      />
    </label>
  );
};

export default Textarea;
