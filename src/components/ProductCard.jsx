/* eslint-disable react/prop-types */


import addButton from "../../assets/images/icon-add-to-cart.svg";
const ProductCard = ({ product, onAddToCart }) => {

   

  return (
    <>
      <div className=" mx-4 ">
        <div className="relative w-72">
          <img
            className=" w-72 h-56 rounded-lg"
            src={product.image.thumbnail}
            alt={product.name}
          />
          <button onClick={() => onAddToCart(product)}  className="flex absolute left-1/2 transform -translate-x-1/2 bottom-[-1rem] bg-white border border-rose-900 rounded-2xl px-2 py-1 gap-2">
            <img src={addButton} alt="Add to Cart" />
            Add to Cart
          </button>
        </div>
        <div className="flex flex-col my-8">
          <p className="font-normal text-sm text-gray-400 ">
            {product.category}
          </p>
          <h3 className="text-base font-semibold">{product.name}</h3>
          <p className=" text-rose-900">$ {product.price}</p>
        </div>
      </div>
    </>
  );
};


export default ProductCard;

