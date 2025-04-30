import Heading from '../ui/Heading/Heading';

import Counter from './Counter/Counter';
import Form from './Form/Form';
import Posts from './Posts/Posts';

const Home = () => {
  return (
    <>
      <Heading>Redux toolkit practice</Heading>
      <Counter />
      <Form />
      <Posts />
    </>
  );
};

export default Home;
