import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {selectCurrentUser} from '../redux/slices/auth.slice'
import {AppDispatch} from '@/redux/store'
import {signOutThunk} from '../redux/thunks/auth.thunks'

const DashboardScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const currentUser = useSelector(selectCurrentUser)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }}>
      <Text>Welcome to Dashboard, {currentUser?.email}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          paddingHorizontal: 50,
          paddingVertical: 15,
          margin: 10,
        }}
        onPress={() => dispatch(signOutThunk())}>
        <Text style={{color: 'white'}}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DashboardScreen
