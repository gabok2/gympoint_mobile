import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { setNavigator } from '../src/services/navigation';

import Signin from '../src/pages/Signin';

import Ajuda from './NewRoutes';
import Checks from '../src/pages/Check';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);
  return (
    <NavigationContainer ref={setNavigator}>
      {signed ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // eslint-disable-next-line react/prop-types
            tabBarIcon: ({ focused, color }) => {
              let iconName;

              if (route.name === 'Check-ins') {
                iconName = focused ? 'edit-location' : 'edit-location';
              } else if (route.name === 'Pedir ajuda') {
                iconName = focused ? 'live-help' : 'live-help';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} size={25} color={color} />;
            },
          })}
          tabBarOptions={{
            keyboardHidesTabBar: true,
            inactiveTintColor: 'rgba(255,255,255,0.6)',
            activeTintColor: '#fff',
            style: {
              backgroundColor: '#ee4e62',
              borderTopWidth: 0,
            },
          }}
        >
          <>
            <Tab.Screen name="Check-ins" component={Checks} />
            <Tab.Screen name="Pedir ajuda" component={Ajuda} />
          </>
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <>
            <Stack.Screen
              options={{
                title: false,
                headerBackTitleVisible: false,
                headerTransparent: true,
              }}
              name="Signin"
              component={Signin}
            />
          </>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
