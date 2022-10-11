import { useContext } from "react";
import { IoMdBasket } from "react-icons/io";

import { CartContext } from "../../context/CartContext";
import * as S from "./styles";

export const Header = () => {
  const { productsInCart } = useContext(CartContext);

  return (
    <S.Header>
      <h1>WeMovies</h1>
      <S.BasketSession>
        <div>
          <p className="myCart">Meu Carrinho</p>
          {productsInCart.length === 1 ? (
            <p className="totalItens">{productsInCart.length} item</p>
          ) : (
            <p className="totalItens">{productsInCart.length} itens</p>
          )}
        </div>
        <IoMdBasket size="32px" />
      </S.BasketSession>
    </S.Header>
  );
};
