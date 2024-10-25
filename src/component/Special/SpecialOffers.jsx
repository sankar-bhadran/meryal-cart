import React from "react";
import PicOne from "../../Assets/chair-2.jpg";
import PicTwo from "../../Assets/chair-3.jpg";
const SpecialOffers = () => {
  return (
    <>
      <div>
        <div className="mt-10 ">
          <h1 className="flex justify-center customFont font-bold text-5xl text-[#673E98]">
            Special Offers
          </h1>
        </div>
        <div className="w-[100%] h-[100%] mt-[0px] mb-[0px] ml-[auto] mr-[auto] p-6">
          <div className="mt-[48px] grid grid-cols-2 gap-6">
            <div className="rounded ">
              <img
                src={PicOne}
                alt=""
                width={"100%"}
                height={"50% "}
                style={{
                  borderRadius: "20px",
                  alignSelf: "center",
                  height: "85%",
                }}
              />
            </div>
            <div className="flex flex-col gap-6 p-2">
              <h1 className="customFont font-extrabold text-3xl text-[#673E98]">
                Friends & Family Day
              </h1>
              <span className="flex items-center gap-2">
                <ion-icon name="calendar-outline"></ion-icon>
                <p className="text-[#398AFE]">28 Oct 2024 -28 Oct 2024</p>
              </span>
              <p className="text-[#7f838b]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                iste ducimus quos, tempore voluptates, velit laboriosam
                consectetur iure quis odio mollitia molestiae quae porro
                explicabo. Reiciendis voluptate illo hic ullam!
              </p>
              <button className="bg-gradient-to-t from-[#4F7FB4] to-[#66419A]  flex justify-center items-center space-x-2 p-7 rounded-full h-[48px] w-[20%]">
                <h2 className=" text-white customFont text-lg">Buy Now</h2>
              </button>
            </div>
          </div>

          <div className="mt-[48px] grid grid-cols-2 gap-6">
            <div className="rounded ">
              <img
                src={PicTwo}
                alt=""
                width={"100%"}
                height={"50% "}
                style={{
                  borderRadius: "20px",
                  alignSelf: "center",
                  height: "85%",
                }}
              />
            </div>
            <div className="flex flex-col gap-6 p-2">
              <h1 className="customFont font-extrabold text-3xl text-[#673E98]">
                Family Adventure Package
              </h1>
              <span className="flex items-center gap-2">
                <ion-icon name="calendar-outline"></ion-icon>
                <p className="text-[#398AFE]">17 Oct 2024 -30 Oct 2024</p>
              </span>
              <p className="text-[#7f838b]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                iste ducimus quos, tempore voluptates, velit laboriosam
                consectetur iure quis odio mollitia molestiae quae porro
                explicabo. Reiciendis voluptate illo hic ullam!
              </p>
              <button className="bg-gradient-to-t from-[#4F7FB4] to-[#66419A]  flex justify-center items-center space-x-2 p-7 rounded-full h-[48px] w-[20%]">
                <h2 className=" text-white customFont text-lg">Buy Now</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialOffers;
