import { Center, Container } from '@mantine/core';

export const Bank = (props: any): JSX.Element => {
  return (
    <Container
      size={'xs'}
      style={{
        borderRadius: '2px 2px 5px 5px',
        marginTop: '8px',
      }}
    >
      <Center>
        <h3>{props.title}</h3>
      </Center>
    </Container>
  );
};
