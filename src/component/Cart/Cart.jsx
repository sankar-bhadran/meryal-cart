import { add, subtract } from "../../features/cartSlice";
import { useDispatch } from "react-redux";
import { Button, DatePicker, Divider, Space } from "antd";
import { useSelector } from "react-redux";
import { Drawer } from "antd";
import React, { useState } from "react";
const Cart = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const result = useSelector((state) => {
    return state.cart.value;
  });
  const adultCount = useSelector((state) => {
    return state.cart.adultCount;
  });

  const juniorCount = useSelector((state) => {
    return state.cart.juniorCount;
  });

  const adultTotal = useSelector((state) => {
    return state.cart.adultTotal;
  });

  const juniorTotal = useSelector((state) => {
    return state.cart.juniorTotal;
  });
  const onChange = (date, dateString) => {
    fmt(dateString);
  };

  const addToCart = (type) => {
    dispatch(add(type));
  };

  const subFromCart = (type) => {
    dispatch(subtract(type));
  };

  function fmt(a) {
    console.log(a);
    let b = a.split("-");
    let c = b.reverse().join("/");
    setValue(c);
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="h-screen bg-[#ECECF4] flex justify-center items-center">
        <div className=" rounded-3xl border-2 border-[#673E98] bg-  p-2 w-100%">
          <div className="p-10 flex flex-col gap-6">
            <div className="text-center">
              <h1 className="customFont font-bold text-3xl text-[#673E98]">
                Choose Date
              </h1>
            </div>
            <div className="flex gap-10 items-center">
              <h2 className="customFont font-bold text-2xl text-[#673E98]">
                All day Ticket
              </h2>
              <DatePicker onChange={onChange} format="DD/MM/YYYY" />
              <div>
                <h3 className="text-center ml-10 customFont mb-2">Adult</h3>
                <div className="flex justify-center items-center gap-4">
                  <ion-icon
                    name="person-outline"
                    class="md hydrated text-2xl"
                  ></ion-icon>
                  {adultCount === 0 ? (
                    <Button shape="circle">-</Button>
                  ) : (
                    <Button shape="circle" onClick={() => subFromCart()}>
                      -
                    </Button>
                  )}
                  <p>{adultCount}</p>
                  <Button shape="circle" onClick={() => addToCart()}>
                    +
                  </Button>
                </div>
              </div>
              <div className="">
                <h3 className="text-center ml-10 mb-2">Junior</h3>
                <div className="flex justify-center items-center gap-4">
                  <ion-icon
                    name="person-outline"
                    class="md hydrated text-2xl"
                  ></ion-icon>
                  {juniorCount === 0 ? (
                    <Button shape="circle">-</Button>
                  ) : (
                    <Button
                      shape="circle"
                      onClick={() => subFromCart("junior")}
                    >
                      -
                    </Button>
                  )}

                  <p>{juniorCount}</p>
                  <Button shape="circle " onClick={() => addToCart("junior")}>
                    +
                  </Button>
                </div>
              </div>
              <button className="bg-gradient-to-t from-[#4F7FB4] to-[#66419A]  flex justify-center items-center space-x-2 p-7 rounded-full h-[48px]">
                <h2 className=" text-white customFont text-lg">Confirm</h2>
                <ion-icon
                  name="arrow-forward-outline"
                  class="sm hydrated text-2xl text-white"
                ></ion-icon>
              </button>
            </div>
          </div>
        </div>

        {adultTotal > 0 || juniorTotal > 0 ? (
          <div
            className="fixed w-28 h-28 rounded-full flex  items-center justify-center 
                 text-gray-700 text-xl font-bold ml-[1350px] bg-gradient-to-t from-[#4F7FB4] to-[#66419A]  bottom-40"
            onClick={showDrawer}
          >
            <div className="items-center">
              <div>
                <ion-icon
                  name="cart-outline"
                  class="lg hydrated text-2xl ml-2  text-white"
                ></ion-icon>
              </div>

              <p className="text-sm text-white ">QAR {result}</p>
            </div>
          </div>
        ) : (
          ""
        )}

        <Drawer
          open={open}
          closable={false}
          styles={{
            body: {
              padding: 0,
            },
          }}
        >
          <div className="flex flex-col justify-between h-screen">
            <div>
              <div className=" flex justify-between gap-16 p-6 items-center">
                <div className="">
                  <h4 className="customFont font-bold text-2xl  flex justify-center gap-3">
                    <span>
                      <ion-icon
                        name="cart-outline"
                        class="lg hydrated text-2xl   text-[#673E98]"
                      ></ion-icon>
                    </span>
                    <span className="customFont font-bold text-2xl text-[#673E98]">
                      Cart Summary
                    </span>
                  </h4>
                </div>
                <div>
                  <ion-icon
                    name="close-circle-outline"
                    onClick={onClose}
                    class="lg hydrated text-3xl ml-2 cursor-pointer"
                    fill
                  ></ion-icon>
                </div>
              </div>
              <div className="">
                <table className="w-100%">
                  <tr>
                    <th className="text-[#757085] text-sm">Ticket</th>
                    <th className="text-[#757085] text-sm">Qty</th>
                    <th className="text-[#757085] text-sm">Amount</th>
                  </tr>
                  <hr />
                  <tr className="w-100%">
                    <td className="">
                      <h5 className="flex gap-2 justify-center items-center">
                        <ion-icon
                          name="ticket-outline"
                          class="lg hydrated text-2xl   text-[#9F3090]"
                        ></ion-icon>
                        Online Adult - 1 Day Pass
                      </h5>
                    </td>
                    <td className="flex justify-center items-center gap-2">
                      {adultCount === 0 ? (
                        <Button
                          shape="circle "
                          style={{ borderColor: "#9F3090" }}
                          size="small"
                        >
                          -
                        </Button>
                      ) : (
                        <Button
                          shape="circle "
                          style={{ borderColor: "#9F3090" }}
                          size="small"
                          onClick={() => subFromCart()}
                        >
                          -
                        </Button>
                      )}
                      <p className="text-[#9F3090]">{adultCount}</p>
                      <Button
                        shape="circle"
                        style={{ borderColor: "#9F3090" }}
                        size="small"
                        onClick={() => addToCart()}
                      >
                        +
                      </Button>
                    </td>
                    <td>
                      <p className="text-[#9F3090] text-sm">QAR {adultTotal}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="flex gap-2 justify-center items-center ">
                        <ion-icon
                          name="ticket-outline"
                          class="lg hydrated text-2xl   text-[#9F3090]"
                        ></ion-icon>
                        Online Junior - 1 Day Pass
                      </h5>
                    </td>
                    <td className="flex justify-center items-center gap-2 p-2">
                      {juniorCount === 0 ? (
                        <Button
                          shape="circle"
                          style={{ borderColor: "#9F3090" }}
                          size="small"
                        >
                          -
                        </Button>
                      ) : (
                        <Button
                          shape="circle"
                          style={{ borderColor: "#9F3090" }}
                          size="small"
                          onClick={() => subFromCart("junior")}
                        >
                          -
                        </Button>
                      )}

                      <p>{juniorCount}</p>
                      <Button
                        shape="circle"
                        style={{ borderColor: "#9F3090" }}
                        size="small"
                        onClick={() => addToCart("junior")}
                      >
                        +
                      </Button>
                    </td>
                    <td>
                      <p className="text-[#9F3090] text-sm">
                        QAR {juniorTotal}
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div>
              <span className="customFont font-bold text-2xl ml-4 text-[#673E98]">
                Total Cart Value
              </span>
              <div className=" m-6 flex flex-col gap-2">
                <div className="flex justify-between">
                  <h3 className="customFont text-[19px]">Cart Value</h3>
                  <h3 className="customFont text-[19px] font-small">
                    QAR {result}
                  </h3>
                </div>
                <div className="flex justify-between">
                  <h3 className="customFont text-[19px]">Discount</h3>
                  <h3 className="customFont text-[19px] font-small">0.00</h3>
                </div>
                <hr />
                <div className="flex justify-between m-2">
                  <h3 className="customFont text-[19px] font-medium">Total</h3>
                  <h3 className="customFont text-[19px] font-medium text-[#9F3090]">
                    QAR {result}
                  </h3>
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <button className="bg-gradient-to-t from-[#4F7FB4] to-[#66419A]  flex justify-center items-center space-x-2 p-7 rounded-full h-[48px] w-[90%]">
                  <h2 className=" text-white customFont text-lg">
                    Process To Payment
                  </h2>
                  <ion-icon
                    name="arrow-forward-outline"
                    class="sm hydrated text-2xl text-white"
                  ></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Cart;
