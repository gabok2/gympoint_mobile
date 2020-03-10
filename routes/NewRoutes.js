import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import New from '../src/pages/New';
import Questions_answers from '../src/pages/Questions_answers';

import Ajuda from '../src/pages/Help';

const Stack = createStackNavigator();

export default function NewRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: false,
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerTintColor: '#111',
        headerStyle: {
          height: 55,
        },
      }}
      initialRouteName="Ajuda"
    >
      <>
        <Stack.Screen name="Check" component={Ajuda} />
        <Stack.Screen name="New" component={New} />
        <Stack.Screen name="Questions_answers" component={Questions_answers} />
      </>
    </Stack.Navigator>
  );
}
