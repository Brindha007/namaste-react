import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemsList";
import { clearCart } from "../Redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg "
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length == 0 && (
          <>
            <h1 className="font-bold">Your cart is empty </h1>
            <h2>You can go to home page to view more restaurants</h2>
          </>
        )}
        <MenuItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
