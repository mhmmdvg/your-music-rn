/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Dimensions,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useRef} from 'react';
import styled, {css} from '@emotion/native';
import CloseIcon from '../../assets/icons/close-icon';
import {NavigationContext} from '@react-navigation/native';
import SearchIcon from '../../assets/icons/search-icon';
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
  margin-right: 28%;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 8%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const HeaderTitle = css`
  font-size: 18px;
  font-family: 'PlusJakartaSans-Bold';
  color: #fff;
  align-self: center;
  margin-top: 5px;
`;

const Body = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Search = styled.TouchableOpacity`
  background-color: #444;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  padding: 6px 10px 11px 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const PlaceHolder = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 2%;
  font-family: 'PlusJakartaSans-Bold';
`;

const SearchInput = styled.TextInput`
  background-color: #444;
  color: #fff;
  border-radius: 6px;
  padding: 10px 10px;
  align-self: center;
  height: 80%;
  width: 100%;
`;

const NotifNull = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 50%;
`;

const TitleNotif = styled.Text`
  font-size: 22px;
  font-family: 'PlusJakartaSans-ExtraBold';
  color: #fff;
`;

const SubTitleNotif = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  font-family: 'PlusJakartaSans-SemiBold';
  color: #fff;
`;

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const AddSongs = () => {
  const [onFocus, setOnFocus] = React.useState(false);
  const navigation = useContext(NavigationContext);
  const {searchResults, handleSearch} = useSearchAddSongs();
  const {addToPlaylists} = useAddItemPlaylists();
  const {state} = useContext(MyContext);

  const screenHeight = SCREEN_HEIGHT / 13.5;

  const inTranslateY = useRef(new Animated.Value(screenHeight)).current;
  const translateYOpacity = useRef(new Animated.Value(0)).current;
  const componentOpacity = useRef(new Animated.Value(1)).current;

  const focusHandler = () => {
    setOnFocus(true);

    Animated.timing(inTranslateY, {
      duration: 200,
      toValue: 0,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();

    Animated.timing(translateYOpacity, {
      duration: 100,
      toValue: 1,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();

    Animated.timing(componentOpacity, {
      duration: 80,
      toValue: 0,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();
  };

  const closeSearch = () => {
    Animated.timing(inTranslateY, {
      duration: 200,
      toValue: screenHeight,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();

    Animated.timing(translateYOpacity, {
      duration: 100,
      toValue: 0,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();

    Animated.timing(componentOpacity, {
      duration: 100,
      toValue: 1,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();

    setOnFocus(false);
  };

  return (
    <View style={styles.bottomSheet}>
      <Header style={{backgroundColor: onFocus ? '#202020' : '#121212'}}>
        <CloseButton
          onPress={onFocus ? () => closeSearch() : () => navigation?.goBack()}>
          <CloseIcon />
        </CloseButton>
        <Animated.Text style={[HeaderTitle, {opacity: componentOpacity}]}>
          Add songs
        </Animated.Text>
        <Animated.View
          style={[
            styles.inputBox,
            {
              transform: [{translateY: inTranslateY}],
              opacity: translateYOpacity,
            },
          ]}>
          {onFocus ? (
            <SearchInput
              autoFocus={true}
              placeholder="Search"
              placeholderTextColor="#fff"
              clearButtonMode="while-editing"
              onChangeText={handleSearch}
            />
          ) : null}
        </Animated.View>
      </Header>

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
    </View>
  );
};

export default AddSongs;

const styles = StyleSheet.create({
  bottomSheet: {
    height: SCREEN_HEIGHT,
    width: '100%',
    top: SCREEN_HEIGHT / 6,
    borderRadius: 12,
    backgroundColor: '#121212',
  },

  inputBox: {
    position: 'absolute',
    left: 50,
    top: SCREEN_HEIGHT / 75,
    width: '83%',
  },

  searchContainer: {
    width: '90%',
  },

  container: {
    marginTop: 20,
    paddingBottom: 20,
    marginBottom: 200,
    paddingHorizontal: 20,
    height: '100%',
    width: '100%',
  },
});
