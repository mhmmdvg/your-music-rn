import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

export const Body = styled.ScrollView`
  height: 100%;
  padding: 0px 10px;
`;

export const AppBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0px 0px 0px;
  background-color: #060606;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'PlusJakartaSans-Bold';
  letter-spacing: 1px;
  color: #fff;
`;

export const PlaylistsImageTrack = styled.Image`
  width: 120px;
  height: 120px;
`;

export const PlaylistsTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'PlusJakartaSans-Bold';
  width: 120px;
`;

export const ImageTrack = styled.Image`
  width: 160px;
  height: 160px;
`;

export const TitleTrack = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'PlusJakartaSans-Bold';
  width: 160px;
`;

export const BoxTitle = styled.View`
  width: 160px;
`;

export const stylesHome = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  columnWrapper: {
    justifyContent: 'space-evenly',
  },
});
