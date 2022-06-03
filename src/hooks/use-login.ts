import {useContext} from 'react';
import {authorize} from 'react-native-app-auth';
import {MyContext} from '../context/context';
import {Types} from '../types/reducer-type';

const authConfig = {
  clientId: 'facd2be1aa6c4a9c99089141bed15e30',
  // optional clien secret
  // clientSecret: 'client secret',
  redirectUrl: 'com.yourmusic://oauth/',
  scopes: ['playlist-modify-public', 'playlist-modify-private'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};

export default function useLogin() {
  // const {token, setToken} = useContext(AuthContext);
  const {state, dispatch} = useContext(MyContext);

  const authLogin = async () => {
    try {
      const result = await authorize(authConfig);

      // setToken(result.accessToken);
      dispatch({
        type: Types.Auth,
        payload: {
          token: result.accessToken,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    state,
    authLogin,
  };
}
