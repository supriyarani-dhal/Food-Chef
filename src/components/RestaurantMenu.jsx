/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { ITEM_CATAGORY, MENU_URL } from "../utils/constants";
import RestaurantCatagory from "./RestaurantCatagory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [catagories, setCatagories] = useState([]);
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(0);
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();
    setResInfo(json.data);

    setCatagories(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === ITEM_CATAGORY
      )
    );
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, locality, avgRatingString, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;
  const { slaString, lastMileTravelString } =
    resInfo?.cards[2]?.card?.card?.info?.sla;

  return (
    <div className="mx-56 my-10">
      <div className="m-3 flex justify-between">
        <div>
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-gray-500">{cuisines.join(",")}</p>
          <p className="text-gray-500">{locality}</p>
        </div>
        <div>
          <p className="text-2xl font-bold">{avgRatingString}⭐</p>
          <p className="text-gray-500">{totalRatingsString}</p>
        </div>
      </div>
      <hr />
      <div className="m-3 flex justify-between">
        <div className="flex">
          <i className="fa-solid fa-clock text-sm mx-1"></i>
          <p className="text-base font-bold">{slaString} | </p>
          <i className="fa-solid fa-road text-sm mx-1"></i>
          <p className="text-base font-bold"> {lastMileTravelString}</p>
        </div>
        <div className="flex">
          <p className="text-base font-bold">
            {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
          </p>
        </div>
      </div>
      <hr />
      <div className="flex h-16 items-center">
        <p className="text-xl">Veg Only</p>
        <button
          className="h-6 w-6 ml-3 cursor-pointer bg-gray-300 border-2 rounded-md"
          onClick={() =>
            setCatagories(
              catagories.filter((c) =>
                c.card?.card?.itemCards.filter((item) => item.card?.info?.isVeg)
              )
            )
          }
        ></button>
      </div>
      <hr />
      <ul className="mt-7">
        {catagories.map((c, index) => (
          <li>
            <RestaurantCatagory
              key={c.card?.card?.title}
              resInfo={resInfo}
              catagory={c}
              setShowIndex={() => {
                setShowIndex(index);
                setExpand(!expand);
              }}
              showItem={index === showIndex && expand}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
