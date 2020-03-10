import React from 'react';
import PropTypes from 'prop-types';
import { useRoute } from '@react-navigation/native';

import {
  Container,
  Title,
  Pergunta,
  Resposta,
  Container2,
  Time,
} from './styles';
import Logo from '../../components/Header';
import Question from '../../components/Question';

export default function Questions_answers() {
  const route = useRoute();
  const { item } = route.params;
  return (
    <Container>
      <Logo />

      <Container2>
        <Time>
          <Title>Pergunta</Title>
          <Question data={item} />
        </Time>

        <Pergunta> {item.question}</Pergunta>
        <Title>Resposta</Title>
        <Resposta> {item.answer}</Resposta>
      </Container2>
    </Container>
  );
}

Questions_answers.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
