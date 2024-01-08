import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";

const HomePageDesktopPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-urbanist items-center justify-start mx-auto w-full">
        <header className="border-b border-gray-900_01 border-solid flex md:flex-col md:gap-5 items-center justify-center mt-[30px] md:px-5 w-full">
          <div
            className="bg-cover bg-gray-900_02 bg-no-repeat border-b border-gray-900_01 border-solid flex-1 flex-col h-[63px] hidden items-center justify-center sm:m-[] sm:mt-[30px] md:px-10 px-40 sm:px-5 py-[18px] w-full"
            style={{ backgroundImage: "url('images/img_banner.png')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[73%]">
              <Text
                className="md:mt-0 mt-[5px] text-center text-lg text-white-A700 w-auto"
                size="txtUrbanistMedium18"
              >
                ✨Discover Your Dream Property with Estatein
              </Text>
              <a className="ml-2.5 md:ml-[0] md:mt-0 mt-1.5 text-center text-lg text-white-A700 underline w-auto">
                <Text
                  className="common-pointer"
                  size="txtUrbanistMedium18"
                  onClick={() => navigate("/propertiespagedesktop")}
                >
                  Learn More
                </Text>
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
                <a href="javascript:">
                  <Button
                    className="border border-gray-900_01 border-solid cursor-pointer font-medium text-center text-lg"
                    shape="round"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  >
                    Home
                  </Button>
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
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtUrbanistMedium18">Services</Text>
                </a>
              </li>
            </ul>
            <Button
              className="common-pointer border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[136px] text-center text-lg"
              onClick={() => navigate("/contactpagedesktop")}
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
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start w-full">
            <div className="flex flex-1 flex-col md:gap-10 gap-[60px] h-full items-start justify-center pl-[162px] md:px-5 w-full">
              <div className="relative w-full">
                <div className="flex flex-col items-center justify-start m-auto w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <Text
                      className="leading-[120.00%] sm:m-[] sm:mt-[30px] md:text-5xl text-6xl text-white-A700 w-full"
                      size="txtUrbanistSemiBold60"
                    >
                      Discover Your Dream Property with Estatein
                    </Text>
                    <Text
                      className="leading-[150.00%] text-gray-500 text-lg w-full"
                      size="txtUrbanistMedium18Gray500"
                    >
                      Your journey to finding the perfect property begins here.
                      Explore our listings to find the home that matches your
                      dreams.
                    </Text>
                  </div>
                </div>
                <div className="absolute bg-gray-900 border border-gray-900_01 border-solid flex flex-row gap-[15.91px] h-[175px] md:h-auto items-center justify-between p-[47.73px] md:px-10 sm:px-5 right-[0] rounded-lg top-[0] w-4">
                  <div className="overflow-x-auto w-px">
                    <div className="h-[143px] md:h-[86px] relative w-full">
                      <div className="absolute bottom-[0] flex flex-row items-start justify-evenly left-full w-full">
                        <Text
                          className="mt-[67px] rotate-[171deg] text-[15.01px] text-white-A700"
                          size="txtUrbanistSemiBold1501"
                        >
                          D
                        </Text>
                        <Img
                          className="h-[19px] md:h-auto mt-[66px] object-cover w-[21%]"
                          src="images/img_text.png"
                          alt="text_Two"
                        />
                        <div className="md:h-[35px] h-[69px] mb-4 relative w-[43%]">
                          <div className="absolute md:h-[19px] h-[63px] right-[0] top-[0] w-[66%]">
                            <div className="absolute md:h-[19px] h-[54px] right-[0] top-[0] w-[79%]">
                              <div className="absolute md:h-[19px] h-[42px] right-[0] top-[0] w-[73%]">
                                <div className="absolute md:h-[19px] h-[29px] inset-x-[0] mx-auto top-[0] w-full">
                                  <Text
                                    className="absolute right-[0] rotate-[-82deg] text-[15.01px] text-white-A700 top-[0]"
                                    size="txtUrbanistSemiBold1501"
                                  >
                                    o
                                  </Text>
                                  <Text
                                    className="absolute bottom-[0] inset-x-[0] mx-auto rotate-[-95deg] text-[15.01px] text-white-A700 w-max"
                                    size="txtUrbanistSemiBold1501"
                                  >
                                    p
                                  </Text>
                                </div>
                                <Text
                                  className="absolute bottom-[0] left-[0] rotate-[-108deg] text-[15.01px] text-white-A700"
                                  size="txtUrbanistSemiBold1501"
                                >
                                  e
                                </Text>
                              </div>
                              <Text
                                className="absolute bottom-[0] left-[0] rotate-[-120deg] text-[15.01px] text-white-A700"
                                size="txtUrbanistSemiBold1501"
                              >
                                r
                              </Text>
                            </div>
                            <Text
                              className="absolute bottom-[0] left-[0] rotate-[-129deg] text-[15.01px] text-white-A700"
                              size="txtUrbanistSemiBold1501"
                            >
                              t
                            </Text>
                          </div>
                          <Text
                            className="absolute bottom-[0] left-[0] rotate-[-140deg] text-[15.01px] text-white-A700"
                            size="txtUrbanistSemiBold1501"
                          >
                            y
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[2%] flex flex-row items-start justify-evenly left-full w-[27px]">
                        <Text
                          className="rotate-[140deg] text-[15.01px] text-white-A700"
                          size="txtUrbanistSemiBold1501"
                        >
                          c
                        </Text>
                        <div className="flex flex-col justify-start">
                          <Text
                            className="mr-1.5 rotate-[152deg] text-[15.01px] text-white-A700"
                            size="txtUrbanistSemiBold1501"
                          >
                            s
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[9px] rotate-[160deg] text-[15.01px] text-white-A700"
                            size="txtUrbanistSemiBold1501"
                          >
                            i
                          </Text>
                        </div>
                      </div>
                      <div className="absolute flex flex-col items-start justify-start left-[0] top-[7%] w-full">
                        <div className="md:h-[19px] h-[49px] relative w-full">
                          <div className="absolute bottom-[0] md:h-[19px] h-[42px] left-[0] w-[79%]">
                            <div className="absolute bottom-[0] md:h-[19px] h-[31px] left-[0] w-[73%]">
                              <Text
                                className="absolute bottom-[0] left-[0] rotate-[71deg] text-[15.01px] text-white-A700"
                                size="txtUrbanistSemiBold1501"
                              >
                                Y
                              </Text>
                              <Text
                                className="absolute right-[0] rotate-[58deg] text-[15.01px] text-white-A700 top-[0]"
                                size="txtUrbanistSemiBold1501"
                              >
                                o
                              </Text>
                            </div>
                            <Text
                              className="absolute right-[0] rotate-[45deg] text-[15.01px] text-white-A700 top-[0]"
                              size="txtUrbanistSemiBold1501"
                            >
                              u
                            </Text>
                          </div>
                          <Text
                            className="absolute right-[0] rotate-[34deg] text-[15.01px] text-white-A700 top-[0]"
                            size="txtUrbanistSemiBold1501"
                          >
                            r
                          </Text>
                        </div>
                        <Text
                          className="mt-0.5 rotate-[91deg] text-[15.01px] text-white-A700"
                          size="txtUrbanistSemiBold1501"
                        >
                          r
                        </Text>
                        <Text
                          className="rotate-[102deg] text-[15.01px] text-white-A700"
                          size="txtUrbanistSemiBold1501"
                        >
                          e
                        </Text>
                        <div className="md:h-3 h-[22px] md:ml-[0] ml-[5px] relative w-[52%]">
                          <Text
                            className="absolute bottom-[0] right-[0] rotate-[128deg] text-[15.01px] text-white-A700"
                            size="txtUrbanistSemiBold1501"
                          >
                            o
                          </Text>
                          <Text
                            className="absolute left-[0] rotate-[115deg] text-[15.01px] text-white-A700 top-[0]"
                            size="txtUrbanistSemiBold1501"
                          >
                            v
                          </Text>
                        </div>
                      </div>
                      <div className="absolute flex flex-col items-end justify-start left-full top-[0] w-full">
                        <div className="flex flex-row items-start justify-evenly w-[98%] md:w-full">
                          <Text
                            className="mb-[25px] rotate-[14deg] text-[15.01px] text-white-A700"
                            size="txtUrbanistSemiBold1501"
                          >
                            D
                          </Text>
                          <Text
                            className="mb-[26px] rotate-[2deg] text-[15.01px] text-white-A700"
                            size="txtUrbanistSemiBold1501"
                          >
                            r
                          </Text>
                          <Text
                            className="mb-[25px] rotate-[-9deg] text-[15.01px] text-white-A700"
                            size="txtUrbanistSemiBold1501"
                          >
                            e
                          </Text>
                          <Text
                            className="mb-[21px] mt-1 rotate-[-22deg] text-[15.01px] text-white-A700"
                            size="txtUrbanistSemiBold1501"
                          >
                            a
                          </Text>
                          <Text
                            className="my-3 rotate-[-37deg] text-[15.01px] text-white-A700"
                            size="txtUrbanistSemiBold1501"
                          >
                            m
                          </Text>
                          <Text
                            className="mt-[30px] rotate-[-60deg] text-[15.01px] text-white-A700"
                            size="txtUrbanistSemiBold1501"
                          >
                            P
                          </Text>
                        </div>
                        <Text
                          className="rotate-[-71deg] text-[15.01px] text-white-A700"
                          size="txtUrbanistSemiBold1501"
                        >
                          r
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-x-auto w-px">
                    <div className="relative w-full">
                      <div className="bg-gray-900_02 border border-gray-900_01 border-solid h-[79px] my-auto rounded-[39px] w-[79px]"></div>
                      <Img
                        className="absolute h-[34px] inset-y-[0] left-full my-auto w-[34px]"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5 items-center justify-start w-full">
                <Button
                  className="common-pointer cursor-pointer font-medium min-w-[139px] text-center text-lg"
                  onClick={() => navigate("/aboutuspagedesktop")}
                  shape="round"
                  color="gray_900_01"
                  size="md"
                  variant="outline"
                >
                  Learn More
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-medium min-w-[191px] text-center text-lg"
                  onClick={() => navigate("/propertiespagedesktop")}
                  shape="round"
                  color="deep_purple_A200"
                  size="md"
                  variant="fill"
                >
                  Browse Properties
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col gap-0.5 items-start justify-start sm:px-5 px-6 py-4 rounded-[12px] w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-full"
                    size="txtUrbanistBold40"
                  >
                    200+
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-full"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Happy Customers
                  </Text>
                </div>
                <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col gap-0.5 items-start justify-start sm:px-5 px-6 py-4 rounded-[12px] w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-full"
                    size="txtUrbanistBold40"
                  >
                    10k+
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-full"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Properties For Clients
                  </Text>
                </div>
                <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col gap-0.5 items-start justify-start sm:px-5 px-6 py-4 rounded-[12px] w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-full"
                    size="txtUrbanistBold40"
                  >
                    16+
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-full"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Years of Experience
                  </Text>
                </div>
              </List>
            </div>
            <div
              className="bg-cover bg-gray-900_02 bg-no-repeat flex flex-1 flex-col h-[814px] md:h-auto items-start justify-start md:px-5 w-full"
              style={{ backgroundImage: "url('images/img_banner.png')" }}
            >
              <Img
                className="md:h-auto h-full object-cover w-full"
                src="images/img_image.png"
                alt="image_One"
              />
            </div>
          </div>
          <List
            className="bg-gray-900 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start outline outline-[1px] outline-gray-900_01 p-5 shadow-bs w-full"
            orientation="horizontal"
          >
            <div
              className="common-pointer bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col items-center justify-start px-5 py-10 rounded-[12px] w-full"
              onClick={() => navigate("/propertiespagedesktop")}
            >
              <div className="flex flex-col gap-[22px] justify-start w-3/4 md:w-full">
                <div className="flex flex-row gap-[132px] items-start justify-end md:ml-[0] ml-[61px] w-[81%] md:w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border2 flex flex-col items-center justify-start mt-5 p-2.5 rounded-[50%] w-[82px]">
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
            <div
              className="common-pointer bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col items-center justify-center px-5 py-10 rounded-[12px] w-full"
              onClick={() => navigate("/propertydetailspagedesktop")}
            >
              <div className="flex flex-col gap-6 justify-start w-[74%] md:w-full">
                <div className="flex flex-row gap-[132px] items-start justify-end md:ml-[0] ml-[57px] w-[82%] md:w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border3 flex flex-col items-center justify-start mt-5 p-2.5 rounded-[50%] w-[82px]">
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
            <div
              className="common-pointer bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col items-center justify-start px-5 py-10 rounded-[12px] w-full"
              onClick={() => navigate("/servicespagedesktop")}
            >
              <div className="flex flex-col gap-6 justify-start w-[86%] md:w-full">
                <div className="flex flex-row gap-[132px] items-start justify-end md:ml-[0] ml-[104px] w-[71%] md:w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border4 flex flex-col items-center justify-start mt-5 p-2.5 rounded-[50%] w-[82px]">
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
            <div
              className="common-pointer bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col items-center justify-start px-5 py-10 rounded-[12px] w-full"
              onClick={() => navigate("/contactpagedesktop")}
            >
              <div className="flex flex-col gap-[22px] justify-start w-[92%] md:w-full">
                <div className="flex flex-row gap-[132px] items-start justify-end md:ml-[0] ml-[132px] w-[66%] md:w-full">
                  <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border5 flex flex-col items-center justify-start mt-5 p-2.5 rounded-[50%] w-[82px]">
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
          <div className="flex md:flex-col flex-row md:gap-10 gap-[200px] items-end justify-between w-full">
            <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
              <Img
                className="h-[30px] w-[68px]"
                src="images/img_television.svg"
                alt="television"
              />
              <div className="flex flex-col gap-4 items-start justify-start">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                  size="txtUrbanistSemiBold48"
                >
                  Featured Properties
                </Text>
                <Text
                  className="leading-[150.00%] text-gray-500 text-lg w-full"
                  size="txtUrbanistMedium18Gray500"
                >
                  <>
                    Explore our handpicked selection of featured properties.
                    Each listing offers a glimpse into exceptional homes and
                    investments available through Estatein. Click &quot;View
                    Details&quot; for more information.
                  </>
                </Text>
              </div>
            </div>
            <Button
              className="common-pointer border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[196px] text-center text-lg"
              onClick={() => navigate("/propertiespagedesktop")}
              shape="round"
              color="gray_900_02"
              size="md"
              variant="fill"
            >
              View All Properties
            </Button>
          </div>
          <div className="flex flex-col gap-[50px] items-start justify-start w-full">
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-10 sm:px-5 rounded-[12px] w-full">
                <Img
                  className="h-[318px] md:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_image_318x432.png"
                  alt="image"
                />
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                      size="txtUrbanistSemiBold24"
                    >
                      Seaside Serenity Villa
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[432px] md:max-w-full text-gray-500 text-lg"
                      size="txtUrbanistMedium18Gray500"
                    >
                      <span className="text-gray-500 font-urbanist text-left font-medium">
                        A stunning 4-bedroom, 3-bathroom villa in a peaceful
                        suburban neighborhood...{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-white-A700 font-urbanist text-left font-medium underline"
                      >
                        Read More
                      </a>
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-full">
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[147px] rounded-[21px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-1"
                          src="images/img_icon_white_a700.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_02"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-lg">
                        4-Bedroom
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[152px] rounded-[21px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-1"
                          src="images/img_icon_white_a700_24x24.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_02"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-lg">
                        3-Bathroom
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[89px] rounded-[21px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-1"
                          src="images/img_icon_24x24.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_02"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-lg">Villa</div>
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[50px] items-end justify-start w-full">
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-500 text-lg w-full"
                        size="txtUrbanistMedium18Gray500"
                      >
                        Price
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                        size="txtUrbanistSemiBold24"
                      >
                        $550,000
                      </Text>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex-1 font-medium text-center text-lg w-full"
                      onClick={() => navigate("/propertiespagedesktop")}
                      shape="round"
                      color="deep_purple_A200"
                      size="md"
                      variant="fill"
                    >
                      View Property Details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-10 sm:px-5 rounded-[12px] w-full">
                <Img
                  className="h-[318px] md:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_image_1.png"
                  alt="image"
                />
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                      size="txtUrbanistSemiBold24"
                    >
                      Metropolitan Haven
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[432px] md:max-w-full text-gray-500 text-lg"
                      size="txtUrbanistMedium18Gray500"
                    >
                      <span className="text-gray-500 font-urbanist text-left font-medium">
                        A chic and fully-furnished 2-bedroom apartment with
                        panoramic city views...{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-white-A700 font-urbanist text-left font-medium underline"
                      >
                        Read More
                      </a>
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-full">
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[147px] rounded-[21px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-1"
                          src="images/img_icon_white_a700.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_02"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-lg">
                        2-Bedroom
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[153px] rounded-[21px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-1"
                          src="images/img_icon_white_a700_24x24.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_02"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-lg">
                        2-Bathroom
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[89px] rounded-[21px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-1"
                          src="images/img_icon_24x24.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_02"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-lg">Villa</div>
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[50px] items-end justify-start w-full">
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-500 text-lg w-full"
                        size="txtUrbanistMedium18Gray500"
                      >
                        Price
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                        size="txtUrbanistSemiBold24"
                      >
                        $550,000
                      </Text>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex-1 font-medium text-center text-lg w-full"
                      onClick={() => navigate("/propertiespagedesktop")}
                      shape="round"
                      color="deep_purple_A200"
                      size="md"
                      variant="fill"
                    >
                      View Property Details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-10 sm:px-5 rounded-[12px] w-full">
                <Img
                  className="h-[318px] md:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_image_2.png"
                  alt="image"
                />
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                      size="txtUrbanistSemiBold24"
                    >
                      Rustic Retreat Cottage
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[432px] md:max-w-full text-gray-500 text-lg"
                      size="txtUrbanistMedium18Gray500"
                    >
                      <span className="text-gray-500 font-urbanist text-left font-medium">
                        An elegant 3-bedroom, 2.5-bathroom townhouse in a gated
                        community...{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-white-A700 font-urbanist text-left font-medium underline"
                      >
                        Read More
                      </a>
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-full">
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[146px] rounded-[21px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-1"
                          src="images/img_icon_white_a700.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_02"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-lg">
                        3-Bedroom
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[152px] rounded-[21px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-1"
                          src="images/img_icon_white_a700_24x24.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_02"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-lg">
                        3-Bathroom
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[89px] rounded-[21px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-1"
                          src="images/img_icon_24x24.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_02"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-lg">Villa</div>
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[50px] items-end justify-start w-full">
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-500 text-lg w-full"
                        size="txtUrbanistMedium18Gray500"
                      >
                        Price
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                        size="txtUrbanistSemiBold24"
                      >
                        $550,000
                      </Text>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex-1 font-medium text-center text-lg w-full"
                      onClick={() => navigate("/propertiespagedesktop")}
                      shape="round"
                      color="deep_purple_A200"
                      size="md"
                      variant="fill"
                    >
                      View Property Details
                    </Button>
                  </div>
                </div>
              </div>
            </List>
            <div className="border-gray-900_01 border-solid border-t flex flex-row md:gap-10 items-start justify-between pt-5 w-full">
              <Text
                className="text-gray-500 text-xl w-auto"
                size="txtUrbanistMedium20"
              >
                01 of 60
              </Text>
              <Img
                className="h-[58px] w-[126px]"
                src="images/img_buttonscontainer.svg"
                alt="buttonscontaine"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1616px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[200px] items-end justify-between w-full">
            <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
              <Img
                className="h-[30px] w-[68px]"
                src="images/img_television_gray_900.svg"
                alt="television_One"
              />
              <div className="flex flex-col gap-5 items-start justify-start">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                  size="txtUrbanistSemiBold48"
                >
                  What Our Clients Say
                </Text>
                <Text
                  className="text-gray-500 text-lg w-full"
                  size="txtUrbanistMedium18Gray500"
                >
                  Read the success stories and heartfelt testimonials from our
                  valued clients. Discover why they chose Estatein for their
                  real estate needs.
                </Text>
              </div>
            </div>
            <Button
              className="common-pointer border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[215px] text-center text-lg"
              onClick={() => navigate("/servicespagedesktop")}
              shape="round"
              color="gray_900_02"
              size="md"
              variant="fill"
            >
              View All Testimonials
            </Button>
          </div>
          <div className="flex flex-col gap-[50px] items-start justify-start w-full">
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-10 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape.svg"
                      alt="shape"
                    />
                  </div>
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape_24x24.svg"
                      alt="shape_One"
                    />
                  </div>
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape_1.svg"
                      alt="shape_Two"
                    />
                  </div>
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape_2.svg"
                      alt="shape_Three"
                    />
                  </div>
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape_3.svg"
                      alt="shape_Four"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                    size="txtUrbanistSemiBold24"
                  >
                    Exceptional Service!
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[412px] md:max-w-full text-lg text-white-A700"
                    size="txtUrbanistMedium18"
                  >
                    <>
                      Our experience with Estatein was outstanding. Their
                      team&#39;s dedication and professionalism made finding our
                      dream home a breeze. Highly recommended!
                    </>
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                    src="images/img_profile.png"
                    alt="profile"
                  />
                  <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl w-full"
                      size="txtUrbanistMedium20WhiteA700"
                    >
                      Wade Warren
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-full"
                      size="txtUrbanistMedium18Gray500"
                    >
                      USA, California
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-10 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape_4.svg"
                      alt="shape"
                    />
                  </div>
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape_5.svg"
                      alt="shape_One"
                    />
                  </div>
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape_6.svg"
                      alt="shape_Two"
                    />
                  </div>
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape_7.svg"
                      alt="shape_Three"
                    />
                  </div>
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape_8.svg"
                      alt="shape_Four"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                    size="txtUrbanistSemiBold24"
                  >
                    Efficient and Reliable
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[412px] md:max-w-full text-lg text-white-A700"
                    size="txtUrbanistMedium18"
                  >
                    <>
                      Estatein provided us with top-notch service. They helped
                      us sell our property quickly and at a great price. We
                      couldn&#39;t be happier with the results.
                      <br />
                    </>
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                    src="images/img_profile_60x60.png"
                    alt="profile"
                  />
                  <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl w-full"
                      size="txtUrbanistMedium20WhiteA700"
                    >
                      Emelie Thomson
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-full"
                      size="txtUrbanistMedium18Gray500"
                    >
                      USA, Florida
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-10 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape_9.svg"
                      alt="shape"
                    />
                  </div>
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape_10.svg"
                      alt="shape_One"
                    />
                  </div>
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape_11.svg"
                      alt="shape_Two"
                    />
                  </div>
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape_12.svg"
                      alt="shape_Three"
                    />
                  </div>
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-11">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_shape_13.svg"
                      alt="shape_Four"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                    size="txtUrbanistSemiBold24"
                  >
                    Trusted Advisors
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[412px] md:max-w-full text-lg text-white-A700"
                    size="txtUrbanistMedium18"
                  >
                    The Estatein team guided us through the entire buying
                    process. Their knowledge and commitment to our needs were
                    impressive. Thank you for your support!
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                    src="images/img_profile_1.png"
                    alt="profile"
                  />
                  <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl w-full"
                      size="txtUrbanistMedium20WhiteA700"
                    >
                      John Mans
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-full"
                      size="txtUrbanistMedium18Gray500"
                    >
                      USA, Nevada
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="border-gray-900_01 border-solid border-t flex flex-row md:gap-10 items-start justify-between pt-5 w-full">
              <Text
                className="text-gray-500 text-xl w-auto"
                size="txtUrbanistMedium20"
              >
                01 of 10
              </Text>
              <Img
                className="h-[58px] w-[126px]"
                src="images/img_buttonscontainer.svg"
                alt="buttonscontaine_One"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1616px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[200px] items-end justify-between w-full">
            <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
              <Img
                className="h-[30px] w-[68px]"
                src="images/img_television_gray_900_30x68.svg"
                alt="television_Two"
              />
              <div className="flex flex-col gap-4 items-start justify-start">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                  size="txtUrbanistSemiBold48"
                >
                  Frequently Asked Questions
                </Text>
                <Text
                  className="leading-[150.00%] text-gray-500 text-lg w-full"
                  size="txtUrbanistMedium18Gray500"
                >
                  <>
                    Find answers to common questions about Estatein&#39;s
                    services, property listings, and the real estate process.
                    We&#39;re here to provide clarity and assist you every step
                    of the way.
                  </>
                </Text>
              </div>
            </div>
            <Button
              className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[160px] text-center text-lg"
              shape="round"
              color="gray_900_02"
              size="md"
              variant="fill"
            >
              View All FAQ’s
            </Button>
          </div>
          <div className="flex flex-col gap-[50px] items-start justify-start w-full">
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtUrbanistSemiBold24"
                >
                  How do I search for properties on Estatein?
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg tracking-[-0.11px]"
                  size="txtUrbanistMedium18Gray500"
                >
                  Learn how to use our user-friendly search tools to find
                  properties that match your criteria.
                </Text>
                <Button
                  className="common-pointer border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[134px] text-center text-lg tracking-[-0.11px]"
                  onClick={() => navigate("/servicespagedesktop")}
                  shape="round"
                  color="gray_900_02"
                  size="md"
                  variant="fill"
                >
                  Read More
                </Button>
              </div>
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtUrbanistSemiBold24"
                >
                  What documents do I need to sell my property through Estatein?
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg tracking-[-0.11px]"
                  size="txtUrbanistMedium18Gray500"
                >
                  Find out about the necessary documentation for listing your
                  property with us.
                </Text>
                <Button
                  className="common-pointer border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[134px] text-center text-lg tracking-[-0.11px]"
                  onClick={() => navigate("/servicespagedesktop")}
                  shape="round"
                  color="gray_900_02"
                  size="md"
                  variant="fill"
                >
                  Read More
                </Button>
              </div>
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                  size="txtUrbanistSemiBold24"
                >
                  <>
                    How can I contact an Estatein agent?
                    <br />
                  </>
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg tracking-[-0.11px]"
                  size="txtUrbanistMedium18Gray500"
                >
                  Discover the different ways you can get in touch with our
                  experienced agents.
                </Text>
                <Button
                  className="common-pointer border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[134px] text-center text-lg tracking-[-0.11px]"
                  onClick={() => navigate("/servicespagedesktop")}
                  shape="round"
                  color="gray_900_02"
                  size="md"
                  variant="fill"
                >
                  Read More
                </Button>
              </div>
            </List>
            <div className="border-gray-900_01 border-solid border-t flex flex-row md:gap-10 items-start justify-between pt-5 w-full">
              <Text
                className="text-gray-500 text-xl w-auto"
                size="txtUrbanistMedium20"
              >
                01 of 10
              </Text>
              <Img
                className="h-[58px] w-[126px]"
                src="images/img_buttonscontainer.svg"
                alt="buttonscontaine_Two"
              />
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-24 md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomePageDesktopPage;
