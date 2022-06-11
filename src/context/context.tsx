import React, {createContext, FC, useMemo, useReducer} from 'react';
import {
  AuthActions,
  authReducer,
  DetailPlaylistsActions,
  detailPlaylistsReducer,
  InputCreatePlaylistActions,
  inputCreatePlaylistReducer,
  SnapshotUpdateActions,
  snapshotUpdateReducer,
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
  detailPlaylists: {
    id: '',
    description: '',
    images: [
      {
        url: '',
      },
    ],
    name: '',
    owner: {
      display_name: '',
    },
  },
  snapshotUpdate: {
    snapshot_id: '',
  },
};

const MyContext = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<
    | AuthActions
    | UpdateUserActions
    | InputCreatePlaylistActions
    | UpdatePlaylistsActions
    | DetailPlaylistsActions
    | SnapshotUpdateActions
  >;
}>({
  state: contextInitialState,
  dispatch: () => {},
});

const mainReducer = (
  {
    auth,
    updateUser,
    inputCreatePlaylist,
    updatePlaylists,
    detailPlaylists,
    snapshotUpdate,
  }: InitialState,
  action: any,
) => ({
  auth: authReducer(auth, action),
  updateUser: updateUserReducer(updateUser, action),
  inputCreatePlaylist: inputCreatePlaylistReducer(inputCreatePlaylist, action),
  updatePlaylists: updatePlaylistsReducer(updatePlaylists, action),
  detailPlaylists: detailPlaylistsReducer(detailPlaylists, action),
  snapshotUpdate: snapshotUpdateReducer(snapshotUpdate, action),
});

const ContextProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(mainReducer, contextInitialState);

  const value = useMemo(() => ({state, dispatch}), [state, dispatch]);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export {MyContext, ContextProvider};
