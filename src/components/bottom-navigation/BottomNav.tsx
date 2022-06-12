import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import {Platform, StyleSheet} from 'react-native';
import HomeIcon from '../../assets/icons/home-icon';
import HomeFillIcon from '../../assets/icons/homefill-icon';
import SearchIcon from '../../assets/icons/search-icon';
import SearchFillIcon from '../../assets/icons/searchfill-icon';
import {ProfileIcon, ProfileIconActive} from '../../assets/icons/profile';
import {
  HomeRoutes,
  ProfileRoutes,
  SearchRoutes,
} from '../../screens/StackRoutes';

type NavType = {
  name: string;
  component: React.FC;
  icon: {
    active: React.FC;
    inactive: React.FC;
  };
};

const BottomNavItems: Array<NavType> = [
  {
    name: 'Home Routes',
    component: HomeRoutes,
    icon: {active: HomeFillIcon, inactive: HomeIcon},
  },
  {
    name: 'Search Routes',
    component: SearchRoutes,
    icon: {active: SearchFillIcon, inactive: SearchIcon},
  },
  {
    name: 'Profile Routes',
    component: ProfileRoutes,
    icon: {active: ProfileIconActive, inactive: ProfileIcon},
  },
];

const BottomNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
          height: 75,
          // minHeight: 200,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={
              Platform.OS === 'ios'
                ? [
                    '#02020217',
                    '#020202d7',
                    '#020202f3',
                    '#020202f3',
                    '#020202',
                  ]
                : ['#02020208', '#020202a7', '#020202f3', '#020202']
            }
            style={styles.linearGradient}
          />
        ),
      }}>
      {BottomNavItems.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? <item.icon.active /> : <item.icon.inactive />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    // width: '100%',
    borderTopWidth: 0,
  },
});
