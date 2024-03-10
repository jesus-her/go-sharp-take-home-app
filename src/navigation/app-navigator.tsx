import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import DashboardScreen from '../screens/DashboardScreen'
import AccountScreen from '../screens/AccountScreen'
import TabNavigator from './tab-navigator'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Tabs'
      screenOptions={{headerShown: false}}>
      <Stack.Screen name='Tabs' component={TabNavigator} />
      {/* <Stack.Screen name='Account' component={AccountScreen} /> */}
    </Stack.Navigator>
  )
}

export default AppNavigator
