import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch} from '../../redux/store'
import {
  VStack,
  Button,
  ButtonText,
  InputSlot,
  InputIcon,
  EyeIcon,
  EyeOffIcon,
  Text,
  ButtonSpinner,
} from '@gluestack-ui/themed'
import FormInputUi from '../ui/form-input-ui'
import {signInThunk} from '../../redux/thunks/auth.thunks'
import {selectError, selectLoading} from '../../redux/slices/auth.slice'

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const error = useSelector(selectError)
  const isLoading = useSelector(selectLoading)

  const [formData, setFormData] = useState({
    email: 'jesus10.hn@gmail.com',
    password: 'password1234',
  })

  const [showPassword, setShowPassword] = useState(false)
  const handleState = () => {
    setShowPassword(showState => {
      return !showState
    })
  }

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
    <VStack>
      <FormInputUi
        label='Email'
        maxLength={30}
        type='text'
        placeholder='Enter your email'
        value={formData.email}
        onChangeText={(text: string) => handleInputChange('email', text)}
      />
      <FormInputUi
        label='Password'
        maxLength={16}
        type={showPassword ? 'text' : 'password'}
        placeholder='Enter your password'
        value={formData.password}
        onChangeText={(text: string) => handleInputChange('password', text)}
        invalidMessage={error}
        endContent={
          <InputSlot pr='$3' onPress={handleState}>
            <InputIcon
              as={showPassword ? EyeIcon : EyeOffIcon}
              color='$darkBlue500'
            />
          </InputSlot>
        }
      />

      <Text color='red' mb={8}>
        {error}
      </Text>
      <Button
        size='md'
        variant='solid'
        action='primary'
        isDisabled={isLoading}
        isFocusVisible={false}
        onPress={handleLogin}>
        {isLoading && <ButtonSpinner mr='$1' />}
        <ButtonText> {isLoading ? 'Loading...' : 'Login'}</ButtonText>
      </Button>
    </VStack>
  )
}

export default LoginForm
