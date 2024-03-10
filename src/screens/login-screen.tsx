import React, {useState} from 'react'
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {useDispatch} from 'react-redux'
import {signInThunk} from '../redux/thunks/auth.thunks'
import {AppDispatch} from '@/redux/store'
// import {signIn} from '../redux/slices/authSlice'

// import {setSignIn} from '../redux/slices/authSlice'

const LoginScreen = () => {
  const dispatch = useDispatch<AppDispatch>()

  const [formData, setFormData] = useState({
    email: 'jesus10.hn@gmail.com',
    password: 'password1234',
  })

  const handleInputChange = (fieldName: string, text: string) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [fieldName]: text,
    }))
  }

  const handleLogin = () => {
    dispatch(
      signInThunk({username: formData.email, password: formData.password}),
    )
  }

  return (
    <View style={styles.ScreenContainer}>
      <KeyboardAvoidingView behavior='padding'>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ScrollViewFlex}>
          <Text>Login Screen</Text>
          <TextInput
            style={{borderWidth: 1}}
            placeholder='Email address'
            value={formData.email}
            onChangeText={(text: string) => handleInputChange('email', text)}
          />
          <TextInput
            style={{borderWidth: 1}}
            placeholder='Password'
            value={formData.password}
            onChangeText={(text: string) => handleInputChange('password', text)}
          />

          <Button title='Login' onPress={handleLogin} />
          {/* <Button title='Create account' onPress={handleRegister} /> */}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScrollViewFlex: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
})
