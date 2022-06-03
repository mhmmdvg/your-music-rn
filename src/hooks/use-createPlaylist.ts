import {NavigationContext} from '@react-navigation/native';
import {useContext} from 'react';
import {MyContext} from '../context/context';
import {Types} from '../types/reducer-type';
import useUser from './use-user';

const useCreatePlaylist = () => {
  const navigation = useContext(NavigationContext);
  const {state, dispatch} = useContext(MyContext);
  const isUser = useUser();

  const createPlaylist = async () => {
    try {
      Promise.all([
        fetch(`https://api.spotify.com/v1/users/${isUser?.id}/playlists`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: state.inputCreatePlaylist.value,
            description: 'New playlist description',
            public: true,
          }),
        })
          .then(res => res.json())
          .then(result => result),
        fetch('https://api.spotify.com/v1/me/playlists', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(result =>
            dispatch({
              type: Types.UpdatePlaylists,
              payload: result.items,
            }),
          ),
      ]);
      navigation?.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return {createPlaylist};
};

export default useCreatePlaylist;
