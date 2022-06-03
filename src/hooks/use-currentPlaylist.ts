import React, {useCallback, useContext, useEffect} from 'react';
import {MyContext} from '../context/context';
// import {AuthContext} from '../context/auth-context';
import {CurrentPlaylist} from '../types/playlist';

const useCurrentPlaylist = () => {
  const {state} = useContext(MyContext);
  const [currentPlaylist, setCurrentPlaylist] =
    React.useState<CurrentPlaylist[]>();

  const getCurrentPlaylists = useCallback(async () => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      const response = await fetch('https://api.spotify.com/v1/me/playlists', {
        signal,
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setCurrentPlaylist([...data.items]);
    } catch (error) {
      console.log(error);
    }
    return () => controller.abort();
  }, [state.auth.token]);

  useEffect(() => {
    getCurrentPlaylists();
  }, [getCurrentPlaylists, state.updatePlaylists]);

  return currentPlaylist;
};
export default useCurrentPlaylist;
