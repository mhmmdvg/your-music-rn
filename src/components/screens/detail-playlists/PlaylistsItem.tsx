import React, {FC} from 'react';
import {
  DescPlaylists,
  PlaylistsImage,
  PlaylistsTitle,
  TotalTracks,
  TouchableList,
} from './styled/styled';

type Props = {
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

const PlaylistsItem: FC<Props> = ({name, artists, album}) => {
  return (
    <TouchableList>
      <PlaylistsImage
        source={{
          uri:
            album.images[0]?.url === undefined
              ? 'https://user-images.githubusercontent.com/57744555/171692133-4545c152-1f12-4181-b1fc-93976bdbc326.png'
              : album.images[0]?.url,
        }}
        resizeMode="cover"
      />
      <DescPlaylists>
        <PlaylistsTitle>{name}</PlaylistsTitle>
        <TotalTracks>{artists[0].name}</TotalTracks>
      </DescPlaylists>
    </TouchableList>
  );
};

export default PlaylistsItem;
