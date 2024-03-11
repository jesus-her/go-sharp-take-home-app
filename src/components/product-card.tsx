import React from 'react'
import {
  VStack,
  Heading,
  Text,
  Card,
  Image,
  HStack,
  Box,
  Icon,
  ArrowRightIcon,
  ButtonIcon,
  Button,
  TrashIcon,
  ButtonText,
} from '@gluestack-ui/themed'
import type {IProduct} from '../types/product.types'
import type {AppDispatch} from '../redux/store'
import {useDispatch} from 'react-redux'
import {deleteProductThunk} from '../redux/thunks/product.thunks'

const ProductCard = ({product}: {product: IProduct}) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleDeleteProduct = () => {
    dispatch(deleteProductThunk(product.id))
  }
  return (
    <Card p='$5' borderRadius='$lg' position='relative' gap={12}>
      <HStack gap={12}>
        <Image
          h={120}
          w={120}
          aspectRatio={1}
          borderRadius={12}
          bg='#03017C'
          alt='Product Image'
          source={require('../assets/shoes-1.webp')}
        />

        <VStack flex={1}>
          <Heading size='md' textTransform='capitalize' numberOfLines={1}>
            {product.name}
          </Heading>
          <Text
            bg={'#F5A524' + 50}
            color='#F5A524'
            px={6}
            py={1}
            mt={4}
            alignSelf='flex-start'
            rounded={'$full'}
            fontWeight='$semibold'
            fontSize='$sm'
            mb='$2'>
            {product.category}
          </Text>

          <Box flexDirection='row'>
            <Text flexShrink={1} size='sm' opacity={0.7} numberOfLines={2}>
              {product.description}
            </Text>
          </Box>
          <HStack
            flex={1}
            justifyContent='space-between'
            alignItems='center'
            mt={6}>
            <Text
              color='#16B55A'
              px={6}
              py={1}
              mt={4}
              alignSelf='flex-start'
              rounded={'$full'}
              fontWeight='$bold'
              fontSize='$md'
              mb='$2'>
              ${product.price}
            </Text>
            <Icon as={ArrowRightIcon} />
          </HStack>
        </VStack>
      </HStack>
      <Button
        onPress={handleDeleteProduct}
        action='negative'
        variant='outline'
        borderRadius='$full'
        size='xs'>
        <ButtonIcon as={TrashIcon} color='$red600' size='sm' />
        <ButtonText
          ml={4}
          fontWeight='$medium'
          fontSize='$sm'
          $dark-color='$textDark300'>
          Eliminar Producto
        </ButtonText>
      </Button>
    </Card>
  )
}

export default ProductCard
