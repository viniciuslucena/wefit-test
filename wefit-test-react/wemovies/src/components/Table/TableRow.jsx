import { IoMdTrash } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

import {
  addItem,
  calculateSubtotal,
  inputQuantity,
  removeItem,
  removeOneItem,
} from "../../services/CartService";
import { formatPrice } from "../../utils/formatPrice";
import { CartContext } from "../../context/CartContext";

export const TableRow = ({ id, product }) => {
  const { productsInCart, setProductsInCart } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(product.quantity);

  const handleChangeQuantity = (e, product) => {
    if (e.key === "Enter") {
      inputQuantity(
        Number(e.target.value),
        product,
        productsInCart,
        setProductsInCart
      );
    }
  };

  useEffect(() => {
    setProductQuantity(product.quantity);
  }, [product.quantity]);

  return (
    <tr key={id}>
      <td>
        <img src={product.image} alt="Capa do filme" />
      </td>
      <td>
        {product.title} <br />
        {formatPrice(product.price)}
      </td>
      <td>
        <div className="movieQuantity">
          <span
            onClick={() =>
              removeOneItem(product, productsInCart, setProductsInCart)
            }
          >
            <AiOutlineMinusCircle />
          </span>
          <input
            type="number"
            className="quantity"
            value={productQuantity}
            onChange={(e) => setProductQuantity(Number(e.target.value))}
            onKeyDown={(e) => handleChangeQuantity(e, product)}
          />
          <span
            onClick={() => addItem(product, productsInCart, setProductsInCart)}
          >
            <AiOutlinePlusCircle />
          </span>
        </div>
      </td>
      <td>{calculateSubtotal(product, productsInCart)}</td>
      <td>
        <IoMdTrash
          size="24px"
          onClick={() => removeItem(product, productsInCart, setProductsInCart)}
        />
      </td>
    </tr>
  );
};
