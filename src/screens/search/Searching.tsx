import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  Description,
  ImageTrack,
  ItemList,
  TitleTrack,
} from '../../components/screens/search/styled/styled';
import AppBar from '../../components/screens/search/AppBar/AppBar';
import useSearch from '../../hooks/use-search';

const Searching = () => {
  const {search, filterResults, searchResults, handleSearch} = useSearch();
  return (
    <SafeAreaView>
      <AppBar handleSearch={handleSearch} />
      <FlatList
        style={styles.container}
        data={search.length > 1 ? filterResults : searchResults}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity>
            <ItemList>
              <ImageTrack
                source={{uri: item.album.images[0].url}}
                resizeMode="contain"
              />
              <Description>
                <TitleTrack>{item.name}</TitleTrack>
              </Description>
            </ItemList>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Searching;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
    height: '100%',
  },
});
