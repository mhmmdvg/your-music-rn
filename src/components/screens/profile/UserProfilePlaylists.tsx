import React, {FC} from 'react';
import {
  DescPlaylists,
  PlaylistsImage,
  PlaylistsTitle,
  TotalTracks,
  TouchableList,
} from './styled/styled';

type Props = {
  name: string;
  images: [
    {
      url?: string;
    },
  ];
  tracks: {
    total: number;
  };
};

const UserProfilePlaylists: FC<Props> = ({name, images, tracks}) => {
  return (
    <TouchableList>
      <PlaylistsImage
        source={{
          uri:
            images[0]?.url === undefined
              ? 'https://user-images.githubusercontent.com/57744555/171692133-4545c152-1f12-4181-b1fc-93976bdbc326.png'
              : images[0]?.url,
        }}
        resizeMode="cover"
      />
      <DescPlaylists>
        <PlaylistsTitle>{name}</PlaylistsTitle>
        <TotalTracks>{tracks.total} tracks</TotalTracks>
      </DescPlaylists>
    </TouchableList>
  );
};

export default UserProfilePlaylists;
