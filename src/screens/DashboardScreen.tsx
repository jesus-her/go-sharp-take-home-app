import React, {useEffect} from 'react'
import {AppDispatch} from '@/redux/store'
import {View, Text, ActivityIndicator, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {selectAllProducts, selectLoading} from '../redux/slices/product.slice'
import {fetchProductsThunk} from '../redux/thunks/product.thunks'

const DashboardProducts = () => {
  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector(selectAllProducts)
  const loading = useSelector(selectLoading)

  useEffect(() => {
    dispatch(fetchProductsThunk())
  }, [dispatch])

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.name}
      renderItem={({item}) => (
        <View>
          <Text>{item.name}</Text>
          {/* ... otros detalles del producto */}
        </View>
      )}
    />
  )
}

export default DashboardProducts
