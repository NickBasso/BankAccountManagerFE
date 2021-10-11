import { Button, Col, Grid, Group, Modal, PasswordInput } from '@mantine/core';
import { useState } from 'react';

export const Register = (): JSX.Element => {
  const [opened, setOpened] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [email, setEmail] = useState('');

  // const isEmailValid = false
  // const setIsEmailValid = function(state: boolean){isEmailInvalid = state}

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        <Grid grow gutter="xl" justify="center" align="space-between">
          <Col span={2}>
            {<PasswordInput label="FirstName"></PasswordInput>}
          </Col>
          <Col span={2}>
            {<PasswordInput label="FirstName"></PasswordInput>}
          </Col>
        </Grid>

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
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
};
