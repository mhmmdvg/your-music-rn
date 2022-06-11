import React, {FC, useContext, useEffect} from 'react';
import AppBar from '../../components/screens/detail-playlists/AppBar';
import useRefresh from '../../hooks/use-refresh';
import Header from '../../components/screens/detail-playlists/Header';
import {Animated, RefreshControl, StyleSheet} from 'react-native';
import useGetPlaylistsItem from '../../hooks/use-getPlaylistsItem';
import PlaylistsItem from '../../components/screens/detail-playlists/PlaylistsItem';
import useScrollDetailPlaylistsAnimation from '../../hooks/use-scrollDetailPlaylistsAnimation';
import {MyContext} from '../../context/context';
import {Types} from '../../types/reducer-type';

type Props = {
  route: any;
};

const DetailPlaylists: FC<Props> = ({route}) => {
  const {playlist, getPlaylistsItem} = useGetPlaylistsItem();
  const {refreshing, onRefresh} = useRefresh();
  const {scrollY, transformContainer, appBarTransform, onScroll} =
    useScrollDetailPlaylistsAnimation();
  const {state, dispatch} = useContext(MyContext);

  useEffect(() => {
    getPlaylistsItem(route.params.data.id);
    dispatch({type: Types.DetailPlaylists, payload: route.params.data});
  }, [getPlaylistsItem, route, dispatch, state.snapshotUpdate.snapshot_id]);

  return (
    <>
      <AppBar
        scrollAnimation={scrollY}
        appbarAnimation={appBarTransform}
        data={route.params.data}
      />
      <Animated.FlatList
        style={styles.flatlist}
        scrollToOverflowEnabled={true}
        overScrollMode="never"
        refreshControl={
          <RefreshControl
            title="Loading..."
            tintColor="#fff"
            titleColor="#fff"
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        refreshing={refreshing}
        ListHeaderComponent={
          <Header
            animationContainer={transformContainer}
            scrollAnimation={scrollY}
            data={route.params.data}
            addCondition={playlist?.length}
          />
        }
        scrollEventThrottle={16}
        onScroll={onScroll}
        data={playlist}
        keyExtractor={item => item.track.id}
        renderItem={({item}) => <PlaylistsItem {...item.track} />}
      />
    </>
  );
};

export default React.memo(DetailPlaylists);

const styles = StyleSheet.create({
  flatlist: {
    marginBottom: 30,
  },
});
