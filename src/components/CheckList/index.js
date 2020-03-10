/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Time, Name } from './styles';

// eslint-disable-next-line react/prop-types
export default function CheckList({ data, index }) {
  const dateParsed = useMemo(() => {
    // eslint-disable-next-line react/prop-types
    return formatRelative(parseISO(data.createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
    // eslint-disable-next-line react/prop-types
  }, [data.createdAt]);

  return (
    <Container>
      <Name>Check-in #{index + 1}</Name>
      <Time>{dateParsed}</Time>
    </Container>
  );
}
