import { Box, Container, Tab, Tabs } from '@mantine/core';

export const Home = (): JSX.Element => {
  return (
    <>
      <Box>
        <Container size={'xs'}>
          <Tabs>
            <Tab label="Gallery">Gallery tab content</Tab>
            <Tab label="Messages">Messages tab content</Tab>
            <Tab label="Settings">Settings tab content</Tab>
          </Tabs>
        </Container>
      </Box>
    </>
  );
};
