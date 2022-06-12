import React, {FC} from 'react';
import {Animated, Platform, StyleSheet} from 'react-native';
import useUser from '../../../hooks/use-user';
import {AppBarStyle, NameInAppBar} from './styled/styled';

type Props = {
  appbarAnimation: any;
  scrollAnimation: any;
};

const AppBar: FC<Props> = ({scrollAnimation, appbarAnimation}) => {
  const isUser = useUser();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <AppBarStyle style={{height: Platform.OS === 'ios' ? '8.5%' : 0}}>
      <Animated.View
        style={[
          styles(
            scrollAnimation.interpolate({
              inputRange: [250 - 100, 250 - 70],
              outputRange: [0, 1],
            }),
          ).appBarColor,
        ]}
      />
      <Animated.View
        style={[
          styles(
            scrollAnimation.interpolate({
              inputRange: [250 - 100, 250 - 50],
              outputRange: [0, 1],
            }),
          ).appBarText,
          {
            transform: appbarAnimation,
          },
        ]}>
        <NameInAppBar>{isUser?.display_name}</NameInAppBar>
      </Animated.View>
    </AppBarStyle>
  );
};

export default AppBar;

const styles = (opacityAnimated: any) =>
  StyleSheet.create({
    appBarColor: {
      position: 'absolute',
      zIndex: 6,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#161616',
      opacity: opacityAnimated,
    },

    appBarText: {
      position: 'absolute',
      zIndex: 6,
      top: 0,
      left: 0,
      right: 0,
      marginTop: Platform.OS === 'ios' ? 30 : 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: opacityAnimated,
    },
  });
