import {useContext} from 'react';
import {MyContext} from '../context/context';
import {Types} from '../types/reducer-type';

const useAddItemPlaylists = () => {
  // https://api.spotify.com/v1/playlists/playlist_id/tracks
  const {state, dispatch} = useContext(MyContext);

  const addToPlaylists = async (
    selectSongs: string | undefined,
    id: string,
  ) => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      const url = `https://api.spotify.com/v1/playlists/${id}/tracks`;
      await fetch(url, {
        method: 'POST',
        signal,
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          uris: [selectSongs],
        }),
      })
        .then(res => res.json())
        .then(result =>
          dispatch({
            type: Types.SnapshotUpdate,
            payload: {
              snapshot_id: result,
            },
          }),
        );
    } catch (error) {
      console.log(error);
    }
    return () => controller.abort();
  };

  return {addToPlaylists};
};

export default useAddItemPlaylists;
