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
          <Card size='lg' variant='elevated' m='$3'>
            <VStack mb='$4'>
              <Heading size='lg'>Login</Heading>
              <Text size='sm'>Start building your next project in minutes</Text>
            </VStack>
            <LoginForm />
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  )
}

export default LoginScreen
