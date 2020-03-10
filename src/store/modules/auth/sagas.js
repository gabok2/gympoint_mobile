import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;
    // Criar rota get students
    const response = yield call(api.get, `students/${id}`);

    console.tron.log(response.data);

    const user = response.data;

    yield put(signInSuccess(user));
  } catch (err) {
    Alert.alert(
      'Id não encontrado',
      'O id inserido não pertence a nenhum usuário'
    );
    yield put(signInFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
