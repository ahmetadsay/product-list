
import emptyCard from "../../assets/images/illustration-empty-cart.svg";
import deleteButton from "../../assets/images/icon-remove-item.svg";

const Cart = ({ cart, onRemoveItem }) => {
  const totalAmount = cart.reduce((acc, item) => acc + item.total, 0);
  console.log(cart);

  return (
    <>
      {cart.length ? (
        <div className="p-4 min-w-96 h-1/4 bg-white border rounded-lg">
          <h2 className="text-lg text-rose-900 font-semibold mb-4">
            Your Cart ({cart.length})
          </h2>
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <div className="flex flex-col">
                  <span>
                    {item.product.name} x {item.quantity}
                  </span>
                  <span>${item.total.toFixed(2)}</span>
                  <span className="text-gray-400 text-sm">
                    {item.product.category}
                  </span>
                  <span className="text-gray-400 text-sm">
                    ${item.product.price}
                  </span>
                </div>
                <button onClick={() => onRemoveItem(item.product)} className="ml-4 flex items-center justify-center w-8 h-8 rounded-full border border-rose-900 hover:bg-gray-100">
                  <img src={deleteButton} alt="Remove" className="w-4 h-4 " />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col min-w-[20rem]  top-2 right-2 items-center justify-center gap-4  h-72 bg-white rounded-xl ">
          <h1>Your Cart (0)</h1>
          <img src={emptyCard} />
          <p>Your added item will appear here</p>
        </div>
      )}
    </>
  );
};

export default Cart;
