import React from 'react'
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HeaderBar from '../components/header-bar'

import HomeScreen from '../screens/home-screen'
import ProductsScreen from '../screens/products-screen'
import AccountScreen from '../screens/account-screen'

import {
  Icon,
  GripVerticalIcon,
  SettingsIcon,
  EditIcon,
} from '@gluestack-ui/themed'

export type RootTabParamList = {
  Home: undefined
  Products: undefined
  Account: undefined
}

const Tab = createBottomTabNavigator<RootTabParamList>()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTitle: () => <HeaderBar title='Inicio' />,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Icon
              size='lg'
              as={EditIcon}
              color={focused ? '$blue600' : '$textLight500'}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Products'
        component={ProductsScreen}
        options={{
          headerTitle: () => <HeaderBar title='Productos' />,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Icon
              as={GripVerticalIcon}
              size='lg'
              color={focused ? '$blue600' : '$textLight500'}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          headerTitle: () => <HeaderBar title='Account' />,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Icon
              as={SettingsIcon}
              size='lg'
              color={focused ? '$blue600' : '$textLight500'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    backgroundColor: 'rgba(255, 255, 255,1)',
    position: 'absolute',
  },
})

export default TabNavigator
