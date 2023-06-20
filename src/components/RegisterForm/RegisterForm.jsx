import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { StyledForm, StyledLabel } from './RegisterForm.styled';
import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Username
        <Input type="text" name="name" onChange={handleNameChange} />
      </StyledLabel>
      <StyledLabel>
        Email
        <Input type="email" name="email" onChange={handleEmailChange} />
      </StyledLabel>
      <StyledLabel>
        Password
        <Input
          type="password"
          name="password"
          onChange={handlePasswordChange}
        />
      </StyledLabel>
      <Button colorScheme="blue" type="submit">
        Register
      </Button>
    </StyledForm>
  );
};
