import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";

const ServicesPageDesktopPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-urbanist items-center justify-start mx-auto w-full">
        <header className="border-b border-gray-900_01 border-solid flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
          <div
            className="bg-cover bg-gray-900_02 bg-no-repeat border-b border-gray-900_01 border-solid flex-1 flex-col h-[63px] hidden items-center justify-center md:mt-0 mt-[50px] md:px-10 px-40 sm:px-5 py-[18px] w-full"
            style={{ backgroundImage: "url('images/img_banner.png')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[73%]">
              <Text
                className="md:mt-0 mt-[5px] text-center text-lg text-white-A700 w-auto"
                size="txtUrbanistMedium18"
              >
                ✨Discover Your Dream Property with Estatein
              </Text>
              <a
                href="javascript:"
                className="ml-2.5 md:ml-[0] md:mt-0 mt-1.5 text-center text-lg text-white-A700 underline w-auto"
              >
                <Text size="txtUrbanistMedium18">Learn More</Text>
              </a>
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
          <div className="bg-gray-900_02 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:px-10 sm:px-5 px-[162px] py-5 w-full">
            <Img className="h-12 w-40" src="images/img_logo.svg" alt="logo" />
            <ul className="flex sm:flex-col flex-row gap-[30px] sm:hidden items-center justify-start w-auto common-row-list">
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtUrbanistMedium18">Home</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtUrbanistMedium18">About Us</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtUrbanistMedium18">Properties</Text>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <Button
                    className="border border-gray-900_01 border-solid cursor-pointer font-medium text-center text-lg"
                    shape="round"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  >
                    Services
                  </Button>
                </a>
              </li>
            </ul>
            <Button
              className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[136px] text-center text-lg"
              shape="round"
              color="gray_900"
              size="sm"
              variant="fill"
            >
              Contact Us
            </Button>
          </div>
        </header>
        <div className="flex flex-col items-start justify-start max-w-[1920px] w-full">
          <div className="bg-gradient1  border-b border-gray-900_01 border-solid flex flex-col items-start justify-start pb-[100px] pl-[162px] pr-[400px] pt-[150px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-4 items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Elevate Your Real Estate Experience
              </Text>
              <Text
                className="leading-[150.00%] text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                Welcome to Estatein, where your real estate aspirations meet
                expert guidance. Explore our comprehensive range of services,
                each designed to cater to your unique needs and dreams.
              </Text>
            </div>
          </div>
          <List
            className="bg-gray-900 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start outline outline-[1px] outline-gray-900_01 p-5 shadow-bs w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col items-center justify-start px-5 py-10 rounded-[12px] w-full">
              <div className="flex flex-col gap-[22px] justify-start w-3/4 md:w-full">
                <div className="flex flex-row gap-[132px] items-start justify-end md:ml-[0] ml-[61px] w-[81%] md:w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border6 flex flex-col items-center justify-start mt-5 p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_arrowleft_gray_800.svg"
                    alt="arrowleft"
                  />
                </div>
                <Text
                  className="text-center text-white-A700 text-xl w-full"
                  size="txtUrbanistSemiBold20"
                >
                  Find Your Dream Home
                </Text>
              </div>
            </div>
            <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col items-center justify-center px-5 py-10 rounded-[12px] w-full">
              <div className="flex flex-col gap-6 justify-start w-[74%] md:w-full">
                <div className="flex flex-row gap-[132px] items-start justify-end md:ml-[0] ml-[57px] w-[82%] md:w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border7 flex flex-col items-center justify-start mt-5 p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_deep_purple_a100.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_arrowleft_gray_800.svg"
                    alt="arrowleft"
                  />
                </div>
                <Text
                  className="text-center text-white-A700 text-xl w-full"
                  size="txtUrbanistSemiBold20"
                >
                  Unlock Property Value
                </Text>
              </div>
            </div>
            <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col items-center justify-start px-5 py-10 rounded-[12px] w-full">
              <div className="flex flex-col gap-6 justify-start w-[86%] md:w-full">
                <div className="flex flex-row gap-[132px] items-start justify-end md:ml-[0] ml-[104px] w-[71%] md:w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border8 flex flex-col items-center justify-start mt-5 p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_deep_purple_a100_62x62.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_arrowleft_gray_800.svg"
                    alt="arrowleft"
                  />
                </div>
                <Text
                  className="mr-[61px] text-center text-white-A700 text-xl w-full"
                  size="txtUrbanistSemiBold20"
                >
                  Effortless Property Management
                </Text>
              </div>
            </div>
            <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col items-center justify-start px-5 py-10 rounded-[12px] w-full">
              <div className="flex flex-col gap-[22px] justify-start w-[92%] md:w-full">
                <div className="flex flex-row gap-[132px] items-start justify-end md:ml-[0] ml-[132px] w-[66%] md:w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border9 flex flex-col items-center justify-start mt-5 p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_62x62.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_arrowleft_gray_800.svg"
                    alt="arrowleft"
                  />
                </div>
                <Text
                  className="mr-[33px] text-center text-white-A700 text-xl w-full"
                  size="txtUrbanistSemiBold20"
                >
                  Smart Investments, Informed Decisions
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1616px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Img
              className="h-[30px] w-[68px]"
              src="images/img_television_11.svg"
              alt="television"
            />
            <div className="flex flex-col gap-4 items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Unlock Property Value
              </Text>
              <Text
                className="leading-[150.00%] text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                Selling your property should be a rewarding experience, and at
                Estatein, we make sure it is. Our Property Selling Service is
                designed to maximize the value of your property, ensuring you
                get the best deal possible. Explore the categories below to see
                how we can help you at every step of your selling journey
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] items-start justify-start w-full">
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border10 flex flex-col items-center justify-start p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_14.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtUrbanistSemiBold24"
                  >
                    Valuation Mastery
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtUrbanistMedium18Gray500"
                >
                  Discover the true worth of your property with our expert
                  valuation services.
                </Text>
              </div>
              <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border11 flex flex-col items-center justify-start p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_15.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtUrbanistSemiBold24"
                  >
                    Strategic Marketing
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtUrbanistMedium18Gray500"
                >
                  Selling a property requires more than just a listing; it
                  demands a strategic marketing approach.
                </Text>
              </div>
              <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border12 flex flex-col items-center justify-start p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_16.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtUrbanistSemiBold24"
                  >
                    Negotiation Wizardry
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtUrbanistMedium18Gray500"
                >
                  Negotiating the best deal is an art, and our negotiation
                  experts are masters of it.
                </Text>
              </div>
            </List>
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-full">
              <div className="border border-gray-900_01 border-solid flex sm:flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-[513px] sm:w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border13 flex flex-col items-center justify-start p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_17.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtUrbanistSemiBold24"
                  >
                    Closing Success
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[413px] md:max-w-full text-gray-500 text-lg"
                  size="txtUrbanistMedium18Gray500"
                >
                  A successful sale is not complete until the closing. We guide
                  you through the intricate closing process.
                </Text>
              </div>
              <div
                className="bg-cover bg-gray-900_02 bg-no-repeat border border-gray-900_01 border-solid flex flex-1 flex-col h-[266px] items-start justify-center p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full"
                style={{ backgroundImage: "url('images/img_banner.png')" }}
              >
                <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                    <Text
                      className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                      size="txtUrbanistBold30"
                    >
                      Unlock the Value of Your Property Today
                    </Text>
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[139px] text-center text-lg"
                      shape="round"
                      color="gray_900"
                      size="md"
                      variant="fill"
                    >
                      Learn More
                    </Button>
                  </div>
                  <Text
                    className="leading-[150.00%] text-gray-500 text-lg w-full"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Ready to unlock the true value of your property? Explore our
                    Property Selling Service categories and let us help you
                    achieve the best deal possible for your valuable asset.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1616px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Img
              className="h-[30px] w-[68px]"
              src="images/img_television_12.svg"
              alt="television_One"
            />
            <div className="flex flex-col gap-4 items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Effortless Property Management
              </Text>
              <Text
                className="leading-[150.00%] text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                <>
                  Owning a property should be a pleasure, not a hassle.
                  Estatein&#39;s Property Management Service takes the stress
                  out of property ownership, offering comprehensive solutions
                  tailored to your needs. Explore the categories below to see
                  how we can make property management effortless for you
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] items-start justify-start w-full">
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border14 flex flex-col items-center justify-start p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_18.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtUrbanistSemiBold24"
                  >
                    Tenant Harmony
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtUrbanistMedium18Gray500"
                >
                  Our Tenant Management services ensure that your tenants have a
                  smooth and reducing vacancies.
                </Text>
              </div>
              <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border15 flex flex-col items-center justify-start p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_19.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtUrbanistSemiBold24"
                  >
                    Maintenance Ease
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtUrbanistMedium18Gray500"
                >
                  Say goodbye to property maintenance headaches. We handle all
                  aspects of property upkeep.
                </Text>
              </div>
              <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border16 flex flex-col items-center justify-start p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_20.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtUrbanistSemiBold24"
                  >
                    Financial Peace of Mind
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtUrbanistMedium18Gray500"
                >
                  Managing property finances can be complex. Our financial
                  experts take care of rent collection
                </Text>
              </div>
            </List>
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-full">
              <div className="border border-gray-900_01 border-solid flex sm:flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-[513px] sm:w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border17 flex flex-col items-center justify-start p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_62x62.svg"
                        alt="icon_One"
                      />
                    </Button>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtUrbanistSemiBold24"
                  >
                    Legal Guardian
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[413px] md:max-w-full text-gray-500 text-lg"
                  size="txtUrbanistMedium18Gray500"
                >
                  Stay compliant with property laws and regulations
                  effortlessly.
                </Text>
              </div>
              <div
                className="bg-cover bg-gray-900_02 bg-no-repeat border border-gray-900_01 border-solid flex flex-1 flex-col h-[266px] items-start justify-center p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full"
                style={{ backgroundImage: "url('images/img_banner.png')" }}
              >
                <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                    <Text
                      className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                      size="txtUrbanistBold30"
                    >
                      Experience Effortless Property Management
                    </Text>
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[139px] text-center text-lg"
                      shape="round"
                      color="gray_900"
                      size="md"
                      variant="fill"
                    >
                      Learn More
                    </Button>
                  </div>
                  <Text
                    className="leading-[150.00%] text-gray-500 text-lg w-full"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Ready to experience hassle-free property management? Explore
                    our Property Management Service categories and let us handle
                    the complexities while you enjoy the benefits of property
                    ownership.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1616px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-1 flex-col gap-[50px] items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start w-[539px] sm:w-full">
              <Img
                className="h-[30px] w-[68px]"
                src="images/img_television_13.svg"
                alt="television_Two"
              />
              <div className="flex flex-col gap-3.5 items-center justify-start">
                <Text
                  className="leading-[150.00%] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                  size="txtUrbanistSemiBold48"
                >
                  Smart Investments, Informed Decisions
                </Text>
                <Text
                  className="leading-[150.00%] text-gray-500 text-lg w-full"
                  size="txtUrbanistMedium18Gray500"
                >
                  <>
                    Building a real estate portfolio requires a strategic
                    approach. Estatein&#39;s Investment Advisory Service
                    empowers you to make smart investments and informed
                    decisions.
                  </>
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-gray-900_02 bg-no-repeat border border-gray-900_01 border-solid flex flex-col h-[340px] items-start justify-center p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full"
              style={{ backgroundImage: "url('images/img_banner.png')" }}
            >
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                  size="txtUrbanistSemiBold24"
                >
                  Unlock Your Investment Potential
                </Text>
                <Text
                  className="leading-[150.00%] mt-[34px] text-gray-300 text-lg w-full"
                  size="txtUrbanistMedium18Gray300"
                >
                  Explore our Property Management Service categories and let us
                  handle the complexities while you enjoy the benefits of
                  property ownership.
                </Text>
                <Button
                  className="border border-gray-900_01 border-solid cursor-pointer font-medium mt-[30px] text-center text-lg w-full"
                  shape="round"
                  color="gray_900"
                  size="md"
                  variant="fill"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-900_02 flex flex-1 flex-col items-start justify-start p-2.5 rounded-[12px] w-full">
            <div className="gap-2.5 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border18 flex flex-col items-center justify-start p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_14.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtUrbanistSemiBold24"
                  >
                    Market Insight
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[393px] md:max-w-full text-gray-500 text-lg"
                  size="txtUrbanistMedium18Gray500"
                >
                  Stay ahead of market trends with our expert Market Analysis.
                  We provide in-depth insights into real estate market
                  conditions
                </Text>
              </div>
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border19 flex flex-col items-center justify-start p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_21.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtUrbanistSemiBold24"
                  >
                    ROI Assessment
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[393px] md:max-w-full text-gray-500 text-lg"
                  size="txtUrbanistMedium18Gray500"
                >
                  Make investment decisions with confidence. Our ROI Assessment
                  services evaluate the potential returns on your investments
                </Text>
              </div>
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border20 flex flex-col items-center justify-start p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_22.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtUrbanistSemiBold24"
                  >
                    Customized Strategies
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[393px] md:max-w-full text-gray-500 text-lg"
                  size="txtUrbanistMedium18Gray500"
                >
                  Every investor is unique, and so are their goals. We develop
                  Customized Investment Strategies tailored to your specific
                  needs
                </Text>
              </div>
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border21 flex flex-col items-center justify-start p-2.5 rounded-[50%] w-[82px]">
                    <Button
                      className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                      shape="circle"
                      size="sm"
                      variant="outline"
                      color="deep_purple_A100_deep_purple_A100_00"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_62x62.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtUrbanistSemiBold24"
                  >
                    Diversification Mastery
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[393px] md:max-w-full text-gray-500 text-lg"
                  size="txtUrbanistMedium18Gray500"
                >
                  Diversify your real estate portfolio effectively. Our experts
                  guide you in spreading your investments across various
                  property types and locations
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[150px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ServicesPageDesktopPage;
