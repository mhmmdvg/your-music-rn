import React, {useContext} from 'react';
import styled from '@emotion/native';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import useRecommendPlaylists from '../../hooks/use-playlist';

const SearchInput = styled.View`
  background-color: #fff;
  border-radius: 8px;
  padding: 14px 10px;
  margin-bottom: 20px;
  color: #000;
`;

const PlaceHolder = styled.Text`
  color: #888;
`;

const SearchTitle = styled.Text`
  font-size: 32px;
  font-family: 'PlusJakartaSans-ExtraBold';
  color: #fff;
  margin-bottom: 12px;
`;

const SafeArea = styled.SafeAreaView`
  padding: 8px 12px;
`;

const TopBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImageTrack = styled.Image`
  width: 160px;
  height: 100px;
  border-radius: 10px;
`;

const Search = () => {
  const navigation = useContext(NavigationContext);
  const {browseCategories} = useRecommendPlaylists();

  return (
    <SafeArea>
      <TopBar>
        <SearchTitle>Search</SearchTitle>
      </TopBar>
      <TouchableWithoutFeedback
        onPress={() => navigation?.navigate('Searching')}>
        <SearchInput>
          <PlaceHolder>Search</PlaceHolder>
        </SearchInput>
      </TouchableWithoutFeedback>
      <FlatList
        overScrollMode="never"
        style={styles.container}
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        data={browseCategories}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity>
            <ImageTrack
              source={{
                uri:
                  item?.icons[0]?.url === undefined
                    ? 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228'
                    : item?.icons[0]?.url,
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      />
    </SafeArea>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  columnWrapper: {
    justifyContent: 'space-around',
    padding: 10,
  },
});
