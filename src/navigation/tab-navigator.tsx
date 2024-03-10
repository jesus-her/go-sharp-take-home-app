import React from 'react'
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HeaderBar from '../components/header-bar'

import HomeScreen from '../screens/home-screen'
import DashboardScreen from '../screens/DashboardScreen'
import AccountScreen from '../screens/AccountScreen'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        // tabBarBackground: () => (
        //   <BlurView intensity={50} style={styles.BlurViewStyles} />
        // )
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTitle: () => <HeaderBar title='Home' />,
          //   tabBarIcon: ({ focused}: {focused: boolean}) => (
          //     <MaterialIcons
          //       name='home'
          //       size={28}
          //       color={
          //         focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
          //       }
          //     />
          //   )
        }}
      />
      <Tab.Screen
        name='Dashboard'
        component={DashboardScreen}
        options={{
          headerTitle: () => <HeaderBar title='Dashboard' />,
          //   tabBarIcon: ({ focused}: {focused: boolean}) => (
          //     <Ionicons
          //       name='cart-sharp'
          //       size={26}
          //       color={
          //         focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
          //       }
          //     />
          //   )
        }}
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          headerTitle: () => <HeaderBar title='Account' />,
          //   tabBarIcon: ({ focused}: {focused: boolean}) => (
          //     <FontAwesome
          //       name='user'
          //       size={26}
          //       color={
          //         focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
          //       }
          //     />
          //   )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    elevation: 1,
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})

export default TabNavigator
