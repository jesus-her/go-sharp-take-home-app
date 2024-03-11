import React, {useEffect} from 'react'
import {AppDispatch} from '@/redux/store'
import {FlatList} from 'react-native'
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

  useEffect(() => {
    dispatch(fetchProductsThunk())
  }, [dispatch])

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
