import styled, {css} from '@emotion/native';

export const HeaderBar = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #121212;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  padding: 2px 18px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  color: #fff;
  min-width: 76%;
  height: 40px;
  margin: 10px 0px;
  padding: 0px 10px;
  border-radius: 8px;
  background-color: #232323;
`;

export const ItemList = styled.View`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  margin: 8px 0px;
`;

export const Description = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  word-break: break-all;
`;

export const ImageTrack = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 8px;
`;

export const TitleTrack = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: center;
  margin-left: 3%;
  margin-right: 28%;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const HeaderTitle = css`
  font-size: 18px;
  font-family: 'PlusJakartaSans-Bold';
  color: #fff;
  align-self: center;
  margin-top: 5px;
`;

export const Body = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Search = styled.TouchableOpacity`
  background-color: #444;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  padding: 6px 10px 11px 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PlaceHolder = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 2%;
  font-family: 'PlusJakartaSans-Bold';
`;

export const SearchInput = styled.TextInput`
  background-color: #444;
  color: #fff;
  border-radius: 6px;
  padding: 10px 10px;
  align-self: center;
  height: 80%;
  width: 100%;
`;

export const NotifNull = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 50%;
`;

export const TitleNotif = styled.Text`
  font-size: 22px;
  font-family: 'PlusJakartaSans-ExtraBold';
  color: #fff;
`;

export const SubTitleNotif = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  font-family: 'PlusJakartaSans-SemiBold';
  color: #fff;
`;
