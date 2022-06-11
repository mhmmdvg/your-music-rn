export interface CurrentPlaylist {
  id: string;
  name: string;
  description?: string;
  images: [
    {
      url?: string;
    },
  ];
  tracks: {
    total: number;
  };
}

export interface NewReleaseType {
  artists: [
    {
      name: string;
    },
  ];
  id: string;
  images: [
    {
      url: string;
    },
  ];
  name: string;
}

export interface PlaylistsItem {
  track: {
    id: string;
    name: string;
    artists: [
      {
        name: string;
      },
    ];
    album: {
      name: string;
      images: [
        {
          url: string;
        },
      ];
    };
    duration_ms?: number;
  };
}

export interface PlaylistsItemData {
  id: string;
  description: string;
  images: [
    {
      url: string;
    },
  ];
  name: string;
  owner: {
    display_name: string;
  };
}

export interface PlaylistSongItems {
  id: string;
  name: string;
  artists: [
    {
      name: string;
    },
  ];
  album: {
    name: string;
    images: [
      {
        url: string;
      },
    ];
  };
  uri?: string;
}
