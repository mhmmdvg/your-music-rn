import {TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import React, {FC, useContext} from 'react';
import {
  AppBar,
  PlaylistsImageTrack,
  PlaylistsTitle,
  Title,
} from './styled/styles';
import AddIcon from '../../../assets/icons/add-icon';
import {NavigationContext} from '@react-navigation/native';
import {CurrentPlaylist} from '../../../types/playlist';

type Props = {
  data: CurrentPlaylist[] | undefined;
  refresh: boolean;
};

const YourPlaylists: FC<Props> = ({data, refresh}) => {
  const navigation = useContext(NavigationContext);
  return (
    <>
      <AppBar>
        <Title>Your Playlists</Title>
        <TouchableOpacity onPress={() => navigation?.navigate('Add Playlist')}>
          <AddIcon />
        </TouchableOpacity>
      </AppBar>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        overScrollMode="never"
        data={data}
        refreshing={refresh}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.cardList}>
            <PlaylistsImageTrack
              source={{
                uri:
                  item?.images[0]?.url === undefined
                    ? 'https://user-images.githubusercontent.com/57744555/171692133-4545c152-1f12-4181-b1fc-93976bdbc326.png'
                    : item?.images[0]?.url,
              }}
              resizeMode="cover"
            />

            <PlaylistsTitle>{item.name}</PlaylistsTitle>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default YourPlaylists;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginBottom: 40,
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  cardList: {
    marginTop: 10,
    marginEnd: 18,
  },
});
