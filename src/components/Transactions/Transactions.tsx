import { Center } from '@mantine/core';
import { RangeCalendar } from '@mantine/dates';
import dayjs from 'dayjs';
import React, { useState } from 'react';

export const Transactions = (props: any): JSX.Element => {
  const [value, setValue] = useState<[Date, Date]>([
    dayjs(new Date()).startOf('month').toDate(),
    dayjs(new Date()).startOf('month').add(4, 'days').toDate(),
  ]);

  return (
    <Center>
      <RangeCalendar value={value} onChange={setValue} />
    </Center>
  );
};
