import styles from "./cart.module.css";
import { CartHeader } from "./cartHeader";
import { CartList } from "./cartList";
import { TotalCart } from "./totalCart";

export const Cart = ({cart,setCart,convertPrice}) => {
  const handleQuantitiy =(type,id,quantity)=>{
    const found = cart.filter((el)=>el.id === id)[0];
    const idx = cart.indexOf(found);
    const cartItem ={
      id:found.id,
      image:found.image,
      name:found.name,
      price:found.price,
      quantity:quantity,
      provider:found.provider
    }
    if(type==="plus"){
      setCart([...cart.slice(0,idx),cartItem,...cart.slice(idx+1)])
    }else{
      if(quantity===0)return
      setCart([...cart.slice(0,idx),cartItem,...cart.slice(idx+1)])
    }
  };
  //삭제버튼
  const handleRemove =(id)=>{
    setCart(cart.filter((el)=>el.id !==id)) 
  }
  return (
    <>
      <header className={styles.header}>
        <h1>장바구니</h1>
      </header>
      <CartHeader/>
      {
        cart.length ===0 ?(
          <div className={styles.not}>
              <h2>아무것도없어</h2>
              <p>원하는 상품을 장바구니에 추가</p>
          </div>
        ):cart.map((cart)=>{
          return <CartList
            key={`key-${cart.id}`}
              cart={cart} 
             setCart={setCart}
             convertPrice={convertPrice}
             handleQuantitiy={handleQuantitiy}
             handleRemove={handleRemove}
          />
        })
     }

      {cart.length ==-0? "":<TotalCart/>}
 
 
      <TotalCart/>
    </>
  );
};
