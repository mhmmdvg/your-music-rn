import styled, {css} from '@emotion/native';

export const ProfilePicture = styled.Image`
  margin-top: 40px;
  height: 130px;
  width: 130px;
  border-radius: 100px;
  margin-bottom: 10px;
`;

export const Header = css`
  padding-top: 5%;
  overflow: hidden;
`;

export const Name = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: 'PlusJakartaSans-Bold';
`;

export const NameInAppBar = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'PlusJakartaSans-Bold';
`;

export const UserId = styled.Text`
  font-size: 16px;
  color: #ccc;
  font-family: 'PlusJakartaSans-SemiBold';
`;

export const TouchableList = styled.TouchableOpacity`
  padding: 0px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PlaylistsImage = styled.Image`
  height: 60px;
  width: 60px;
`;

export const PlaylistsTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'PlusJakartaSans-SemiBold';
`;

export const HeaderContainer = css`
  height: 250px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InfoBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AppBarStyle = styled.View`
  position: absolute;
  padding-bottom: 50px;
  z-index: 5;
  width: 100%;
`;

export const SecondInformation = styled.View`
  display: flex;
  padding-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

export const FollowersTotal = styled.Text`
  font-size: 14px;
  color: #ccc;
  font-family: 'PlusJakartaSans-SemiBold';
`;

export const Followers = styled.Text`
  font-size: 14px;
  color: #ddd;
  font-family: 'PlusJakartaSans-Bold';
  letter-spacing: 1px;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-left: 10px;
  font-family: 'PlusJakartaSans-Bold';
`;

export const TotalTracks = styled.Text`
  font-size: 14px;
  color: #ccc;
  font-family: 'PlusJakartaSans-SemiBold';
`;

export const DescPlaylists = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const FollowBox = styled.View`
  align-items: center;
`;

export const SubHeading = styled.View`
  padding-bottom: 20px;
`;
