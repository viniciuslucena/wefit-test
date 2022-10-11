import { Header } from "../../components/Header"
import { MoviesList } from "../../components/MoviesList"

import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <Header />
      <MoviesList />
    </S.Container>
  )
}
