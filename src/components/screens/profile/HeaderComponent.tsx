import styled from '@emotion/native';
import {NavigationContext} from '@react-navigation/native';
import React, {FC, useContext} from 'react';
import {Animated, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useUser from '../../../hooks/use-user';
import {
  FollowBox,
  Followers,
  FollowersTotal,
  HeaderContainer,
  InfoBox,
  Name,
  ProfilePicture,
  SecondInformation,
  SubHeading,
  TitleText,
  UserId,
} from './styled/styled';

const AddPlaylistContainer = styled.View`
  margin-top: 20%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const InformationText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
  font-family: 'PlusJakartaSans-SemiBold';
`;

const AddPlaylistsButton = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 100px;
  padding: 10px 20px;
  height: 50px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: #060606;
  font-family: 'PlusJakartaSans-Bold';
`;

type Props = {
  scrollAnimation: any;
  animationContainer: any;
  animationName: any;
  addCondition: number | undefined;
};

const HeaderComponent: FC<Props> = ({
  scrollAnimation,
  animationContainer,
  animationName,
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
          style={[
            HeaderContainer,
            {
              transform: animationContainer,
              opacity: scrollAnimation.interpolate({
                inputRange: [-200, -100, 0, 150, 151],
                outputRange: [200, 0, 1, 0, 0],
              }),
            },
          ]}>
          <ProfilePicture
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
          <Animated.View style={[InfoBox, {transform: animationName}]}>
            <Name>{isUser?.display_name}</Name>
            <UserId>@{isUser?.id}</UserId>
          </Animated.View>
        </Animated.View>
      </LinearGradient>

      <SubHeading>
        <SecondInformation>
          <FollowBox>
            <FollowersTotal>{isUser?.followers.total}</FollowersTotal>
            <Followers>Followers</Followers>
          </FollowBox>
          <FollowBox>
            <FollowersTotal>{isUser?.followers.total}</FollowersTotal>
            <Followers>Following</Followers>
          </FollowBox>
        </SecondInformation>
        {addCondition ? <TitleText>Your Playlists</TitleText> : null}
      </SubHeading>
      {addCondition ? null : (
        <AddPlaylistContainer>
          <InformationText>
            Want new playlists? Create your playlists
          </InformationText>
          <AddPlaylistsButton
            onPress={() => navigation?.navigate('Add Playlist')}>
            <ButtonText>Add Playlists</ButtonText>
          </AddPlaylistsButton>
        </AddPlaylistContainer>
      )}
    </>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  header: {
    marginTop: -300,
    paddingTop: 300,
    overflow: 'hidden',
  },
});
