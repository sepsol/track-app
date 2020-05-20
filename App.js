import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';


export default function App() {
  const isLoggedIn = false;
  return(
    <NavigationContainer>
      {!isLoggedIn 
        ? <AuthStackNavigator/> 
        : <BottomTabNavigator/>
      }
    </NavigationContainer>
  );
}