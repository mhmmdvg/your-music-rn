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
