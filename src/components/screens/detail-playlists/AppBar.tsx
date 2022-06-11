import {NavigationContext} from '@react-navigation/native';
import React, {FC, useContext} from 'react';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '../../../assets/icons/back-icon';
import {PlaylistsItemData} from '../../../types/playlist';
import {AppBarStyle, Title} from './styled/styled';

type Props = {
  appbarAnimation: any;
  scrollAnimation: any;
  data: PlaylistsItemData;
};

const AppBar: FC<Props> = ({scrollAnimation, appbarAnimation, data}) => {
  const navigation = useContext(NavigationContext);
  return (
    <AppBarStyle>
      <Animated.View
        style={
          styles(
            scrollAnimation.interpolate({
              inputRange: [380 - 100, 380 - 70],
              outputRange: [0, 1],
            }),
          ).appBarColor
        }
      />

      <Animated.View
        style={[
          styles(
            scrollAnimation.interpolate({
              inputRange: [380 - 100, 380 - 50],
              outputRange: [0, 1],
            }),
          ).appBarText,
          {
            transform: appbarAnimation,
          },
        ]}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Title>{data.name}</Title>
      </Animated.View>
      <Animated.View
        style={
          styles(
            scrollAnimation.interpolate({
              inputRange: [-300, -100, 0, 250, 251],
              outputRange: [300, 0, 1, 0, 0],
            }),
          ).topOption
        }>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <BackIcon />
        </TouchableOpacity>
      </Animated.View>
    </AppBarStyle>
  );
};

export default AppBar;

const styles = (opacityAnimated: any) =>
  StyleSheet.create({
    appBarColor: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#060606',
      opacity: opacityAnimated,
    },

    appBarText: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      paddingHorizontal: 10,
      alignItems: 'center',
      opacity: opacityAnimated,
    },

    topOption: {
      paddingTop: 20,
      paddingHorizontal: 13,
      opacity: opacityAnimated,
    },
  });
