import { Form } from 'components/Forms/Forms.styled';

export const Login = () => {
  return (
    <Form>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" required />

      <button type="submit">Log in</button>
    </Form>
  );
};
