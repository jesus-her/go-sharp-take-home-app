import React from 'react'
import {
  Avatar,
  AvatarFallbackText,
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Card,
  InfoIcon,
  Text,
  VStack,
} from '@gluestack-ui/themed'
import {selectCurrentUser} from '../redux/slices/auth.slice'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch} from '../redux/store'
import {signOutThunk} from '../redux/thunks/auth.thunks'

const AccountScreen = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch<AppDispatch>()

  const handleSignOut = () => {
    dispatch(signOutThunk())
  }
  return (
    <Box flex={1} display='flex' justifyContent='flex-start' p={24}>
      <Card justifyContent='center' alignItems='center' gap={4}>
        <Avatar bgColor='$amber600' size='xl' borderRadius='$full'>
          <AvatarFallbackText>{currentUser?.email}</AvatarFallbackText>
        </Avatar>
        <VStack>
          <Text size='sm'>{currentUser?.email}</Text>
        </VStack>
        <Button
          onPress={handleSignOut}
          action='negative'
          variant='outline'
          borderRadius='$full'
          mt={24}
          size='xs'>
          <ButtonIcon as={InfoIcon} color='$red600' size='sm' />
          <ButtonText
            ml={4}
            fontWeight='$medium'
            fontSize='$sm'
            $dark-color='$textDark300'>
            Sign out
          </ButtonText>
        </Button>
      </Card>
    </Box>
  )
}

export default AccountScreen
