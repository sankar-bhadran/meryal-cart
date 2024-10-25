import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Logo from "../../Assets/Screenshot 2024-10-25 132602.png";
import { Link } from "react-router-dom";
const Header = () => {
  const items = [
    {
      key: "1",
      label: "English",
    },
    {
      key: "2",
      label: "Arabic",
    },
    {
      key: "3",
      label: "  Russian",
    },
  ];

  return (
    <>
      <div className=" flex justify-between items-center p-2">
        <Link to={"/"}>
          <h1 className="font-bold text-3xl headingFont p-5">Meryal</h1>
        </Link>
        <div className="flex justify-center gap-7">
          <p className="customFont font-medium text-xl text-[#673E98]">
            Waker Park
          </p>
          <p className="customFont font-medium text-xl text-[#673E98]">
            RIG 193
          </p>
          <p className="customFont font-medium text-xl text-[#673E98]">
            {" "}
            Rides & Slides
          </p>
          <p className="customFont font-medium text-xl text-[#673E98]">
            Dining & Shipping
          </p>
          <p className="customFont font-medium text-xl text-[#673E98]">
            Special Offers Events
          </p>
        </div>
        <div className=" flex items-center gap-4 mr-6">
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: ["3"],
            }}
            styles={{
              body: {
                colors: "#4F7FB4",
              },
            }}
          >
            <Space className="text-xl bg-zinc-50 rounded p-1">
              EN
              <DownOutlined />
            </Space>
          </Dropdown>

          <ion-icon
            name="person-circle-outline"
            class="lg hydrated text-3xl   text-[#673E98]"
          ></ion-icon>
        </div>
      </div>
    </>
  );
};

export default Header;
