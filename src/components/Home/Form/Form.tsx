import Button from 'src/components/ui/Button/Button';
import Heading from 'src/components/ui/Heading/Heading';
import Input from 'src/components/ui/Input/Input';
import Textarea from 'src/components/ui/Textarea/Textarea';
import {
  handleBodyChange,
  handleResetForm,
  handleTitleChange,
  handleUserIdChange,
} from 'src/redux/features/form/formSlice';
import { addPost } from 'src/redux/features/posts/postsSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';

import styles from './Form.module.css';

const Form = () => {
  const title = useAppSelector((state) => state.form.title);
  const body = useAppSelector((state) => state.form.body);
  const userId = useAppSelector((state) => state.form.userId);

  const dispatch = useAppDispatch();

  return (
    <section className={styles.wrapper}>
      <Heading>Add your post</Heading>
      <form className={styles.form}>
        <Input
          onChange={(e) => dispatch(handleUserIdChange(e.target.value))}
          placeholder="Your id: "
          value={userId}
          type="number"
          id="userId"
        />
        <Input
          onChange={(e) => dispatch(handleTitleChange(e.target.value))}
          placeholder="Title of your post: "
          value={title}
          type="text"
          id="title"
        />
        <Textarea
          onChange={(e) => dispatch(handleBodyChange(e.target.value))}
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
