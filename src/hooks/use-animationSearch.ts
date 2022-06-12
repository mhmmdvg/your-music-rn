import {useRef, useState} from 'react';
import {Animated, Dimensions, Easing} from 'react-native';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

export default function useAnimationSearch() {
  const [onFocus, setOnFocus] = useState(false);

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

  return {
    onFocus,
    focusHandler,
    closeSearch,
    inTranslateY,
    translateYOpacity,
    componentOpacity,
  };
}
