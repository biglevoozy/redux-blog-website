import Button from 'src/components/ui/Button/Button';
import Heading from 'src/components/ui/Heading/Heading';
import {
  decrement,
  increment,
  reset,
} from 'src/redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';

import styles from './Counter.module.css';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <section className={styles.wrapper}>
      <Heading>Counter: {count}</Heading>

      <div className={styles.btnWrapper}>
        <Button placeholder="Increment" onClick={() => dispatch(increment())} />
        <Button placeholder="Reset" onClick={() => dispatch(reset())} />
        <Button placeholder="Decrement" onClick={() => dispatch(decrement())} />
      </div>
    </section>
  );
};

export default Counter;
