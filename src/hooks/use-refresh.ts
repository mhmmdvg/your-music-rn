import React, {useContext, useState} from 'react';
import {MyContext} from '../context/context';
import {Types} from '../types/reducer-type';

const useRefresh = () => {
  const {state, dispatch} = useContext(MyContext);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      Promise.all([
        fetch('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(result => {
            dispatch({
              type: Types.UpdatePlaylists,
              payload: result.items,
            });
            setRefreshing(false);
          }),
        fetch('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(result => {
            dispatch({
              type: Types.UpdateUser,
              payload: result,
            });
            setRefreshing(false);
          }),
      ]);
    } catch (error) {
      console.error(error);
      setRefreshing(false);
    }
  }, [state.auth.token, dispatch]);

  return {refreshing, onRefresh};
};

export default useRefresh;
