import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="border-gray-900_01 border-solid border-y flex sm:h-[181px] h-[367px] md:h-[679px] justify-end sm:m-[] sm:mb-[] sm:mt-[-150px] md:px-10 sm:px-5 px-[162px] py-[100px] relative w-full">
            <div className="flex flex-col h-full items-center justify-start mt-auto mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <Img
                  className="md:flex-1 h-[308px] sm:h-auto md:mt-0 mt-[23px] object-cover w-[546px] md:w-full"
                  src="images/img_banner.png"
                  alt="abstractdesign"
                />
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[331px] items-end justify-start p-[116px] md:px-10 sm:px-5"
                  style={{ backgroundImage: "url('images/img_group7.png')" }}
                >
                  <Button
                    className="common-pointer cursor-pointer font-medium font-urbanist sm:m-[] mb-9 sm:mb-[60px] min-w-[192px] mr-[46px] text-center text-lg"
                    onClick={props?.onClick}
                    shape="round"
                    color="deep_purple_A200"
                    size="md"
                    variant="fill"
                  >
                    Explore Properties
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-1 flex-col gap-3.5 h-max inset-y-[0] items-start justify-start left-[8%] my-auto w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Start Your Real Estate Journey Today
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1154px] md:max-w-full text-gray-500 text-lg"
                size="txtUrbanistMedium18Gray500"
              >
                <>
                  Your dream property is just a click away. Whether you&#39;re
                  looking for a new home, a strategic investment, or expert real
                  estate advice, Estatein is here to assist you every step of
                  the way. Take the first step towards your real estate goals
                  and explore our available properties or get in touch with our
                  team for personalized assistance.
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start md:px-10 sm:px-5 px-[162px] py-[100px] w-full">
              <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start w-[538px] sm:w-full">
                <Img
                  className="h-12 w-40"
                  src="images/img_logo.svg"
                  alt="logo_One"
                />
                <Input
                  name="inputfeild"
                  placeholder="Enter Your Email"
                  className="!placeholder:text-gray-500 !text-gray-500 font-medium font-urbanist p-0 text-left text-lg tracking-[-0.11px] w-full"
                  wrapClassName="border border-gray-900_01 border-solid flex rounded-[12px] w-[79%]"
                  prefix={
                    <Img
                      className="h-6 mr-2.5 my-[3px]"
                      src="images/img_icon_gray_500.svg"
                      alt="Icon"
                    />
                  }
                  suffix={
                    <Img
                      className="h-[30px] ml-3 my-auto"
                      src="images/img_save.svg"
                      alt="save"
                    />
                  }
                  color="gray_900"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
                <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                  <Text
                    className="text-gray-500 text-xl tracking-[-0.12px] w-auto"
                    size="txtUrbanistMedium20"
                  >
                    Home
                  </Text>
                  <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="common-pointer text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                        onClick={() => navigate("/homepagedesktop")}
                      >
                        Hero Section
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                      >
                        Features
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                      >
                        Properties
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                      >
                        Testimonials
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                      >
                        FAQ’s
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                  <Text
                    className="text-gray-500 text-xl tracking-[-0.12px] w-auto"
                    size="txtUrbanistMedium20"
                  >
                    About Us
                  </Text>
                  <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                      >
                        Our Story
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                      >
                        Our Works
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                      >
                        How It Works
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                      >
                        Our Team
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                      >
                        Our Clients
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                  <Text
                    className="text-gray-500 text-xl tracking-[-0.12px] w-auto"
                    size="txtUrbanistMedium20"
                  >
                    Properties
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-auto">
                    <Text
                      className="text-lg text-white-A700 tracking-[-0.11px] w-auto"
                      size="txtUrbanistMedium18"
                    >
                      Portfolio
                    </Text>
                    <Text
                      className="text-lg text-white-A700 tracking-[-0.11px] w-auto"
                      size="txtUrbanistMedium18"
                    >
                      Categories
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                  <Text
                    className="text-gray-500 text-xl tracking-[-0.12px] w-auto"
                    size="txtUrbanistMedium20"
                  >
                    Services
                  </Text>
                  <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                      >
                        Valuation Mastery
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                      >
                        Strategic Marketing
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                      >
                        Negotiation Wizardry
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                      >
                        Closing Success
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.11px]"
                        size="txtUrbanistMedium18"
                      >
                        Property Management
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                  <Text
                    className="text-gray-500 text-xl tracking-[-0.12px] w-auto"
                    size="txtUrbanistMedium20"
                  >
                    Contact Us
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-auto">
                    <Text
                      className="text-lg text-white-A700 tracking-[-0.11px] w-auto"
                      size="txtUrbanistMedium18"
                    >
                      Contact Form
                    </Text>
                    <Text
                      className="text-lg text-white-A700 tracking-[-0.11px] w-auto"
                      size="txtUrbanistMedium18"
                    >
                      Our Offices
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900_02 flex md:flex-col flex-row md:gap-10 items-center justify-between md:px-10 sm:px-5 px-[162px] py-4 w-full">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-[38px] items-start justify-start py-2.5 w-auto sm:w-full">
                <Text
                  className="text-lg text-white-A700 tracking-[-0.11px] w-auto"
                  size="txtUrbanistMedium18"
                >
                  @2023 Estatein. All Rights Reserved.
                </Text>
                <Text
                  className="text-lg text-white-A700 tracking-[-0.11px] w-auto"
                  size="txtUrbanistMedium18"
                >
                  Terms & Conditions
                </Text>
              </div>
              <Img
                className="h-[72px] w-[238px]"
                src="images/img_socialicon.svg"
                alt="socialicon"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
