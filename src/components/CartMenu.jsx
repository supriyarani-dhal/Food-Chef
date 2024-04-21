/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { MENU_IMG_URL, NONVEG_MARK, VEG_MARK } from "../utils/constants";
import { addItems, removeitems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const CartMenu = ({ menuCard, count, restaurant }) => {
  const { isVeg, name, price, defaultPrice, imageId } = menuCard?.card?.info;

  const dispatch = useDispatch();

  const handleAddButton = (menuCard, restaurant) => {
    dispatch(addItems({ menuCard, restaurant }));
  };

  const handleRmvButton = (menuCard) => {
    dispatch(removeitems(menuCard));
  };

  return (
    <>
      <div className="font-bold text-start text-red-950 text-xl underline">
        {restaurant.cards[2].card.card.info.name}
      </div>
      <div className="flex my-2">
        <div className="my-1 w-full">
          <div className="flex">
            {isVeg ? (
              <img className="w-5 h-5" src={VEG_MARK} />
            ) : (
              <img className="w-9 h-9" src={NONVEG_MARK} />
            )}
            <p className="text-lg font-bold ">{name}</p>
          </div>
          <p className="m-1  text-start ml-10">
            ₹ {defaultPrice / 100 || price / 100}
          </p>
          <p className="m-1  text-start ml-10">
            ₹{restaurant.cards[2].card.card.info.feeDetails.totalFee / 100}{" "}
            delivery fee will be applicable
          </p>
        </div>
        <div>
          <img
            className="h-24 object-cover rounded-md"
            src={MENU_IMG_URL + imageId}
          />
          <div className=" flex justify-between w-24 h-8 my-2 mx-8 border-2 border-solid border-gray-300 rounded-md text-green-500 font-bold bg-white">
            <button
              onClick={() => handleRmvButton(menuCard)}
              className="hover:bg-gray-200 cursor-pointer w-1/3"
            >
              -
            </button>
            <p>{count}</p>
            <button
              onClick={() => handleAddButton(menuCard, restaurant)}
              className="hover:bg-gray-200 cursor-pointer w-1/3"
            >
              +
            </button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default CartMenu;
