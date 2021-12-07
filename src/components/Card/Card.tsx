import { Center, Container, Image } from '@mantine/core';

export const Card = (props: any): JSX.Element => {
  console.log(props.image);

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
        <Image src={props.image}></Image>
      </Center>
    </Container>
  );
};
