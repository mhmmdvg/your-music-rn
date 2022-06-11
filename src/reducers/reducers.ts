import {
  AuthType,
  DetailPlaylistsData,
  InputCreatePlaylistType,
  SnapshotUpdateType,
  UpdatePlaylistsType,
  UpdateUserType,
} from '../types/context-type';
import {
  ActionMap,
  AuthPayload,
  DetailPlaylistsPayload,
  InputCreatePlaylistPayload,
  SnapshotUpdatePayload,
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

export type DetailPlaylistsActions =
  ActionMap<DetailPlaylistsPayload>[keyof ActionMap<DetailPlaylistsPayload>];

export const detailPlaylistsReducer = (
  state: DetailPlaylistsData,
  action: DetailPlaylistsActions,
) => {
  switch (action.type) {
    case 'DETAIL_PLAYLISTS':
      return {
        ...state,
        id: action.payload.id,
        description: action.payload.description,
        images: action.payload.images,
        name: action.payload.name,
        owner: {
          display_name: action.payload.owner.display_name,
        },
      };

    default:
      return state;
  }
};

export type SnapshotUpdateActions =
  ActionMap<SnapshotUpdatePayload>[keyof ActionMap<SnapshotUpdatePayload>];

export const snapshotUpdateReducer = (
  state: SnapshotUpdateType,
  action: SnapshotUpdateActions,
) => {
  switch (action.type) {
    case 'SNAPSHOT_UPDATE':
      return {
        ...state,
        snapshot_id: action.payload.snapshot_id,
      };

    default:
      return state;
  }
};
