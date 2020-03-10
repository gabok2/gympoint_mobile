import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import HelpList from '../../components/HelpList';

import {
  Container,
  SubmitButton,
  Pergunta,
  Container2,
  Txt,
  Icoins,
  Row,
  List,
  Grupamento,
} from './styles';
import api from '../../services/api';
import Logo from '../../components/Header';

export default function Help({ navigation }) {
  const id = useSelector(state => state.auth.profile.id);

  const [help, setHelp] = useState([]);

  async function helps() {
    const response = await api.get(`/students/${id}/help-orders`);

    setHelp(response.data);
  }

  useEffect(() => {
    helps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Logo />
      <SubmitButton
        title="Check-ins"
        onPress={() => navigation.navigate('New')}
      >
        Novo Pedido de auxílio
      </SubmitButton>
      <List
        data={help}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          // eslint-disable-next-line react/prop-types

          <Container2
            disabled={!item.answer_at}
            onPress={() => navigation.navigate('Questions_answers', { item })}
          >
            <Row>
              <Grupamento>
                <Icoins res={item.answer} name="check-circle" size={20} />
                <Txt res={item.answer}>
                  {item.answer ? 'Respondido' : 'Sem resposta'}
                </Txt>
              </Grupamento>

              <HelpList data={item} />
            </Row>
            <Pergunta numberOfLines={2}>{item.question}</Pergunta>
          </Container2>
        )}
      />
    </Container>
  );
}

Help.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
