import { useSelector, useDispatch } from "react-redux";
import CartMenu from "./CartMenu";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearButton = () => {
    dispatch(clearCart());
  };

  return (
    <center>
      {cartItems.length === 0 ? (
        <div className="font-bold text-3xl my-6">
          Your cart is empty!! .Please add something to the cart.
        </div>
      ) : (
        <>
          <div>
            <button
              onClick={handleClearButton}
              className="w-28 h-8 bg-orange-300 hover:bg-orange-200 rounded-md my-6 p-1 font-bold"
            >
              Clear the cart
            </button>
          </div>
          <div className="my-10 mx-56 flex justify-center">
            <div className="w-1/2 bg-gray-100 p-4">
              {cartItems.map((i) => (
                <CartMenu
                  key={i.item.card.info.id}
                  menuCard={i.item}
                  count={i.count}
                  restaurant={i.restaurant}
                />
              ))}
            </div>
            <div className="mx-4 w-1/3">
              <p className="font-bold text-lg">Bill Details</p>
              <div className="flex justify-between mb-4">
                <div>Item Totals</div>
                <div>
                  {cartItems.reduce((acc, curr) => {
                    return (
                      acc +
                      ((curr.count * curr.item.card.info.price) / 100 ||
                        (curr.count * curr.item.card.info.defaultPrice) / 100)
                    );
                  }, 0)}
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div>Delivery Fee</div>
                <div>
                  {cartItems.reduce((acc, curr) => {
                    return (
                      acc +
                      curr.restaurant.cards[2].card.card.info.feeDetails
                        .totalFee /
                        100
                    );
                  }, 0)}
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div>GST and Restaurant Charges</div>
                <div>98.52</div>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg my-4">
                <div>To Pay</div>
                <div>
                  {cartItems.reduce((acc, curr) => {
                    return (
                      acc +
                      ((curr.count * curr.item.card.info.price) / 100 ||
                        (curr.count * curr.item.card.info.defaultPrice) / 100)
                    );
                  }, 0) +
                    98.52 +
                    cartItems.reduce((acc, curr) => {
                      return (
                        acc +
                        curr.restaurant.cards[2].card.card.info.feeDetails
                          .totalFee /
                          100
                      );
                    }, 0)}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </center>
  );
};

export default Cart;
