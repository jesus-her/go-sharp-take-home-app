import React, {useState} from 'react'
import {View, Text, TextInput, Alert, Button, StyleSheet} from 'react-native'
import {useDispatch} from 'react-redux'
import {createProductThunk} from '../redux/thunks/product.thunks'
import {AppDispatch} from '@/redux/store'

const HomeScreen = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
  })

  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (name: string, value: string) => {
    setProductData(prevData => ({
      ...prevData,
      [name]: name === 'price' ? value.replace(/[^0-9]/g, '') : value,
    }))
  }

  const handleSubmit = () => {
    // Validación básica
    if (
      !productData.name ||
      !productData.description ||
      !productData.category ||
      !productData.price
    ) {
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
    setProductData({name: '', description: '', category: '', price: ''})
  }

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder='Product Name'
        value={productData.name}
        onChangeText={value => handleChange('name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder='Product Description'
        value={productData.description}
        onChangeText={value => handleChange('description', value)}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder='Category'
        value={productData.category}
        onChangeText={value => handleChange('category', value)}
      />
      <TextInput
        style={styles.input}
        placeholder='Price'
        value={productData.price}
        onChangeText={value => handleChange('price', value)}
        keyboardType='numeric'
      />
      <Button title='Add Product' onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
})

export default HomeScreen
