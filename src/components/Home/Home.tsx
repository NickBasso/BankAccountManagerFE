import { Box, Container, Select, Tab, Tabs } from '@mantine/core';
import { access } from 'fs';
import { useEffect, useState } from 'react';

const banksDummy = [
  { value: 'MICB', label: 'MICB' },
  { value: 'MAIB', label: 'MAIB' },
  { value: 'VICTORIABANK', label: 'VICTORIABANK' },
  { value: 'FINCOMBANK', label: 'FINCOMBANK' },
];

const accountsDummy = [
  { value: 'ACC1', label: 'ACC1' },
  { value: 'ACC2', label: 'ACC2' },
  { value: 'ACC3', label: 'ACC3' },
  { value: 'ACC4', label: 'ACC4' },
];

const cardsDummy = [
  { value: 'ACC-MASTERCARD', label: 'ACC-MASTERCARD' },
  { value: 'ACC-VISA', label: 'ACC-VISA' },
  { value: 'CREDIT-OVERDRAFT-MDL', label: 'CREDIT-OVERDRAFT-MDL' },
  { value: 'DEBIT-AMERICAN-EXPRESS', label: 'DEBIT-AMERICAN-EXPRESS' },
];

const transactionsDummy = [
  { value: 'TRANSACTION1', label: 'TRANSACTION1' },
  { value: 'TRANSACTION2', label: 'TRANSACTION2' },
  { value: 'TRANSACTION3', label: 'TRANSACTION3' },
  { value: 'TRANSACTION4', label: 'TRANSACTION4' },
];

const statementDummy = [
  { value: '21', label: 'AMOUNT1' },
  { value: '521', label: 'AMOUNT2' },
  { value: '55', label: 'AMOUNT3' },
  { value: '7332.12', label: 'AMOUNT4' },
];

export const Home = (): JSX.Element => {
  const [banks, setBanks] = useState(banksDummy);
  const [accounts, setAccounts] = useState(accountsDummy);
  const [cards, setCards] = useState(cardsDummy);
  const [transcations, setTranscations] = useState(transactionsDummy);
  const [statement, setStatement] = useState(statementDummy);

  return (
    <>
      <Box>
        <Container size={'xs'}>
          <Tabs>
            <Tab label="Banks">
              <Select label="Banks" placeholder="Pick one" data={banks} />
            </Tab>
            <Tab label="Accounts">
              <Select label="Accounts" placeholder="Pick one" data={accounts} />
            </Tab>
            <Tab label="Cards">
              <Select label="Cards" placeholder="Pick one" data={cards} />
            </Tab>
            <Tab label="Transactions">
              <Select
                label="Transactions"
                placeholder="Pick one"
                data={transcations}
              />
            </Tab>
            <Tab label="Statement">
              <Select
                label="Statement"
                placeholder="Pick one"
                data={statement}
              />
            </Tab>
          </Tabs>
        </Container>
      </Box>
    </>
  );
};
