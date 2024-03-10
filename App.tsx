import React from 'react'
import {StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import AppRoute from './src/navigation/navigator'
import {store} from './src/redux/store'
import {GluestackUIProvider} from '@gluestack-ui/themed'
import {config} from '@gluestack-ui/config'

export default function App () {
  return (
    <GluestackUIProvider config={config}>
      <Provider store={store}>
        <AppRoute />
        <StatusBar barStyle={'dark-content'} />
      </Provider>
    </GluestackUIProvider>
  )
}
