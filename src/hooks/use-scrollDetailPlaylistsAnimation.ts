import {useRef} from 'react';
import {Animated} from 'react-native';

const useScrollDetailPlaylistsAnimation = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const transformContainer = [
    {
      translateY: scrollY.interpolate({
        inputRange: [-250, 0, 250],
        outputRange: [-250 / 2, 0, 250 * 0.75],
      }),
    },
    {
      scale: scrollY.interpolate({
        inputRange: [-250, 0, 250],
        outputRange: [2, 1, 0.75],
      }),
    },
  ];

  const tranformName = [
    {
      translateY: scrollY.interpolate({
        inputRange: [0, 170, 250],
        outputRange: [0, 0, 100],
      }),
    },
  ];

  const appBarTransform = [
    {
      translateY: scrollY.interpolate({
        inputRange: [250 - 100, 250 - 50],
        outputRange: [50, 0],
        extrapolate: 'clamp',
      }),
    },
  ];

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {
      useNativeDriver: true,
    },
  );

  return {
    scrollY,
    transformContainer,
    tranformName,
    appBarTransform,
    onScroll,
  };
};

export default useScrollDetailPlaylistsAnimation;
