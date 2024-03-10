import React from 'react'

import AddProductForm from '../components/forms/add-product-form'
import {
  Box,
  Card,
  Heading,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed'

const HomeScreen = () => {
  return (
    <Box flex={1} display='flex' justifyContent='flex-start' p={24}>
      <KeyboardAvoidingView behavior='padding'>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <VStack>
            <Box mb={24}>
              <Heading>¡Pon algo a la venta!</Heading>
              <Text>
                Llena el formulario de abajo para publicar un producto.
              </Text>
            </Box>
            <Card>
              <AddProductForm />
            </Card>
          </VStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  )
}

export default HomeScreen
