import {
  handleFormChange,
  handleResetForm,
} from 'src/components/Home/Form/formSlice';
import { addPost } from 'src/components/Home/Posts/postsSlice';
import Button from 'src/components/ui/Button/Button';
import Heading from 'src/components/ui/Heading/Heading';
import Input from 'src/components/ui/Input/Input';
import Textarea from 'src/components/ui/Textarea/Textarea';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';

import styles from './Form.module.css';

const Form = () => {
  const { title, body, userId } = useAppSelector((state) => state.form);

  const dispatch = useAppDispatch();

  return (
    <section className={styles.wrapper}>
      <Heading>Add your post</Heading>
      <form className={styles.form}>
        <Input
          onChange={(e) =>
            dispatch(handleFormChange({ key: 'userId', value: e.target.value }))
          }
          placeholder="Your id: "
          value={userId}
          type="number"
          id="userId"
        />
        <Input
          onChange={(e) =>
            dispatch(handleFormChange({ key: 'title', value: e.target.value }))
          }
          placeholder="Title of your post: "
          value={title}
          type="text"
          id="title"
        />
        <Textarea
          onChange={(e) =>
            dispatch(handleFormChange({ key: 'body', value: e.target.value }))
          }
          placeholder="Content of your post: "
          value={body}
          id="body"
        />

        <Button
          placeholder="Add post"
          type="button"
          onClick={() => {
            dispatch(handleResetForm());
            dispatch(addPost({ title, body, userId }));
          }}
        />
      </form>
    </section>
  );
};

export default Form;
