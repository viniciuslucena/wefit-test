import { useContext } from "react"

import { Header } from "../../components/Header"
import { CartContext } from "../../context/CartContext"
import { CartWithItem } from "./CartWithItem"
import { EmptyCart } from "./EmptyCart"

import * as S from './styles'

export const Carrinho = () => {
  const { productsInCart } = useContext(CartContext)

  return (
    <S.Container>
      <Header />
      {productsInCart.length <= 0 ? (
        <EmptyCart />
      ) : (
        <CartWithItem />
      )}
    </S.Container>
  )
}
