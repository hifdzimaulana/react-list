import React, { Component } from "react";

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [
        {
          product: {
            brand: "Marhen J.",
            name: "MARHEN J. Sunny Red",
            img_url:
              "https://dynamic.zacdn.com/68_vIh8aCOxPHhOKt_Rl4Tlb9To=/fit-in/346x500/filters:quality(90):fill(ffffff)/https://static-id.zacdn.com/p/marhen-j-6358-5426892-1.jpg",
            properties: {
              storage: "3 divided pockets",
              coating: "PVC waterproof",
            },
            price: 1456000,
          },
          qty: 0,
        },
        {
          product: {
            brand: "buttonscarves",
            name: "Luxe Signature Gleaming Brooch",
            img_url:
              "https://storage.googleapis.com/hijup-production-sg-core/system/product_image/image/450317/big_207094-2.jpg",
            properties: {
              color: "Gold",
              composition: "95% White gold, 3% Diamond, 2% Steel",
            },
            price: 679500,
          },
          qty: 0,
        },
      ],

      invoice: {
        subtotal: 0,
        tax: 0,
      },
    };
  }

  rupiahFormat = (nominal) => {
    return new Intl.NumberFormat("id", {
      currency: "IDR",
      style: "currency",
    }).format(nominal);
  };

  incQty = (index) => {
    let { cart } = this.state;
    cart[index].qty += 1;
    this.setState({ cart });
  };

  decQty = (index) => {
    let { cart } = this.state;
    cart[index].qty > 0 && (cart[index].qty -= 1);
    this.setState({ cart });
  };

  render() {
    return (
      <div className="flex md:flex-row flex-col justify-end" id="cart">
        <div
          className="grow lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden"
          id="scroll"
        >
          <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
            Cart
          </p>
          {this.state.cart.map((value, index) => (
            <div
              className="md:flex items-center mt-14 py-8 gap-9 border-t border-gray-200"
              key={index}
            >
              <div
                className="xl:w-52 xl:h-64 bg-cover bg-center rounded-md"
                style={{
                  backgroundImage: `url("${value.product.img_url}")`,
                }}
              ></div>
              <div className="md:pl-3 md:w-3/4">
                <div className="flex items-center justify-between w-full pt-1">
                  <div className="grid xl:gap-20 md:gap-6 justify-around">
                    <div id="product-brand">
                      <p className="uppercase font-medium">
                        {value.product.brand}
                      </p>
                      <p className="text-xl font-black leading-none text-gray-800">
                        {value.product.name}
                      </p>
                    </div>
                    <div id="product-properties">
                      {Object.keys(value.product.properties).map(
                        (property, propertyIndex) => (
                          <p key={propertyIndex} className="text-xs">
                            <span className="font-bold uppercase">
                              -{property}
                            </span>
                            :{" "}
                            {
                              value.product.properties[
                                Object.keys(value.product.properties)[
                                  propertyIndex
                                ]
                              ]
                            }
                          </p>
                        )
                      )}
                    </div>
                    <p className="text-lg font-black leading-none text-gray-800">
                      {this.rupiahFormat(value.product.price)}
                    </p>
                  </div>
                  <div
                    id="custom-number-input"
                    className="h-10 w-32 place-self-center"
                  >
                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <button
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        onClick={() => this.decQty(index)}
                      >
                        <span className="m-auto text-2xl font-semibold">-</span>
                      </button>
                      <input
                        type="number"
                        id="number-counter"
                        className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
                        min={0}
                        value={value.qty}
                      />
                      <button
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none"
                        onClick={() => this.incQty(index)}
                      >
                        <span className="m-auto text-2xl font-semibold">+</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/3 xl:w-1/4 w-full bg-gray-100">
          <div className="md:h-screen px-14 py-20">
            <div>
              <p className="text-4xl font-black leading-9 text-gray-800">
                Invoice
              </p>
              <div className="flex items-center justify-between pt-16">
                <p className="text-base leading-none text-gray-800">Subtotal</p>
                <p className="text-base leading-none text-gray-800">$9,000</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Shipping</p>
                <p className="text-base leading-none text-gray-800">$30</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Tax</p>
                <p className="text-base leading-none text-gray-800">$35</p>
              </div>
            </div>
            <div>
              <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal text-gray-800">Total</p>
                <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                  $10,240
                </p>
              </div>
              <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
