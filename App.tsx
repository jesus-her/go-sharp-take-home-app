import React from 'react'
import {StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import AppRoute from './src/navigation/navigator'
import {store} from './src/redux/store'

export default function App () {
  return (
    <>
      <Provider store={store}>
        <AppRoute />
        <StatusBar barStyle={'dark-content'} />
      </Provider>
    </>
  )
}
