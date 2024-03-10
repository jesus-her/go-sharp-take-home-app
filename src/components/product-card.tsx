import React from 'react'
import {VStack, Heading, Text, Card} from '@gluestack-ui/themed'
import type {IProduct} from '../types/product.types'

const ProductCard = ({product}: {product: IProduct}) => {
  return (
    <Card p='$5' borderRadius='$lg'>
      {/* <Image
        mb="$6"
        h={240}
        width="$full"
        borderRadius="$md"
        source={{
          uri: "https://images.unsplash.com/photo-1595231712325-9fedecef7575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        }}
      /> */}
      <Text
        fontSize='$sm'
        fontStyle='normal'
        fontFamily='$heading'
        fontWeight='$normal'
        lineHeight='$sm'
        mb='$2'
        sx={{
          color: '$textLight700',
          _dark: {
            color: '$textDark200',
          },
        }}>
        {product.category}
      </Text>
      <VStack mb='$6'>
        <Heading size='md' fontFamily='$heading' mb='$4'>
          {product.name}
        </Heading>
        <Text size='sm' fontFamily='$heading'>
          {product.description}
        </Text>
      </VStack>
    </Card>
  )
}

export default ProductCard
