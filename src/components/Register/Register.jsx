import { Form } from 'components/Forms/Forms.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        placeholder="Name"
      />

      <input type="email" name="email" required placeholder="Email" />

      <input type="password" name="password" required placeholder="Password" />

      <button type="submit">Register</button>
    </Form>
  );
};
