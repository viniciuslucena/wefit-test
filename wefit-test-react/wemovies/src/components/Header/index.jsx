import { IoMdBasket } from 'react-icons/io'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <h1>WeMovies</h1>
      <S.BasketSession>
        <div>
          <p className='myCart'>Meu Carrinho</p>
          <p className='totalItens'>0 itens</p>
        </div>
        <IoMdBasket size='32px' />
      </S.BasketSession>
    </S.Header>
  )
}
