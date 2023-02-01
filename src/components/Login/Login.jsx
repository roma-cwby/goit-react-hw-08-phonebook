import { Form } from 'components/Forms/Forms.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" required />

      <button type="submit">Log in</button>
    </Form>
  );
};
