/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';
import logo from '../../assets/logo.png';
import { Container, FormInput, SubmitButton, Imagem } from './styles';

export default function Signin() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const loading = useSelector(state => state.auth.loading);
  async function handleSubmit({ id }) {
    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <Imagem source={logo} />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormInput
          KeyboardType="nudmber-pad"
          returnKeyType="send"
          name="id"
          type="mumber"
          placeholder="Informe seu ID de cadastro"
        />
        <SubmitButton
          loading={loading}
          title="Sign in"
          onPress={() => formRef.current.submitForm()}
        >
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
