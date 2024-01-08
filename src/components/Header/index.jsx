import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div
          className="bg-cover bg-gray-900_02 bg-no-repeat border-b border-gray-900_01 border-solid flex-col h-[63px] hidden items-center justify-center sm:m-[] sm:mt-[75px] md:px-10 px-40 sm:px-5 py-[18px] w-full"
          style={{ backgroundImage: "url('images/img_banner.png')" }}
        >
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end sm:m-[] sm:mb-[100px] w-[73%]">
            <Text
              className="sm:m-[] sm:mb-10 md:mt-0 mt-[5px] text-center text-lg text-white-A700 w-auto"
              size="txtUrbanistMedium18"
            >
              ✨Discover Your Dream Property with Estatein
            </Text>
            <Text
              className="ml-2.5 md:ml-[0] md:mt-0 mt-1.5 text-center text-lg text-white-A700 underline w-auto"
              size="txtUrbanistMedium18"
            >
              Learn More
            </Text>
            <Button
              className="flex h-8 items-center justify-center md:ml-[0] ml-[664px] w-8"
              shape="circle"
              color="white_A700_19"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-3"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </Button>
          </div>
        </div>
        <div className="bg-gray-900_02 flex md:flex-col flex-row md:gap-10 items-center justify-between md:px-10 sm:px-5 px-[162px] py-5 w-full">
          <Img
            className="common-pointer h-12 w-40"
            src="images/img_logo.svg"
            alt="logo"
            onClick={props?.onClick}
          />
          <ul className="flex sm:flex-col flex-row gap-[30px] sm:hidden items-center justify-start w-auto common-row-list">
            <li>
              <Text
                className="text-lg text-white-A700"
                size="txtUrbanistMedium18"
              >
                Home
              </Text>
            </li>
            <li>
              <Text
                className="text-lg text-white-A700"
                size="txtUrbanistMedium18"
              >
                About Us
              </Text>
            </li>
            <li>
              <Button
                className="border border-gray-900_01 border-solid cursor-pointer font-medium font-urbanist text-center text-lg"
                shape="round"
                color="gray_900"
                size="sm"
                variant="fill"
              >
                Properties
              </Button>
            </li>
            <li>
              <Text
                className="text-lg text-white-A700"
                size="txtUrbanistMedium18"
              >
                Services
              </Text>
            </li>
          </ul>
          <Button
            className="common-pointer border border-gray-900_01 border-solid cursor-pointer font-medium font-urbanist min-w-[136px] text-center text-lg"
            onClick={props?.onClick1}
            shape="round"
            color="gray_900"
            size="sm"
            variant="fill"
          >
            Contact Us
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
