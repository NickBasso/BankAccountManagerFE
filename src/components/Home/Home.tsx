import {
  Avatar,
  Box,
  Container,
  Group,
  Select,
  Tab,
  Tabs,
  Text,
} from '@mantine/core';
import { forwardRef, useState } from 'react';
import aecredit from '../../assets/icons/ae.svg';
import aedebit from '../../assets/icons/aecredit.svg';
import fcb from '../../assets/icons/fcb.png';
import maib from '../../assets/icons/maib.png';
import mastercard from '../../assets/icons/mastercard.svg';
import micb from '../../assets/icons/micb.jpg';
import vb from '../../assets/icons/vb.jpg';
import visa from '../../assets/icons/visa.svg';
import { Bank } from '../Bank/Bank';
import { Card } from '../Card/Card';
import { Transactions } from '../Transactions/Transactions';

const banksDummy = [
  {
    value: 'MICB',
    label: 'MICB',
    image: micb,
  },
  { value: 'MAIB', label: 'MAIB', image: maib },
  { value: 'VICTORIABANK', label: 'VICTORIABANK', image: vb },
  { value: 'FINCOMBANK', label: 'FINCOMBANK', image: fcb },
];

const accountsDummy = [
  { value: 'ACC1', label: 'ACC1' },
  { value: 'ACC2', label: 'ACC2' },
  { value: 'ACC3', label: 'ACC3' },
  { value: 'ACC4', label: 'ACC4' },
];

const cardsDummy = [
  { value: 'MASTERCARD', label: 'MASTERCARD' },
  { value: 'VISA', label: 'VISA' },
  { value: 'AECREDIT', label: 'AECREDIT' },
  { value: 'AEDEBIT', label: 'AEDEBIT' },
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

const cardImageMapping = {
  MASTERCARD: mastercard,
  VISA: visa,
  AEDEBIT: aedebit,
  AECREDIT: aecredit,
};

// !important: Forwarding ref is required
const BankAccountItem = forwardRef(
  ({ image, label, description, ...others }: any, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text>{label}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

export const Home = (): JSX.Element => {
  const [banks, setBanks] = useState(banksDummy);
  const [selectedBank, setSelectedBank] = useState('MICB');
  const [accounts, setAccounts] = useState(accountsDummy);
  const [cards, setCards] = useState(cardsDummy);
  const [selectedCard, setSelectedCard] = useState(mastercard);
  const [transcations, setTranscations] = useState(transactionsDummy);
  const [statement, setStatement] = useState(statementDummy);

  return (
    <>
      <Box>
        <Container size={'xs'}>
          <Tabs>
            <Tab label="Banks">
              <Select
                label="Banks"
                placeholder="Pick one"
                data={banks}
                itemComponent={BankAccountItem}
                onChange={(value) => {
                  setSelectedBank(value ?? 'MICB');
                }}
              />
              <Bank title={selectedBank} />
            </Tab>
            <Tab label="Accounts">
              <Select label="Accounts" placeholder="Pick one" data={accounts} />
            </Tab>
            <Tab label="Cards">
              <Select
                label="Cards"
                placeholder="Pick one"
                data={cards}
                onChange={(value: string) => {
                  console.log(value);

                  if (cardImageMapping.hasOwnProperty(value)) {
                    switch (value) {
                      case 'MASTERCARD':
                        setSelectedCard(cardImageMapping.MASTERCARD);
                        break;
                      case 'VISA':
                        setSelectedCard(cardImageMapping.VISA);
                        break;
                      case 'AEDEBIT':
                        setSelectedCard(cardImageMapping.AEDEBIT);
                        break;
                      case 'AECREDIT':
                        setSelectedCard(cardImageMapping.AECREDIT);
                        break;
                    }
                  }
                }}
              />
              <Card image={selectedCard} />
            </Tab>
            <Tab label="Transactions">
              <Select
                label="Transactions"
                placeholder="Pick one"
                data={transcations}
              />
              <Transactions />
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
