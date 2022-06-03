import React, {createContext, FC, useReducer} from 'react';
import {
  AuthActions,
  authReducer,
  InputCreatePlaylistActions,
  inputCreatePlaylistReducer,
  UpdatePlaylistsActions,
  updatePlaylistsReducer,
  UpdateUserActions,
  updateUserReducer,
} from '../reducers/reducers';
import {InitialState} from '../types/context-type';

const contextInitialState: InitialState = {
  auth: {
    token: '',
  },
  updateUser: {
    id: '',
    images: [
      {
        url: '',
      },
    ],
    display_name: '',
    followers: {
      total: 0,
    },
  },
  inputCreatePlaylist: {
    value: '',
  },
  updatePlaylists: [],
};

const MyContext = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<
    | AuthActions
    | UpdateUserActions
    | InputCreatePlaylistActions
    | UpdatePlaylistsActions
  >;
}>({
  state: contextInitialState,
  dispatch: () => {},
});

const mainReducer = (
  {auth, updateUser, inputCreatePlaylist, updatePlaylists}: InitialState,
  action: any,
) => ({
  auth: authReducer(auth, action),
  updateUser: updateUserReducer(updateUser, action),
  inputCreatePlaylist: inputCreatePlaylistReducer(inputCreatePlaylist, action),
  updatePlaylists: updatePlaylistsReducer(updatePlaylists, action),
});

const ContextProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(mainReducer, contextInitialState);

  return (
    <MyContext.Provider value={{state, dispatch}}>
      {children}
    </MyContext.Provider>
  );
};

export {MyContext, ContextProvider};
