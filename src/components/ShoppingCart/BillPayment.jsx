import React, { useEffect, useState } from "react";

function BillPayment(props) {
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const shipping = 62000;

  const calculate = (cart) => {
    setSubtotal(
      props.cart
        .map((item) => item.product.price * item.qty)
        .reduce((prev, next) => prev + next)
    );

    setTax(subtotal * (1 / 10));

    setTotal(subtotal && tax ? subtotal + shipping + tax : 0);
  };

  useEffect(() => {
    calculate(props.cart);
  });

  return (
    <div className="md:w-1/3 xl:w-1/4 w-full bg-gray-100">
      <div className="md:h-screen px-14 py-20">
        <div>
          <p className="text-4xl font-black leading-9 text-gray-800">
            Bill payment
          </p>
          <div className="flex items-center justify-between pt-16">
            <p className="text-base leading-none text-gray-800">Subtotal</p>
            <p className="text-base leading-none text-gray-800">
              {props.rupiahFormat(subtotal)}
            </p>
          </div>
          <div className="flex items-center justify-between pt-5">
            <p className="text-base leading-none text-gray-800">Shipping</p>
            <p className="text-base leading-none text-gray-800">
              {subtotal && tax
                ? props.rupiahFormat(shipping)
                : props.rupiahFormat(0)}
            </p>
          </div>
          <div className="flex items-center justify-between pt-5">
            <p className="text-base leading-none text-gray-800">Tax (10%)</p>
            <p className="text-base leading-none text-gray-800">
              {props.rupiahFormat(tax)}
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
            <p className="text-2xl leading-normal text-gray-800">Total</p>
            <p className="text-2xl font-bold leading-normal text-right text-gray-800">
              {props.rupiahFormat(total)}
            </p>
          </div>
          <button
            className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
            onClick={props.setQtyEmpty}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default BillPayment;
