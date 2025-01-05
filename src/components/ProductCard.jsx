import React from "react";
import imageBrownie from "../../assets/images/image-brownie-thumbnail.jpg";
import addButton from "../../assets/images/icon-add-to-cart.svg";
const ProductCard = () => {
  return (
    <>
      <div className=" ">
        <div className="relative w-96">
          <img
            className=" w-96 h-56 rounded-lg"
            src={imageBrownie}
            alt="Brownie"
          />
          <button className="flex absolute left-1/2 transform -translate-x-1/2 bottom-[-1rem] bg-white border border-rose-900 rounded-2xl px-2 py-1 gap-2">
            <img src={addButton} alt="Add to Cart" />
            Add to Cart
          </button>
        </div>
        <div className="flex flex-col my-8">
          <p className="font-normal text-sm text-gray-400 ">Waffle</p>
          <h3 className="text-base font-semibold">Waffle with Berries</h3>
          <p className=" text-rose-900">$6.50</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
