import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TrackStackNavigator from '../navigators/TrackStackNavigator';

import TrackCreateScreen from '../screens/TrackCreateScreen';
import AccountScreen from '../screens/AccountScreen';



const BottomTab = createBottomTabNavigator();


function BottomTabNavigator() {
  return(
    <BottomTab.Navigator>
      <BottomTab.Screen name="TrackStackNavigator" component={TrackStackNavigator}/>
      <BottomTab.Screen name="TrackCreateScreen" component={TrackCreateScreen}/>
      <BottomTab.Screen name="AccountScreen" component={AccountScreen}/>
    </BottomTab.Navigator>
  );
}



export default BottomTabNavigator;