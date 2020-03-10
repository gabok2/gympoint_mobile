import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import { Container, Input, SubmitButton } from './styles';
import Logo from '../../components/Header';
import api from '../../services/api';

export default function New({ navigation }) {
  const id = useSelector(state => state.auth.profile.id);
  const [help, setHelp] = useState('');

  async function handleSubmit() {
    const response = await api.post(`/students/${id}/help-orders`, {
      question: help,
    });

    navigation.goBack();

    Alert.alert('Pergunta enviada', 'Responderemos em breve :)');

    setHelp(response.data);
  }

  return (
    <Container>
      <Logo />

      <Input
        placeholderTextColor="#8f8f8f"
        returnKeyType="send"
        placeholder="Inclua seu pedido de auxílio"
        value={String.help}
        onChangeText={setHelp}
      />
      <SubmitButton title="Check-ins" onPress={handleSubmit}>
        Enviar pedido
      </SubmitButton>
    </Container>
  );
}
