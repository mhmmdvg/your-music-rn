import React, {useContext, useEffect} from 'react';
import {MyContext} from '../context/context';
// import {AuthContext} from '../context/auth-context';
import {NewReleaseType} from '../types/playlist';

const useRecommendPlaylists = () => {
  // const {token} = useContext(AuthContext);
  const {state} = useContext(MyContext);
  const [newRelease, setNewRelease] = React.useState<NewReleaseType[]>();
  const [browseCategories, setBrowseCategories] = React.useState<any[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      Promise.all([
        fetch('https://api.spotify.com/v1/browse/new-releases', {
          signal,
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(result => setNewRelease(result.albums.items)),
        fetch(
          'https://api.spotify.com/v1/browse/categories?country=ID&limit=20',
          {
            signal,
            headers: {
              Authorization: `Bearer ${state.auth.token}`,
              'Content-Type': 'application/json',
            },
          },
        )
          .then(res => res.json())
          .then(result => setBrowseCategories(result.categories.items)),
      ]);
    } catch (error) {
      console.error(error);
    }
    return () => controller.abort();
  }, [state.auth.token]);

  return {newRelease, browseCategories};
};
export default useRecommendPlaylists;
