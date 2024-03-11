import {type NavigationProp, useNavigation} from '@react-navigation/native'
import type {RootTabParamList} from '../navigation/tab-navigator'
import {
  Button,
  ButtonIcon,
  ButtonText,
  ChevronRightIcon,
  Heading,
  Text,
} from '@gluestack-ui/themed'
import React from 'react'
import {View} from 'react-native'

const EmptyProducts = () => {
  // Use the hook and tell TypeScript the type of the navigator's param list.
  const navigation = useNavigation<NavigationProp<RootTabParamList>>()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
      }}>
      <Heading>Sin Productos</Heading>
      <Text opacity={0.7} textAlign='center'>
        Parece que aun no hay productos para mostrar en esta pantalla. Ve al
        Inicio y comienza a agregar nuevos productos!
      </Text>

      <Button
        onPress={() => navigation.navigate('Home')}
        action='positive'
        borderRadius='$full'
        mt={24}
        size='xs'>
        <ButtonText
          ml={4}
          fontWeight='$medium'
          fontSize='$sm'
          $dark-color='$textDark300'>
          Comienza a agregar productos
        </ButtonText>
        <ButtonIcon as={ChevronRightIcon} color='white' size='sm' />
      </Button>
    </View>
  )
}

export default EmptyProducts
