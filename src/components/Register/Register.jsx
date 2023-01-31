import { Form } from 'components/Forms/Forms.styled';

export const Register = () => {
  return (
    <Form>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" required />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" required />

      <button type="submit">Register</button>
    </Form>
  );
};
