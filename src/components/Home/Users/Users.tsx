import Heading from 'src/components/ui/Heading/Heading';
import Spinner from 'src/components/ui/Spinner/Spinner';
import { userAPI } from 'src/services/UserService';

import User from './user/User';

import styles from './Users.module.css';

const Users = () => {
  const { data: users, isLoading, error } = userAPI.useFetchAllUsersQuery('');

  return (
    <>
      <div className={styles.heading}>
        <Heading>Our users: {users && 'Uploaded!'}</Heading>

        {isLoading && <Spinner />}
      </div>
      <div data-testid="usersList" className={styles.usersList} id="users">
        {error && <h1>Something went wrong..</h1>}
        {users?.map((user) => <User name={user.name} />)}
      </div>
    </>
  );
};

export default Users;
