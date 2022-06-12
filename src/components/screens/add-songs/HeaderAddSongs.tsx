import {Animated, Dimensions, Platform, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {CloseButton, Header, HeaderTitle, SearchInput} from './styled/styled';
import CloseIcon from '../../../assets/icons/close-icon';
import {NavigationContext} from '@react-navigation/native';

type Props = {
  onFocus: boolean;
  closeSearch: () => void;
  handleSearch: (text: string) => void;
  componentOpacity: Animated.AnimatedValue;
  inTranslateY: Animated.AnimatedValue;
  translateYOpacity: Animated.AnimatedValue;
};

const {height: SCREEN_HEIGHT} = Dimensions.get('screen');

const HeaderAddSongs = (props: Props) => {
  const {
    onFocus,
    closeSearch,
    handleSearch,
    componentOpacity,
    inTranslateY,
    translateYOpacity,
  } = props;

  const navigation = useContext(NavigationContext);
  return (
    <Header
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: onFocus ? '#202020' : '#121212',
        height: (SCREEN_HEIGHT / 100) * (Platform.OS === 'ios' ? 6 : 7),
      }}>
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
  );
};

export default HeaderAddSongs;

const styles = StyleSheet.create({
  inputBox: {
    position: 'absolute',
    left: 50,
    top: SCREEN_HEIGHT / 75,
    width: '83%',
  },
});
