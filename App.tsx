import React from 'react'
import {StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import AppRoute from './src/navigation/navigator'
import {persistor, store} from './src/redux/store'
import {GluestackUIProvider} from '@gluestack-ui/themed'
import {config} from '@gluestack-ui/config'
import {PersistGate} from 'redux-persist/integration/react'

export default function App () {
  return (
    <GluestackUIProvider config={config}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoute />
          <StatusBar barStyle={'dark-content'} />
        </PersistGate>
      </Provider>
    </GluestackUIProvider>
  )
}
