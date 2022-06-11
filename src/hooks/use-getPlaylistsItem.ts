import {useCallback, useContext, useState} from 'react';
import {MyContext} from '../context/context';
import {PlaylistsItem} from '../types/playlist';

// https://api.spotify.com/v1/playlists/playlist_id/tracks
const useGetPlaylistsItem = () => {
  const {state} = useContext(MyContext);
  const [playlist, setPlaylist] = useState<PlaylistsItem[]>();

  const getPlaylistsItem = useCallback(
    async (id: string) => {
      const controller = new AbortController();
      const signal = controller.signal;
      try {
        const url = `https://api.spotify.com/v1/playlists/${id}/tracks`;
        await fetch(url, {
          method: 'GET',
          signal,
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
            'Content-type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(result => setPlaylist(result.items));
      } catch (error) {
        console.log(error);
      }
      return () => controller.abort();
    },
    [state.auth.token],
  );

  return {playlist, getPlaylistsItem};
};

export default useGetPlaylistsItem;
