export type AuthType = {
  token: string;
};

export type UpdateUserType = {
  images: [
    {
      url: string;
    },
  ];
  display_name: string;
  id: string;
  followers: {
    total: number;
  };
};

export type InputCreatePlaylistType = {
  value: string;
};

export type UpdatePlaylistsType = {
  id: string;
  name: string;
  description?: string;
  images: [
    {
      url?: string;
    },
  ];
};

export type InitialState = {
  auth: AuthType;
  updateUser: UpdateUserType;
  inputCreatePlaylist: InputCreatePlaylistType;
  updatePlaylists: UpdatePlaylistsType[];
};
