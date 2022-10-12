import { useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";

import { Button } from "../Button";
import * as S from "./styles";
import { formatPrice } from "../../utils/formatPrice";
import { CartContext } from "../../context/CartContext";

export const MovieCard = ({ title, price, image }) => {
  const { productsInCart, setProductsInCart } = useContext(CartContext);

  const handleAddProduct = (titleToAdd) => {
    const copyProducts = [...productsInCart];
    const product = copyProducts.find(
      (product) => product.title === titleToAdd
    );

    if (!product) {
      copyProducts.push({
        title,
        price,
        image,
        quantity: 1,
      });
    } else {
      product.quantity = product.quantity + 1;
    }

    setProductsInCart(copyProducts);
  };

  const productQuantity = (productTitle) => {
    const product = productsInCart.find(
      (product) => product.title === productTitle
    );
    return product?.quantity > 0 ? product?.quantity : 0;
  };

  return (
    <S.Card>
      <S.Image src={image} alt="Movie cover" />
      <p className="movieTitle">{title}</p>
      <p className="moviePrice">{formatPrice(price)}</p>
      <Button onClick={() => handleAddProduct(title)}>
        <MdAddShoppingCart size="12px" />
        <p className="quantity">{productQuantity(title)}</p>
        <div className="buttonText">
          <p>ADICIONAR AO CARRINHO</p>
        </div>
      </Button>
    </S.Card>
  );
};
