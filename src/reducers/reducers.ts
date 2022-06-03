import {
  AuthType,
  InputCreatePlaylistType,
  UpdatePlaylistsType,
  UpdateUserType,
} from '../types/context-type';
import {
  ActionMap,
  AuthPayload,
  InputCreatePlaylistPayload,
  UpdatePlaylistsPayload,
  UpdateUserPayload,
} from '../types/reducer-type';

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

export const authReducer = (state: AuthType, action: AuthActions) => {
  switch (action.type) {
    case 'AUTH':
      return {
        ...state,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

export type UpdateUserActions =
  ActionMap<UpdateUserPayload>[keyof ActionMap<UpdateUserPayload>];

export const updateUserReducer = (
  state: UpdateUserType,
  action: UpdateUserActions,
) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        id: action.payload.id,
        display_name: action.payload.display_name,
        images: action.payload.images,
        followers: action.payload.followers,
      };

    default:
      return state;
  }
};

export type InputCreatePlaylistActions =
  ActionMap<InputCreatePlaylistPayload>[keyof ActionMap<InputCreatePlaylistPayload>];

export const inputCreatePlaylistReducer = (
  state: InputCreatePlaylistType,
  action: InputCreatePlaylistActions,
) => {
  switch (action.type) {
    case 'INPUT_CREATE_PLAYLIST':
      return {
        ...state,
        value: action.payload.value,
      };

    default:
      return state;
  }
};

export type UpdatePlaylistsActions =
  ActionMap<UpdatePlaylistsPayload>[keyof ActionMap<UpdatePlaylistsPayload>];

export const updatePlaylistsReducer = (
  state: UpdatePlaylistsType[],
  action: UpdatePlaylistsActions,
) => {
  switch (action.type) {
    case 'UPDATE_PLAYLISTS':
      return {...state, ...action.payload};

    default:
      return state;
  }
};
