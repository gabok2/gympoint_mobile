/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import CheckList from '../../components/CheckList';

import { Container, SubmitButton, Background, Checks } from './styles';

import api from '../../services/api';
import Logo from '../../components/Header';

export default function Check() {
  const id = useSelector(state => state.auth.profile.id);

  const [check, setCheck] = useState([]);

  async function checkins() {
    const response = await api.get(`students/${id}/checkins`);

    setCheck(response.data);
  }

  useEffect(() => {
    checkins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit() {
    try {
      await api.post(`students/${id}/checkins`);
      Alert.alert('Succeso', 'Checkin feito com sucesso');

      checkins();
    } catch (err) {
      Alert.alert('Limite de Checks', 'Não pode fazer mais checkins');
    }
  }
  console.log(handleSubmit);
  console.log(SubmitButton);

  return (
    <Container>
      <Logo />
      <SubmitButton title="Check-ins" onPress={handleSubmit}>
        Novo check-in
      </SubmitButton>
      <Checks
        data={check}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => (
          <Background>
            <CheckList index={index} data={item} />
          </Background>
        )}
      />
    </Container>
  );
}
