import { Cart } from "../components/cart/cart";

const Basket = ({cart,setCart,convertPrice}) => {
  return <Cart convertPrice={convertPrice} 
  cart={cart} setCart={setCart}
  />;
};

export default Basket;
