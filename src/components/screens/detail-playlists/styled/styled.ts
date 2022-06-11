import styled, {css} from '@emotion/native';

export const AlbumCover = styled.Image`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
  align-self: center;
`;

export const PlaylistsCover = (props: any) => css`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
  align-self: center;
  opacity: ${props.opacity};
`;

export const Header = css`
  padding-top: 5%;
  overflow: hidden;
`;

export const Name = styled.Text`
  font-size: 28px;
  color: #fff;
  font-family: 'PlusJakartaSans-Bold';
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-left: 42%;
  font-family: 'PlusJakartaSans-Bold';
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
  height: 300px;
  padding-left: 13px;
  padding-right: 13px;
  justify-content: center;
  width: 100%;
`;

export const InfoBox = css`
  padding: 8px 13px;
`;

export const AppBarStyle = styled.View`
  position: absolute;
  padding-bottom: 50px;
  height: 38px;
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

export const SubHeading = styled.View`
  padding-bottom: 20px;
  padding-left: 13px;
  padding-right: 13px;
`;

export const AddSongsContainer = styled.View`
  margin-top: 20%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const InformationText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
  font-family: 'PlusJakartaSans-SemiBold';
`;

export const SongsButton = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 100px;
  padding: 10px 20px;
  height: 50px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #060606;
  font-family: 'PlusJakartaSans-Bold';
`;
