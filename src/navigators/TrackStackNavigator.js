import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TrackListScreen from '../screens/TrackListScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';



const TrackStack = createStackNavigator();


function TrackStackNavigator() {
  return(
    <TrackStack.Navigator>
      <TrackStack.Screen name="TrackListScreen" component={TrackListScreen}/>
      <TrackStack.Screen name="TrackDetailScreen" component={TrackDetailScreen}/>
    </TrackStack.Navigator>
  );
}



export default TrackStackNavigator;