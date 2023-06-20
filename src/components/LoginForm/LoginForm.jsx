import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/operations';
import { StyledForm, StyledLabel } from './LoginForm.styled';
import { Button, Input } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     logIn({
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Email
        <Input
          type="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </StyledLabel>
      <StyledLabel>
        Password
        <Input
          type="password"
          name="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </StyledLabel>
      <Button colorScheme="blue" type="submit">
        Log In
      </Button>
    </StyledForm>
  );
};
