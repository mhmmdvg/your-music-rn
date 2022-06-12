import {Animated, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {
  Body,
  Description,
  ImageTrack,
  ItemList,
  NotifNull,
  PlaceHolder,
  Search,
  SubTitleNotif,
  TitleNotif,
  TitleTrack,
} from './styled/styled';
import SearchIcon from '../../../assets/icons/search-icon';
import {SearchItem} from '../../../types/searchResult';
import useAddItemPlaylists from '../../../hooks/use-addItemsPlaylists';
import {MyContext} from '../../../context/context';

type Props = {
  onFocus: boolean;
  closeSearch: () => void;
  focusHandler: () => void;
  componentOpacity: Animated.AnimatedValue;
  translateYOpacity: Animated.AnimatedValue;
  searchResults: SearchItem[];
};

const BodyAddSongs = (props: Props) => {
  const {
    onFocus,
    closeSearch,
    focusHandler,
    componentOpacity,
    translateYOpacity,
    searchResults,
  } = props;

  const {addToPlaylists} = useAddItemPlaylists();
  const {state} = useContext(MyContext);

  return (
    <Body>
      {onFocus ? null : (
        <Animated.View
          style={[
            styles.searchContainer,
            {
              opacity: componentOpacity,
            },
          ]}>
          <Search onPress={() => focusHandler()}>
            <SearchIcon />
            <PlaceHolder>Search</PlaceHolder>
          </Search>
        </Animated.View>
      )}
      <Animated.FlatList
        style={[styles.container, {opacity: translateYOpacity}]}
        data={searchResults}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          searchResults.length > 0 ? null : (
            <NotifNull>
              <TitleNotif>Play what you love</TitleNotif>
              <SubTitleNotif>Search for songs</SubTitleNotif>
            </NotifNull>
          )
        }
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              addToPlaylists(item.uri, state.detailPlaylists.id);
              closeSearch();
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
  );
};

export default BodyAddSongs;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingBottom: 20,
    marginBottom: 200,
    paddingHorizontal: 20,
    height: '100%',
    width: '100%',
  },
  searchContainer: {
    width: '90%',
  },
});
