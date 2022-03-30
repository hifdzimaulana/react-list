import React, { Component } from "react";
import BillPayment from "../components/ShoppingCart/BillPayment";
import SuccessPaymentModal from "../components/ShoppingCart/SuccessPaymentModal";

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [
        {
          product: {
            brand: "Takashi Murakami",
            name: "Flower Push",
            img_url:
              "https://images.stockx.com/images/Takashi-Murakami-Flower-Plush-30CM-Rainbow-V6.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&q=90&dpr=1&trim=color&updated_at=1637353448",
            properties: {
              diameter: "30cm",
            },
            price: 1305000,
          },
          qty: 0,
        },
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
            brand: "Lego",
            name: "McLaren Formula 1 Team Race Car Set",
            img_url:
              "https://images.stockx.com/images/LEGO-Technic-Mclaren-Formula-1-Team-Race-Car-Set-42141.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&q=90&dpr=1&trim=color&updated_at=1644594695",
            price: 2599000,
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

      paymentModal: false,
    };
  }

  rupiahFormat = (nominal) => {
    return new Intl.NumberFormat("id", {
      currency: "IDR",
      style: "currency",
      maximumFractionDigits: 0,
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

  setQtyEmpty = () => {
    var { cart } = this.state;
    for (let i = 0; i < cart.length; i++) {
      cart[i].qty = 0;
    }
    this.setState({ cart });
  };

  setPaymentModal = (input) => {
    this.setState({ paymentModal: input });
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
              className="flex items-center mt-14 py-8 gap-9 border-t border-gray-200"
              key={index}
            >
              <div
                className="xl:w-72 xl:h-80 md:w-52 md:h-64 w-44 h-52 bg-cover bg-center rounded-md"
                style={{
                  backgroundImage: `url("${value.product.img_url}")`,
                }}
              ></div>
              <div className="md:pl-3 md:w-3/4">
                <div className="xl:flex md:flex xl:items-center xl:justify-between md:justify-between w-full pt-1">
                  <div className="grid xl:gap-20 md:gap-6 gap-5 justify-around">
                    <div id="product-brand">
                      <p className="uppercase font-medium">
                        {value.product.brand}
                      </p>
                      <p className="text-xl font-black leading-none text-gray-800">
                        {value.product.name}
                      </p>
                    </div>
                    <div id="product-properties">
                      {value.product.properties &&
                        Object.keys(value.product.properties).map(
                          (property, propertyIndex) => (
                            <p key={propertyIndex} className="text-sm">
                              <span className="font-semibold font-mono uppercase">
                                {property}
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
        <BillPayment
          cart={this.state.cart}
          rupiahFormat={this.rupiahFormat}
          setOpen={this.setPaymentModal}
        />
        <SuccessPaymentModal
          openModal={this.state.paymentModal}
          setOpen={this.setPaymentModal}
          setQtyEmpty={this.setQtyEmpty}
        />
      </div>
    );
  }
}

export default ShoppingCart;
