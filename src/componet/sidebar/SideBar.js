import React, { useState } from "react";
import img from "../../img/images.jpeg";

function Header({ cart }) {
  const [showDialog, setShowDialog] = useState(false);

  // Toggle the dialog visibility
  function show() {
    setShowDialog((prev) => !prev);
  }

  // Close the dialog
  function close() {
    setShowDialog(false);
  }
  const [num, setNum] = useState(cart.count);
  function increse() {
    setNum((pre) => pre + 1);
    console.log(num);
  }
  function decrese() {
    setNum((pre) => pre - 1);
    console.log(num);
  }

  return (
    <div className="flex items-center justify-between w-full font-sans">
      <span className="flex items-center gap-x-8">
        <img src={img} className="w-[70px] h-[70px] rounded-full" alt="" />
        <h1 className="text-3xl font-bold text-yellow-200/70">
          ELEGANT GALLERY
        </h1>
      </span>

      <span
        onClick={show}
        className="px-3 py-1 rounded-md cursor-pointer bg-yellow-200/70"
      >
        CART {cart.count}
      </span>

      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 text-gray-900 bg-white shadow-xl rounded-2xl">
            <h2 className="mb-4 text-2xl font-bold">🛒 Cart Updated</h2>
            <p className="mb-2">
              You have{" "}
              <button onClick={decrese} className="p-1 py-0 bg-yellow-400">
                -
              </button>{" "}
              <strong>{cart.count}</strong>{" "}
              <button onClick={increse} className="p-1 py-0 bg-yellow-400">
                +
              </button>{" "}
              item(s) in your cart.
            </p>
            <p></p>
            <p>Total: ${cart.total}</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={close}
                className="px-4 py-2 text-gray-800 bg-gray-200 rounded-xl hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
