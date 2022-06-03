import {Image, StyleSheet} from 'react-native';
import React from 'react';
import useUser from '../../hooks/use-user';

const ProfileIconActive = () => {
  const isUser = useUser();
  return (
    <Image
      style={styles.iconProfileActive}
      source={
        isUser?.images.length
          ? {
              uri: isUser?.images[0].url,
            }
          : {
              uri: 'https://user-images.githubusercontent.com/57744555/171856890-1131d005-1bd3-4e8d-914a-e98d0eb54fa0.png',
            }
      }
      //   resizeMode="cover"
    />
  );
};

const ProfileIcon = () => {
  const isUser = useUser();

  return (
    <Image
      style={styles.iconProfile}
      source={
        isUser?.images.length
          ? {
              uri: isUser?.images[0].url,
            }
          : {
              uri: 'https://user-images.githubusercontent.com/57744555/171856890-1131d005-1bd3-4e8d-914a-e98d0eb54fa0.png',
            }
      }
      //   resizeMode="cover"
    />
  );
};

export {ProfileIcon, ProfileIconActive};

const styles = StyleSheet.create({
  iconProfileActive: {
    height: 28,
    width: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#fff',
  },
  iconProfile: {
    height: 28,
    width: 28,
    borderRadius: 14,
  },
});
