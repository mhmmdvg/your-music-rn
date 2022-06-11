import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import styled from '@emotion/native';
import CloseIcon from '../../assets/icons/close-icon';
import {NavigationContext} from '@react-navigation/native';
import {
  Description,
  ImageTrack,
  ItemList,
  TitleTrack,
} from '../../components/screens/add-songs/styled/styled';
import useSearchAddSongs from '../../hooks/use-searchAddSongs';
import useAddItemPlaylists from '../../hooks/use-addItemsPlaylists';
import {MyContext} from '../../context/context';

const CloseButton = styled.TouchableOpacity`
  align-self: center;
  margin-left: 3%;
  margin-top: 3%;
  margin-right: 2%;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  padding-bottom: 15px;
  background-color: #121212;
`;

const Body = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Search = styled.TextInput`
  background-color: #444;
  color: #fff;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  padding: 0px 10px;
  margin-top: 10px;
  height: 35px;
  width: 85%;
`;

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const SearchSongs = () => {
  const {searchResults, handleSearch} = useSearchAddSongs();
  const {addToPlaylists} = useAddItemPlaylists();
  const {state} = useContext(MyContext);
  const navigation = useContext(NavigationContext);

  return (
    <View style={styles.bottomSheet}>
      <Header>
        <CloseButton onPress={() => navigation?.goBack()}>
          <CloseIcon />
        </CloseButton>
        {/* <Search>
          <SearchIcon />
          <PlaceHolder>Search</PlaceHolder>
        </Search> */}
        <Search
          placeholder="Search"
          placeholderTextColor="#fff"
          clearButtonMode="while-editing"
          onChangeText={handleSearch}
        />
      </Header>
      <Body>
        <FlatList
          style={styles.container}
          data={searchResults}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                addToPlaylists(item.uri, state.detailPlaylists.id);
                navigation?.goBack();
              }}>
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
      </Body>
    </View>
  );
};

export default SearchSongs;

const styles = StyleSheet.create({
  bottomSheet: {
    height: SCREEN_HEIGHT,
    width: '100%',
    top: SCREEN_HEIGHT / 6,
    borderRadius: 12,
    backgroundColor: '#161616',
  },
  container: {
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 100,
    paddingHorizontal: 20,
    height: '100%',
    width: '100%',
  },
});
