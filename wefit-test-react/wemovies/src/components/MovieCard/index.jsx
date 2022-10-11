import { useContext } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import { Button } from '../Button'
import * as S from './styles'
import { formatPrice } from '../../utils/formatPrice'
import { CartContext } from '../../context/CartContext'

export const MovieCard = ({
  title,
  price,
  image
}) => {
  const { productsInCart, setProductsInCart } = useContext(CartContext)

  const handleAddProduct = () => {
    setProductsInCart(prevState => [
      ...prevState,
      {
        title,
        price,
        image
      }
    ])
  }

  const productQuantity = (title) => {
    return productsInCart.filter(product => (
      product.title === title
    )).length
  }

  return (
    <S.Card>
      <S.Image src={image} alt="Movie cover" />
      <p className='movieTitle'>{title}</p>
      <p className='moviePrice'>{formatPrice(price)}</p>
      <Button onClick={handleAddProduct}>
        <MdAddShoppingCart size="12px" />
        <p className='quantity'>{productQuantity(title)}</p>
        <div className='buttonText'>
          <p>
            ADICIONAR AO CARRINHO
          </p>
        </div>
      </Button>
    </S.Card>
  )
}
