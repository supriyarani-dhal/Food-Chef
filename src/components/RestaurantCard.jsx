/* eslint-disable react/prop-types */
import { CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="h-64 w-64 my-10 mx-5 hover:cursor-pointer hover:scale-95">
      <img
        className="h-40 w-full rounded-2xl object-cover"
        src={CARD_IMG_URL + resData.info.cloudinaryImageId}
      />
      <div className="flex justify-between">
        <div className="w-52 break-words ">
          <p className="font-bold text-lg">{resData.info.name}</p>
          <p>{resData.info.cuisines.join(",")}</p>
          <p className="text-gray-600">{resData.info.areaName}</p>
        </div>
        <div>
          <h4 className="font-bold text-lg text-green-700">
            {resData.info.avgRating + " *"}{" "}
          </h4>
          <h4 className="font-bold text-sm">
            {resData.info.sla.deliveryTime + "mins"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
