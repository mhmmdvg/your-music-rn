import styled from '@emotion/native';

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
