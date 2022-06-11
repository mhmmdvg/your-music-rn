import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DetailPlaylists from './detail-playlists/DetailPlaylists';
import Home from './home/Home';
import Searching from './search/Searching';
import {horizontalAnimation, verticalAnimation} from '../utils/transition';
import Search from './search/Search-base';
import Profile from './profile/Profile';

export const HomeRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Detail Playlists"
        component={DetailPlaylists}
        options={horizontalAnimation}
      />
    </Stack.Navigator>
  );
};

export const SearchRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search Base" component={Search} />
      <Stack.Screen
        name="Searching"
        component={Searching}
        options={verticalAnimation}
      />
    </Stack.Navigator>
  );
};

export const ProfileRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="Playlists User"
        component={DetailPlaylists}
        options={horizontalAnimation}
      />
    </Stack.Navigator>
  );
};
