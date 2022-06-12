import {View, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import useSearchAddSongs from '../../hooks/use-searchAddSongs';
import HeaderAddSongs from '../../components/screens/add-songs/HeaderAddSongs';
import useAnimationSearch from '../../hooks/use-animationSearch';
import BodyAddSongs from '../../components/screens/add-songs/BodyAddSongs';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const AddSongs = () => {
  const {searchResults, handleSearch} = useSearchAddSongs();
  const {
    onFocus,
    focusHandler,
    closeSearch,
    inTranslateY,
    translateYOpacity,
    componentOpacity,
  } = useAnimationSearch();

  return (
    <View style={styles.bottomSheet}>
      <HeaderAddSongs
        onFocus={onFocus}
        closeSearch={closeSearch}
        handleSearch={handleSearch}
        componentOpacity={componentOpacity}
        inTranslateY={inTranslateY}
        translateYOpacity={translateYOpacity}
      />
      <BodyAddSongs
        searchResults={searchResults}
        focusHandler={focusHandler}
        closeSearch={closeSearch}
        onFocus={onFocus}
        componentOpacity={componentOpacity}
        translateYOpacity={translateYOpacity}
      />
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
});
