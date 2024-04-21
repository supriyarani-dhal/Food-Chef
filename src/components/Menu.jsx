/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { MENU_IMG_URL, NONVEG_MARK, VEG_MARK } from "../utils/constants";
import { addItems, removeitems } from "../utils/cartSlice";
import { useAuth0 } from "@auth0/auth0-react";

const Menu = ({ menuCard, resInfo }) => {
  const cartItems = useSelector((store) => store.cart.items);
  const { isAuthenticated } = useAuth0();

  const { isVeg, name, price, defaultPrice, description, imageId } =
    menuCard?.card?.info;

  const index = cartItems.findIndex(
    (x) => x.item?.card?.info?.id === menuCard.card?.info?.id
  );

  const dispatch = useDispatch();

  const handleAddButton = (menuCard, resInfo) => {
    if (isAuthenticated) {
      dispatch(addItems({ menuCard, resInfo }));
    } else {
      alert("Please😌 Sign in to add the Item into the Cart");
    }
  };

  const handleRmvButton = (menuCard) => {
    dispatch(removeitems(menuCard));
  };

  return (
    <div className="flex my-6 w-full">
      <div className="w-4/5 my-1">
        {isVeg ? (
          <img className="w-5" src={VEG_MARK} />
        ) : (
          <img className="w-9" src={NONVEG_MARK} />
        )}
        <p className="my-1 text-xl font-bold ">{name}</p>
        <p className="my-1 text-xl">₹ {defaultPrice / 100 || price / 100}</p>
        <p className="my-1 text-gray-500">{description}</p>
      </div>
      <div className="right">
        <img
          className="w-40 h-32 object-cover rounded-md"
          src={MENU_IMG_URL + imageId}
        />
        {index === -1 ? (
          <button
            onClick={() => handleAddButton(menuCard, resInfo)}
            className="hover:bg-gray-200 w-24 h-8 my-2 mx-8 border-2 border-solid border-gray-300 rounded-md text-green-500 font-bold bg-white cursor-pointer"
          >
            Add +
          </button>
        ) : (
          <div className=" flex justify-between w-24 h-8 my-2 mx-8 border-2 border-solid border-gray-300 rounded-md text-green-500 font-bold bg-white">
            <button
              onClick={() => handleRmvButton(menuCard)}
              className="hover:bg-gray-200 cursor-pointer w-1/3"
            >
              -
            </button>
            <p>{cartItems[index].count}</p>
            <button
              onClick={() => handleAddButton(menuCard)}
              className="hover:bg-gray-200 cursor-pointer w-1/3"
            >
              +
            </button>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Menu;
