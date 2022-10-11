import { Link } from "react-router-dom";

import * as S from "./styles";
import { Button } from "../../components/Button";

export const EmptyCart = () => {
  return (
    <S.EmptyCart>
      <p>Parece que não há nada por aqui :(</p>
      <img src="assets/empty-cart.png" alt="Carrinho vazio" />
      <hr />
      <Link to="/" className="btnContainer">
        <Button>VOLTAR</Button>
      </Link>
    </S.EmptyCart>
  );
};
