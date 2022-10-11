import { MdAddShoppingCart } from 'react-icons/md'

import { Button } from '../Button'
import * as S from './styles'

export const MovieCard = ({
  title,
  price,
  image
}) => {
  const formatPrice = (moviePrice) => {
    return moviePrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  }

  return (
    <S.Card>
      <S.Image src={image} alt="Movie cover" />
      <p className='movieTitle'>{title}</p>
      <p className='moviePrice'>{formatPrice(price)}</p>
      <Button>
        <MdAddShoppingCart size="12px" />
        <p className='quantity'>2</p>
        <div className='buttonText'>
          <p>
            ADICIONAR AO CARRINHO
          </p>
        </div>
      </Button>
    </S.Card>
  )
}
