import { add, subtract } from "../../features/cartSlice";
import { useDispatch } from "react-redux";
import { Button, DatePicker } from "antd";
import { useSelector } from "react-redux";
const Cart = () => {
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
  const onChange = (date, dateString) => {
    console.log(dateString);
  };

  const addToCart = (type) => {
    dispatch(add(type));
  };

  const subFromCart = (type) => {
    dispatch(subtract(type));
  };

  return (
    <>
      <div className="h-screen bg-[#ECECF4] flex justify-center items-center">
        <div className=" rounded-3xl bg-sky-200 p-2 w-100%">
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
              <DatePicker onChange={onChange} />
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
        <div
          className="fixed w-28 h-28 rounded-full flex  items-center justify-center 
                 text-gray-700 text-xl font-bold ml-[1350px] bg-gradient-to-t from-[#4F7FB4] to-[#66419A]  bottom-40"
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
      </div>
    </>
  );
};

export default Cart;
