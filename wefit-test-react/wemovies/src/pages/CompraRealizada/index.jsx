import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { CartContext } from "../../context/CartContext";
import * as S from "./styles";

export const CompraRealizada = () => {
  const { setProductsInCart } = useContext(CartContext);

  useEffect(() => {
    setProductsInCart([]);
  }, [setProductsInCart]);

  return (
    <S.Container>
      <Header />
      <S.FinishContainer>
        <p>Compra realizada com sucesso!</p>
        <img src="assets/completed-order.png" alt="Compra finalizada" />
        <div className="btnContainer">
          <Link to="/">
            <Button>VOLTAR</Button>
          </Link>
        </div>
      </S.FinishContainer>
    </S.Container>
  );
};
