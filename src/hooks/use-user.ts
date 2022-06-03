import {useCallback, useContext, useEffect, useState} from 'react';
import {MyContext} from '../context/context';
import {userType} from '../types/user-type';

export default function useUser() {
  const {state} = useContext(MyContext);
  const [isUser, setUser] = useState<userType | null>();

  const getUsers = useCallback(async () => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        signal,
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
          'Content-type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(result => setUser(result));
    } catch (error) {
      console.log(error);
    }
    return () => controller.abort();
  }, [state.auth.token]);

  useEffect(() => {
    getUsers();
  }, [getUsers, state.updateUser]);

  return isUser;
}
