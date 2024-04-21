/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import Menu from "./Menu";

const RestaurantCatagory = ({ catagory, showItem, setShowIndex, resInfo }) => {
  const { title, itemCards } = catagory.card?.card;

  return (
    <div>
      <div className="flex justify-between bg-gray-100 h-9 p-1 m-3 rounded-md shadow-md">
        <p className="font-bold text-xl">
          {title}({itemCards.length})
        </p>
        <button onClick={setShowIndex} className="cursor-pointer">
          🔽
        </button>
      </div>
      <ul>
        {showItem &&
          itemCards.map((item) => (
            <Menu key={item.card.info.id} menuCard={item} resInfo={resInfo} />
          ))}
      </ul>
    </div>
  );
};

export default RestaurantCatagory;
