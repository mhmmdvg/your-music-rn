import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {FC, useContext} from 'react';
import {HeaderBar, Input} from '../styled/styled';
import {NavigationContext} from '@react-navigation/native';

type Props = {
  handleSearch: (key: string) => void;
};

const AppBar: FC<Props> = ({handleSearch}) => {
  const navigation = useContext(NavigationContext);

  return (
    <HeaderBar>
      <Input
        autoFocus={true}
        placeholder="Search"
        placeholderTextColor="#fff"
        clearButtonMode="while-editing"
        onChangeText={handleSearch}
      />
      <TouchableOpacity onPress={() => navigation?.goBack()}>
        <Text style={styles.cancel}>Cancel</Text>
      </TouchableOpacity>
    </HeaderBar>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  cancel: {
    color: '#888',
  },
});
