import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';



const AuthStack = createStackNavigator();


function AuthStackNavigator() {
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignupScreen" component={SignupScreen}/>
      <AuthStack.Screen name="SigninScreen" component={SigninScreen}/>
    </AuthStack.Navigator>
  );
}



export default AuthStackNavigator;