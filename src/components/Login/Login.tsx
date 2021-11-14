import {
  Box,
  Button,
  Center,
  Col,
  Container,
  Grid,
  PasswordInput,
} from '@mantine/core';

import { useState } from 'react';

export const Login = (): JSX.Element => {
  const [opened, setOpened] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <>
      <Container
        size={'xs'}
        style={{ backgroundColor: 'rgb(248, 249, 250)', borderRadius: '5px' }}
      >
        <Center style={{ height: 100 }}>
          <h2>Login</h2>
        </Center>

        <PasswordInput
          invalid={true}
          error={email}
          type="email"
          label="Email"
          required={true}
          style={{ padding: '20px 0' }}
          onChange={(event) => {
            setIsEmailValid(event.currentTarget.value !== email);
            setEmail(event.currentTarget.value);
          }}
        ></PasswordInput>

        <PasswordInput
          type="password"
          label="Password"
          required={true}
        ></PasswordInput>

        <Center style={{ height: 100 }}>
          <Button>Submit</Button>
        </Center>
      </Container>
    </>
  );
};
