import React from "react";
import { Link } from "react-router-dom";
import MasterCard from "../../Assets/648b606d4a139591f6b3440c_mastercard-1.png";
import VisaCard from "../../Assets/visa-512.webp";
import UnionPay from "../../Assets/825484.png";
import DinersClub from "../../Assets/Diners_Club-logo-53DC9C1F56-seeklogo.com.png";
const Footer = () => {
  return (
    <div className=" p-8">
      <div className="grid grid-cols-2 gap-1">
        <div className=" flex flex-col gap-3 p-6">
          <div>
            <h1 className="customFont font-medium text-xl ">
              Meryal Water park
            </h1>
            <p className="text-[#5D658B]">Zone-69/Street-531/Building-38</p>
            <p className="text-[#5D658B]">Po.Box:24507</p>
          </div>

          <div>
            <h1 className="customFont font-medium  ">Call</h1>
            <Link className="customFont font-medium text-[#673E98]">
              +974 4144 4000
            </Link>
            <h1 className="customFont font-medium  ">Email</h1>
            <Link className="customFont font-medium text-[#673E98]">
              info@meryalwaterpark.com
            </Link>
            <h1 className="customFont font-medium  ">For group & events</h1>
            <Link className="customFont font-medium text-[#673E98]">
              sales@meryalwaterpark.com
            </Link>
          </div>

          <div>
            <h1 className="customFont font-medium text-xl ">OPENING HOURS</h1>
            <p className="text-[#5D658B]">
              Tuesday-Sunday(open on Monday-28th October 2024)
            </p>
            <p className="text-[#5D658B]">Operating Hours-12:00Pm To 6:00Pm</p>
          </div>
        </div>
        <div className=" flex-col gap-10 p-2">
          <div className=" grid grid-cols-3 gap-2">
            <div className=" p-2">
              <h1 className="customFont font-medium text-xl ">WATER PARK</h1>
              <ul>
                <li className="mt-2 text-[#5D658B]">Park OverView</li>
                <li className="mt-2 text-[#5D658B]">Special Offers</li>
                <li className="mt-2 text-[#5D658B]">Swimwear Policy</li>
                <li className="mt-2 text-[#5D658B]">
                  Ride Safety & Restrictions
                </li>
              </ul>
            </div>
            <div className=" p-2 ">
              <h1 className="customFont  font-medium text-xl ">ATTRACTIONS</h1>
              <ul>
                <li className="mt-2 text-[#5D658B]">icon Island</li>
                <li className="mt-2 text-[#5D658B]">Rides & Slides</li>
                <li className="mt-2 text-[#5D658B]">Retail & Merchandising</li>
                <li className="mt-2 text-[#5D658B]">
                  Ride Safety & Restrictions
                </li>
                <li className="mt-2 text-[#5D658B]">Dinig Facilites</li>
              </ul>
            </div>
            <div className=" p-2">
              <h1 className="customFont  font-medium text-xl ">FACILITIES</h1>
              <ul>
                <li className="mt-2 text-[#5D658B]">Cabanas</li>
                <li className="mt-2 text-[#5D658B]">Beach Access</li>
                <li className="mt-2 text-[#5D658B]">Lost & Found Desk</li>
                <li className="mt-2 text-[#5D658B]">Information Point</li>
                <li className="mt-2 text-[#5D658B]">Locker Rental</li>
                <li className="mt-2 text-[#5D658B]">Counter Lockers</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="customFont font-medium ">WE ACCEPT</h1>
            <div className="flex justify-between mt-2">
              <div className="flex gap-2">
                <img
                  src={MasterCard}
                  alt=""
                  width={"90px"}
                  style={{ height: "60PX" }}
                />
                <img
                  src={VisaCard}
                  alt=""
                  width={"80px"}
                  style={{ height: "60PX" }}
                />
                <img
                  src={UnionPay}
                  alt=""
                  width={"70px"}
                  style={{ height: "60PX" }}
                />
                <img
                  src={DinersClub}
                  alt=""
                  width={"190px"}
                  style={{ height: "50PX" }}
                />
              </div>

              <div className="flex gap-2 items-center">
                <span>
                  <ion-icon
                    name="logo-facebook"
                    class="md hydrated text-4xl"
                  ></ion-icon>
                </span>
                <span>
                  <ion-icon
                    name="logo-instagram"
                    class="md hydrated text-4xl"
                  ></ion-icon>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
