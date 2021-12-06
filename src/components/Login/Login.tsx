import {
  Box,
  Button,
  Center,
  Col,
  Container,
  Grid,
  PasswordInput,
} from '@mantine/core';

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const usersDummy = [
  {
    email: 'john.doe@gmail.com',
    password: '123',
  },
  {
    email: 'peter.smithson@gmail.com',
    password: '321',
  },
];

export const Login = (): JSX.Element => {
  const [users, setUsers] = useState(usersDummy);
  const [opened, setOpened] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  useEffect(() => {
    console.log('Component did mount!');
    console.log('email: ', email);
    console.log('password: ', password);
  }, [email, password]);

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
            console.log('email changed!');

            // setIsEmailValid(event.currentTarget.value !== email);
            setEmail(event.currentTarget.value);
          }}
        ></PasswordInput>

        <PasswordInput
          type="password"
          label="Password"
          required={true}
          onChange={(event) => {
            console.log('email changed!');

            // setIsEmailValid(event.currentTarget.value !== email);
            setPassword(event.currentTarget.value);
          }}
        ></PasswordInput>

        <Center style={{ height: 100 }}>
          <Button
            onClick={() => {
              console.log('Button clicked!');

              for (const user of users) {
                if (user.email === email && user.password === password) {
                  // route to home and consider logged in
                  history.push('/');
                }
              }
            }}
          >
            Submit
          </Button>
        </Center>
      </Container>
    </>
  );
};
