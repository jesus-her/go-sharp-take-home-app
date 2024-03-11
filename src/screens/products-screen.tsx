import React, {useEffect, useState} from 'react'
import {AppDispatch} from '@/redux/store'
import {FlatList, RefreshControl} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {selectAllProducts, selectLoading} from '../redux/slices/product.slice'
import {fetchProductsThunk} from '../redux/thunks/product.thunks'
import ProductCard from '../components/product-card'
import {Center, Text, Spinner} from '@gluestack-ui/themed'
import EmptyProducts from '../components/empty-products'

const ProductsScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector(selectAllProducts)
  const loading = useSelector(selectLoading)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    dispatch(fetchProductsThunk())
  }, [dispatch])

  const onRefresh = () => {
    setRefreshing(true)
    dispatch(fetchProductsThunk())
    setTimeout(() => {
      setRefreshing(false)
    }, 1000) // Refresh indicator will be visible for at least 1 second
  }

  if (loading) {
    return (
      <Center h='100%'>
        <Spinner size='large' />
        <Text opacity={0.5} size='md'>
          Loading products...
        </Text>
      </Center>
    )
  }

  return (
    <FlatList
      data={products}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListEmptyComponent={<EmptyProducts />}
      contentContainerStyle={{
        paddingBottom: 100,
        gap: 24,
        padding: 24,
      }}
      keyExtractor={item => `${item.id}`}
      renderItem={({item: product}) => <ProductCard product={product} />}
    />
  )
}

export default ProductsScreen
