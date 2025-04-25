import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from 'src/components/Home/Counter/counterSlice';
import Button from 'src/components/ui/Button/Button';
import Heading from 'src/components/ui/Heading/Heading';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';

import styles from './Counter.module.css';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <section className={styles.wrapper}>
      <Heading>Counter: {count}</Heading>

      <div className={styles.btnWrapper}>
        <Button
          placeholder="Increment"
          onClick={() => dispatch(incrementCounter())}
        />
        <Button placeholder="Reset" onClick={() => dispatch(resetCounter())} />
        <Button
          placeholder="Decrement"
          onClick={() => dispatch(decrementCounter())}
        />
      </div>
    </section>
  );
};

export default Counter;
