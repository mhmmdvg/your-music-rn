import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {horizontalAnimation, verticalAnimation} from './utils/transition';
import {MyTheme} from './utils/theme';
import Login from './screens/login/Login';
import useLogin from './hooks/use-login';
import BottomNav from './components/bottom-navigation/BottomNav';
import Searching from './screens/search/Searching';
import AddPlaylist from './components/add-playlist/AddPlaylist';

const Stack = createStackNavigator();

const Routes = () => {
  const {state} = useLogin();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={horizontalAnimation}>
        {state.auth.token === '' ? (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          <>
            <Stack.Group>
              <Stack.Screen name="Bottom Navigation" component={BottomNav} />
              <Stack.Screen
                name="Searching"
                component={Searching}
                options={verticalAnimation}
              />
            </Stack.Group>
            <Stack.Group
              screenOptions={{
                presentation: 'transparentModal',
              }}>
              <Stack.Screen
                name="Add Playlist"
                component={AddPlaylist}
                options={verticalAnimation}
              />
            </Stack.Group>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
