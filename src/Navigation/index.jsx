import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Features/Login';
import SignUp from '../Features/Signup';
import Home from '../Features/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default Navigation;