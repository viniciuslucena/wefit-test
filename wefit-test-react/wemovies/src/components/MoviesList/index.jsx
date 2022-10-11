import { useEffect, useState } from "react"
import { ImSpinner2 } from 'react-icons/im'

import ProductsService from "../../services/ProductsService"
import { MovieCard } from "../MovieCard"

import * as S from './styles'

export const MoviesList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    async function getProducts() {
      const productsList =  await ProductsService.listProducts()
      setLoading(false)
      setProducts(productsList)
    }

    getProducts()
  }, [])

  return (
    <S.MoviesList>
      {loading ? (
        <S.Loading>
          <ImSpinner2 size="55px" />
        </S.Loading>
      ) : (
        products.map(product => (
          <MovieCard
            title={product.title}
            price={product.price}
            image={product.image}
            key={product.id}
          />
        ))
      )}
    </S.MoviesList>
  )
}
