import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch} from '../../redux/store'
import {
  VStack,
  Button,
  ButtonText,
  SelectItem,
  ButtonSpinner,
} from '@gluestack-ui/themed'
import FormInputUi from '../ui/form-input-ui'

import {createProductThunk} from '../../redux/thunks/product.thunks'
import {Alert} from 'react-native'
import FormSelectUi from '../ui/form-select-ui'
import {selectLoading} from '../../redux/slices/product.slice'

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
  })

  const dispatch = useDispatch<AppDispatch>()
  const isLoading = useSelector(selectLoading)

  const handleChange = (name: string, value: string) => {
    setProductData(prevData => ({
      ...prevData,
      [name]: name === 'price' ? value.replace(/[^0-9]/g, '') : value,
    }))
  }

  const validAllFields =
    !productData.name ||
    !productData.description ||
    !productData.category ||
    !productData.price
  const handleSubmit = () => {
    // Validación básica
    if (validAllFields) {
      Alert.alert('Error', 'Please fill all the fields.')
      return
    }

    // Convertir price a un número antes de despachar
    const productToSubmit = {
      ...productData,
      price: parseFloat(productData.price),
    }

    dispatch(createProductThunk(productToSubmit)).then(() =>
      Alert.alert(
        'Success',
        'Product added successfully to "products" collection',
      ),
    )

    // Resetear el formulario
    setProductData({
      name: '',
      description: '',
      category: productData.category,
      price: '',
    })
  }

  return (
    <VStack flex={1}>
      <FormInputUi
        maxLength={25}
        isRequired
        label='Product Name'
        type='text'
        placeholder='Enter the name of product'
        value={productData.name}
        onChangeText={value => handleChange('name', value)}
      />

      <FormInputUi
        maxLength={70}
        isRequired
        label='Product Description'
        type='text'
        placeholder='Enter the description of product'
        value={productData.description}
        onChangeText={value => handleChange('description', value)}
      />
      <FormSelectUi
        isRequired
        label='Category'
        value={productData.category}
        onValueChange={value => handleChange('category', value)}
        options={
          <React.Fragment>
            <SelectItem label='Running Shoes' value='Running Shoes' />
            <SelectItem label='Boots' value='Boots' />
            <SelectItem label='Sneakers' value='Sneakers' />
            <SelectItem label='Sandals' value='Sandals' />
          </React.Fragment>
        }
      />

      <FormInputUi
        maxLength={5}
        isRequired
        keyboardType='numeric'
        label='Price'
        type='text'
        placeholder='Enter the price of the product'
        value={productData.price}
        onChangeText={value => handleChange('price', value)}
      />

      <Button
        size='md'
        variant='solid'
        action='primary'
        isDisabled={validAllFields || isLoading}
        onPress={handleSubmit}>
        {isLoading && <ButtonSpinner mr='$1' />}
        <ButtonText>
          {isLoading ? 'Creating product...' : 'Add Product'}
        </ButtonText>
      </Button>
    </VStack>
  )
}

export default AddProductForm
