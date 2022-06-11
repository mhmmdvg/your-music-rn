import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddPlaylist from './add-playlist/AddPlaylist';
import {verticalAnimation} from '../utils/transition';
import AddSongs from './add-songs/AddSongs';
import SearchSongs from './search/Search-songs';

const Stack = createStackNavigator();

const ModalRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{presentation: 'transparentModal'}}>
      <Stack.Screen
        name="Add Playlist"
        component={AddPlaylist}
        options={verticalAnimation}
      />
      <Stack.Screen
        name="Add Songs"
        component={AddSongs}
        options={verticalAnimation}
      />
      <Stack.Screen
        name="Search Songs"
        component={SearchSongs}
        options={verticalAnimation}
      />
    </Stack.Navigator>
  );
};

export default ModalRoutes;
