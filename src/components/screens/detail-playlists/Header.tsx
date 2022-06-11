import styled from '@emotion/native';
import {NavigationContext} from '@react-navigation/native';
import React, {FC, useContext} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AddIcon from '../../../assets/icons/add-icon';
import useUser from '../../../hooks/use-user';
import {PlaylistsItemData} from '../../../types/playlist';
import {
  AddSongsContainer,
  ButtonText,
  HeaderContainer,
  InformationText,
  Name,
  SongsButton,
  SubHeading,
} from './styled/styled';

const Add = styled.View`
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  background-color: #333;
`;

const AddSongButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 0px 10px 10px 10px;
  align-items: center;
`;

const ButtonTitle = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  color: #fff;
  font-family: 'PlusJakartaSans-SemiBold';
`;

const Owner = styled.View`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;

const ProfileName = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
  font-family: 'JakatSans-SemiBold';
`;

type Props = {
  scrollAnimation: any;
  animationContainer: any;
  data: PlaylistsItemData;
  addCondition?: number | undefined;
};

const Header: FC<Props> = ({
  scrollAnimation,
  animationContainer,
  data,
  addCondition,
}) => {
  const isUser = useUser();
  const navigation = useContext(NavigationContext);

  return (
    <>
      <LinearGradient
        colors={['#555', '#666', '#060606']}
        style={styles.header}>
        <Animated.View
          style={[HeaderContainer, {transform: animationContainer}]}>
          <View style={styles.imageContainer}>
            <Animated.Image
              style={[
                styles.playlistsCover,
                {
                  opacity: scrollAnimation.interpolate({
                    inputRange: [-300, -100, 0, 250, 251],
                    outputRange: [300, 0, 1, 0, 0],
                  }),
                },
              ]}
              source={
                data.images.length
                  ? {
                      uri: data.images[0].url,
                    }
                  : {
                      uri: 'https://user-images.githubusercontent.com/57744555/171692133-4545c152-1f12-4181-b1fc-93976bdbc326.png',
                    }
              }
              resizeMode="cover"
            />
          </View>
        </Animated.View>
      </LinearGradient>

      <SubHeading>
        <Name>{data.name}</Name>
        <Owner>
          <ProfileImage
            source={
              isUser?.images.length
                ? {
                    uri: isUser?.images[0].url,
                  }
                : {
                    uri: 'https://user-images.githubusercontent.com/57744555/171856890-1131d005-1bd3-4e8d-914a-e98d0eb54fa0.png',
                  }
            }
            resizeMode="cover"
          />
          <ProfileName>{data.owner.display_name}</ProfileName>
        </Owner>
      </SubHeading>
      {addCondition ? (
        <AddSongButton onPress={() => navigation?.navigate('Add Songs')}>
          <Add>
            <AddIcon />
          </Add>
          <ButtonTitle>Add Songs</ButtonTitle>
        </AddSongButton>
      ) : null}
      {addCondition ? null : (
        <AddSongsContainer>
          <InformationText>
            Let's find some songs for your playlists
          </InformationText>
          <SongsButton onPress={() => navigation?.navigate('Add Songs')}>
            <ButtonText>Add songs</ButtonText>
          </SongsButton>
        </AddSongsContainer>
      )}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginTop: -300,
    paddingTop: 300,
  },
  playlistsCover: {
    height: '100%',
    width: '100%',
    marginBottom: 10,
    alignSelf: 'center',
  },

  imageContainer: {
    height: 220,
    width: 220,
    alignSelf: 'center',
    elevation: 10,
    marginBottom: 10,
  },
});
