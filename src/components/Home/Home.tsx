import Layout from 'src/layout/Layout';

import Counter from './Counter/Counter';
import Form from './Form/Form';
import Posts from './Posts/Posts';
import Users from './Users/Users';

const Home = () => {
  return (
    <Layout>
      <Counter />
      <Form />
      <Posts />
      <Users />
    </Layout>
  );
};

export default Home;
