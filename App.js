import 'react-native-gesture-handler';
import React from 'react';
import './src/config/ReactotronConfig';

import FlashMessage from 'react-native-flash-message';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/store';
import Routes from './routes/routes';

// import { Container } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} />
      <Routes />
      <FlashMessage position="center" />
    </Provider>
  );
}
