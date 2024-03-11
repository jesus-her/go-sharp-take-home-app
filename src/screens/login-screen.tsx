import React from 'react'
import {KeyboardAvoidingView, ScrollView} from 'react-native'
import {Box, VStack, Heading, Text, Card} from '@gluestack-ui/themed'
import LoginForm from '../components/forms/login-form'

const LoginScreen = () => {
  return (
    <Box flex={1} display='flex' justifyContent='center' p={24}>
      <KeyboardAvoidingView behavior='padding'>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Card size='lg' variant='elevated' m='$3' gap={16}>
            <Box>
              <Heading size='lg'>Login</Heading>
              <Text size='sm'>
                Llena el formulario con tus credenciales e inicia sesión en la
                app.
              </Text>
            </Box>
            <LoginForm />
            <VStack>
              <Text size='sm'>email: jesus10.hn@gmail.com</Text>
              <Text size='sm'>password: password1234</Text>
            </VStack>
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  )
}

export default LoginScreen
