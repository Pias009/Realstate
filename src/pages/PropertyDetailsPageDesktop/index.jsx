import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const PropertyDetailsPageDesktopPage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-urbanist items-center justify-start mx-auto w-full">
        <Header className="border-b border-gray-900_01 border-solid flex md:flex-col md:gap-5 items-center justify-center mt-[50px] sm:mt-[] md:px-5 w-full" />
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1596px] mt-[120px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[50px] items-start justify-start w-full">
            <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start w-full">
              <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start ml-5 w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtUrbanistSemiBold30"
                >
                  Seaside Serenity Villa
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[188px] rounded-lg"
                  leftIcon={
                    <Img
                      className="h-6 mr-1.5"
                      src="images/img_icon_9.svg"
                      alt="Icon"
                    />
                  }
                  shape="round"
                  color="gray_900_01"
                  size="xs"
                  variant="outline"
                >
                  <div className="font-medium text-left text-lg">
                    Malibu, California
                  </div>
                </Button>
              </div>
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
                  $1,250,000
                </Text>
              </div>
            </div>
            <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col gap-[30px] items-center justify-center p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
              <div className="bg-gray-900 border border-gray-900_01 border-solid sm:flex sm:flex-col gap-5 grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 items-start sm:items-stretch justify-start p-5 rounded-[12px] w-full">
                <Img
                  className="flex-1 h-[94px] md:h-auto max-h-[94px] object-cover rounded-lg sm:w-[]"
                  src="images/img_image_94x144.png"
                  alt="image"
                />
                <Img
                  className="flex-1 h-[94px] md:h-auto max-h-[94px] object-cover rounded-lg sm:w-[]"
                  src="images/img_image_7.png"
                  alt="image_One"
                />
                <Img
                  className="flex-1 h-[94px] md:h-auto max-h-[94px] object-cover rounded-lg sm:w-[]"
                  src="images/img_image_8.png"
                  alt="image_Two"
                />
                <Img
                  className="flex-1 h-[94px] md:h-auto max-h-[94px] object-cover rounded-lg sm:w-[]"
                  src="images/img_image_9.png"
                  alt="image_Three"
                />
                <Img
                  className="flex-1 h-[94px] md:h-auto max-h-[94px] object-cover rounded-lg sm:w-[]"
                  src="images/img_image_10.png"
                  alt="image_Four"
                />
                <Img
                  className="flex-1 h-[94px] md:h-auto max-h-[94px] object-cover rounded-lg sm:w-[]"
                  src="images/img_image_11.png"
                  alt="image_Five"
                />
                <Img
                  className="flex-1 h-[94px] md:h-auto max-h-[94px] object-cover rounded-lg sm:w-[]"
                  src="images/img_image_12.png"
                  alt="image_Six"
                />
                <Img
                  className="flex-1 h-[94px] md:h-auto max-h-[94px] object-cover rounded-lg sm:w-[]"
                  src="images/img_image_13.png"
                  alt="image_Seven"
                />
                <Img
                  className="flex-1 h-[94px] md:h-auto max-h-[94px] object-cover rounded-lg sm:w-[]"
                  src="images/img_image_14.png"
                  alt="image_Eight"
                />
              </div>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="w-full"
                items={[...Array(6)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col items-start justify-start max-w-[1496px] mx-2.5">
                      <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
                        <Img
                          className="flex-1 h-[583px] md:h-auto object-cover rounded-[10px] w-full"
                          src="images/img_image_583x733.png"
                          alt="image"
                        />
                        <Img
                          className="flex-1 h-[583px] md:h-auto object-cover rounded-[10px] w-full"
                          src="images/img_image_15.png"
                          alt="image_One"
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer h-[5px] bg-deep_purple-A200 w-5 rounded-sm" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer h-[5px] bg-gray-800 w-5 rounded-sm"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <div className="bg-gray-900 flex flex-row gap-2.5 items-center justify-start p-2.5 rounded-[39px] w-auto">
                <Img
                  className="rounded-[50%] w-[58px]"
                  src="images/img_button.svg"
                  alt="button"
                />
                <PagerIndicator
                  className="flex gap-1 h-[5px] items-start justify-start w-[140px]"
                  count={6}
                  activeCss="inline-block cursor-pointer h-[5px] bg-deep_purple-A200 w-5 rounded-sm"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer h-[5px] bg-gray-800 w-5 rounded-sm"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Img
                  className="rounded-[50%] w-[58px]"
                  src="images/img_button_gray_900_02.svg"
                  alt="button_One"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-full">
            <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                  size="txtUrbanistSemiBold24"
                >
                  Description
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[683px] md:max-w-full text-gray-500 text-lg"
                  size="txtUrbanistMedium18Gray500"
                >
                  Discover your own piece of paradise with the Seaside Serenity
                  Villa. T With an open floor plan, breathtaking ocean views
                  from every room, and direct access to a pristine sandy beach,
                  this property is the epitome of coastal living.
                </Text>
              </div>
              <List
                className="border-gray-900_01 border-solid border-t sm:flex-col flex-row gap-5 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(2,_1fr_1px)_1fr] justify-start pt-5 w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_10.svg"
                      alt="icon"
                    />
                    <Text
                      className="flex-1 text-gray-500 text-lg w-auto"
                      size="txtUrbanistMedium18Gray500"
                    >
                      Bedrooms
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtUrbanistSemiBold24"
                  >
                    04
                  </Text>
                </div>
                <Line className="self-center h-[73px] bg-gray-900_01 w-px" />
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_11.svg"
                      alt="icon"
                    />
                    <Text
                      className="flex-1 text-gray-500 text-lg w-auto"
                      size="txtUrbanistMedium18Gray500"
                    >
                      Bathrooms
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                    size="txtUrbanistSemiBold24"
                  >
                    03
                  </Text>
                </div>
                <Line className="self-center h-[73px] bg-gray-900_01 w-px" />
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_12.svg"
                      alt="icon"
                    />
                    <Text
                      className="flex-1 text-gray-500 text-lg w-auto"
                      size="txtUrbanistMedium18Gray500"
                    >
                      Area
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                    size="txtUrbanistSemiBold24"
                  >
                    2,500 Square Feet
                  </Text>
                </div>
              </List>
            </div>
            <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                size="txtUrbanistSemiBold24"
              >
                Key Features and Amenities
              </Text>
              <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                <Input
                  name="container"
                  placeholder="Expansive oceanfront terrace for outdoor entertaining"
                  className="!placeholder:text-gray-500 !text-gray-500 font-medium p-0 text-left text-lg w-full"
                  wrapClassName="bg-gradient2  flex w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6 mr-2.5"
                      src="images/img_icon_13.svg"
                      alt="Icon"
                    />
                  }
                  shape="square"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                ></Input>
                <Input
                  name="container_One"
                  placeholder="Gourmet kitchen with top-of-the-line appliances"
                  className="!placeholder:text-gray-500 !text-gray-500 font-medium p-0 text-left text-lg w-full"
                  wrapClassName="bg-gradient2  flex w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6 mr-2.5"
                      src="images/img_icon_13.svg"
                      alt="Icon"
                    />
                  }
                  shape="square"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                ></Input>
                <Input
                  name="container_Two"
                  placeholder="Private beach access for morning strolls and sunset views"
                  className="!placeholder:text-gray-500 !text-gray-500 font-medium p-0 text-left text-lg w-full"
                  wrapClassName="bg-gradient2  flex w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6 mr-2.5"
                      src="images/img_icon_13.svg"
                      alt="Icon"
                    />
                  }
                  shape="square"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                ></Input>
                <Input
                  name="container_Three"
                  placeholder="Master suite with a spa-inspired bathroom and ocean-facing balcony"
                  className="!placeholder:text-gray-500 !text-gray-500 font-medium p-0 text-left text-lg w-full"
                  wrapClassName="bg-gradient2  flex w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6 mr-2.5"
                      src="images/img_icon_13.svg"
                      alt="Icon"
                    />
                  }
                  shape="square"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                ></Input>
                <Input
                  name="container_Four"
                  placeholder="Private garage and ample storage space"
                  className="!placeholder:text-gray-500 !text-gray-500 font-medium p-0 text-left text-lg w-full"
                  wrapClassName="bg-gradient2  flex w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6 mr-2.5"
                      src="images/img_icon_13.svg"
                      alt="Icon"
                    />
                  }
                  shape="square"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                ></Input>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start max-w-[1623px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-1 flex-col gap-3.5 items-start justify-start w-[539px] sm:w-full">
            <Img
              className="h-[30px] w-[68px]"
              src="images/img_television_8.svg"
              alt="television"
            />
            <div className="flex flex-col gap-3.5 items-center justify-start">
              <Text
                className="leading-[150.00%] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Inquire About Seaside Serenity Villa
              </Text>
              <Text
                className="leading-[150.00%] text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                Interested in this property? Fill out the form below, and our
                real estate experts will get back to you with more details,
                including scheduling a viewing and answering any questions you
                may have.
              </Text>
            </div>
          </div>
          <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-[50px] items-center justify-center p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtUrbanistSemiBold20"
                  >
                    First Name
                  </Text>
                  <Input
                    name="inputfield"
                    placeholder="Enter First Name"
                    className="font-medium p-0 placeholder:text-gray-700 text-left text-lg w-full"
                    wrapClassName="border border-gray-900_01 border-solid w-full"
                    type="text"
                    shape="round"
                    color="gray_900_02"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtUrbanistSemiBold20"
                  >
                    Last Name
                  </Text>
                  <Input
                    name="inputfield_One"
                    placeholder="Enter Last Name"
                    className="font-medium p-0 placeholder:text-gray-700 text-left text-lg w-full"
                    wrapClassName="border border-gray-900_01 border-solid w-full"
                    type="text"
                    shape="round"
                    color="gray_900_02"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtUrbanistSemiBold20"
                  >
                    Email
                  </Text>
                  <Input
                    name="inputfield_Two"
                    placeholder="Enter your Email"
                    className="font-medium p-0 placeholder:text-gray-700 text-left text-lg w-full"
                    wrapClassName="border border-gray-900_01 border-solid w-full"
                    type="email"
                    shape="round"
                    color="gray_900_02"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtUrbanistSemiBold20"
                  >
                    Phone
                  </Text>
                  <Input
                    name="inputfield_Three"
                    placeholder="Enter Phone Number"
                    className="font-medium p-0 placeholder:text-gray-700 text-left text-lg w-full"
                    wrapClassName="border border-gray-900_01 border-solid w-full"
                    type="number"
                    shape="round"
                    color="gray_900_02"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-white-A700 text-xl w-full"
                  size="txtUrbanistSemiBold20"
                >
                  Selected Property
                </Text>
                <Input
                  name="inputfield_Four"
                  placeholder="Seaside Serenity Villa, Malibu, California"
                  className="!placeholder:text-gray-300 !text-gray-300 font-medium p-0 text-left text-xl w-full"
                  wrapClassName="flex w-full"
                  suffix={
                    <Img
                      className="mt-auto mb-0.5 h-6 ml-[35px]"
                      src="images/img_icon_gray_300.svg"
                      alt="Icon"
                    />
                  }
                  shape="round"
                  color="gray_900_02"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-white-A700 text-xl w-full"
                  size="txtUrbanistSemiBold20"
                >
                  Message
                </Text>
                <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col h-[170px] md:h-auto items-start justify-start px-5 py-6 rounded-lg w-full">
                  <Text
                    className="text-gray-700 text-lg w-auto"
                    size="txtUrbanistMedium18Gray700"
                  >
                    Enter your Message here..
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[50px] items-center justify-center w-full">
              <div className="flex flex-1 sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                <div className="bg-gray-900_02 border border-gray-900_01 border-solid h-7 rounded w-7"></div>
                <Text
                  className="flex-1 text-gray-500 text-lg w-auto"
                  size="txtUrbanistMedium18Gray500"
                >
                  <span className="text-gray-500 font-urbanist text-left font-medium">
                    I agree with{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-gray-500 font-urbanist text-left font-medium underline"
                  >
                    Terms of Use
                  </a>
                  <span className="text-gray-500 font-urbanist text-left font-medium">
                    {" "}
                    and{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-gray-500 font-urbanist text-left font-medium underline"
                  >
                    Privacy Policy
                  </a>
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[250px] rounded-lg text-center text-lg"
                shape="round"
                color="deep_purple_A200"
                size="md"
                variant="fill"
              >
                Send Your Message
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1616px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Img
              className="h-[30px] w-[68px]"
              src="images/img_television_9.svg"
              alt="television_One"
            />
            <div className="flex flex-col gap-4 items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Comprehensive Pricing Details
              </Text>
              <Text
                className="leading-[150.00%] text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                At Estatein, transparency is key. We want you to have a clear
                understanding of all costs associated with your property
                investment. Below, we break down the pricing for Seaside
                Serenity Villa to help you make an informed decision
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] items-start justify-start w-full">
            <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex md:flex-col flex-row gap-5 items-center justify-start md:px-10 sm:px-5 px-[50px] py-[30px] rounded-[12px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtUrbanistSemiBold24"
              >
                Note
              </Text>
              <Line className="bg-gray-900_01 h-9 md:h-px md:w-full w-px" />
              <Text
                className="flex-1 text-gray-500 text-lg w-auto"
                size="txtUrbanistMedium18Gray500"
              >
                The figures provided above are estimates and may vary depending
                on the property, location, and individual circumstances.
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-full">
              <div className="flex flex-col gap-0.5 items-start justify-start w-[220px]">
                <Text
                  className="text-gray-500 text-xl w-full"
                  size="txtUrbanistMedium20"
                >
                  Listing Price
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-full"
                  size="txtUrbanistSemiBold40"
                >
                  $1,250,000
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-[50px] items-start justify-start w-full">
                <div className="border border-gray-900_01 border-solid flex flex-col gap-10 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                  <div className="flex flex-row gap-10 items-center justify-start w-full">
                    <Text
                      className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtUrbanistSemiBold24"
                    >
                      Additional Fees
                    </Text>
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[139px] text-center text-lg"
                      shape="round"
                      color="gray_900_02"
                      size="md"
                      variant="fill"
                    >
                      Learn More
                    </Button>
                  </div>
                  <List
                    className="flex flex-col gap-10 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-500 text-lg w-full"
                          size="txtUrbanistMedium18Gray500"
                        >
                          Property Transfer Tax
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtUrbanistSemiBold24"
                          >
                            $25,000
                          </Text>
                          <Button
                            className="!text-gray-500 border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[380px] sm:min-w-full rounded-[21px] text-center text-lg"
                            color="gray_900_02"
                            size="xs"
                            variant="fill"
                          >
                            Based on the sale price and local regulations
                          </Button>
                        </div>
                      </div>
                      <Line className="bg-gray-900_01 h-[86px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-500 text-lg w-full"
                          size="txtUrbanistMedium18Gray500"
                        >
                          Legal Fees
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtUrbanistSemiBold24"
                          >
                            $3,000
                          </Text>
                          <Button
                            className="!text-gray-500 border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[488px] sm:min-w-full rounded-[21px] text-center text-lg"
                            color="gray_900_02"
                            size="xs"
                            variant="fill"
                          >
                            Approximate cost for legal services, including title
                            transfer
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-gray-900_01 w-full" />
                    <div className="flex flex-1 md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-500 text-lg w-full"
                          size="txtUrbanistMedium18Gray500"
                        >
                          Home Inspection
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtUrbanistSemiBold24"
                          >
                            $500
                          </Text>
                          <Button
                            className="!text-gray-500 border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[287px] rounded-[21px] text-center text-lg"
                            color="gray_900_02"
                            size="xs"
                            variant="fill"
                          >
                            Recommended for due diligence
                          </Button>
                        </div>
                      </div>
                      <Line className="bg-gray-900_01 h-[86px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-500 text-lg w-full"
                          size="txtUrbanistMedium18Gray500"
                        >
                          Property Insurance
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtUrbanistSemiBold24"
                          >
                            $1,200
                          </Text>
                          <Button
                            className="!text-gray-500 border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[427px] sm:min-w-full rounded-[21px] text-center text-lg"
                            color="gray_900_02"
                            size="xs"
                            variant="fill"
                          >
                            Annual cost for comprehensive property insurance
                          </Button>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-gray-500 text-lg w-full"
                      size="txtUrbanistMedium18Gray500"
                    >
                      Mortgage Fees
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                        size="txtUrbanistSemiBold24"
                      >
                        Varies
                      </Text>
                      <Button
                        className="!text-gray-500 border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[471px] sm:min-w-full rounded-[21px] text-center text-lg"
                        color="gray_900_02"
                        size="xs"
                        variant="fill"
                      >
                        If applicable, consult with your lender for specific
                        details
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-900_01 border-solid flex flex-col gap-10 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                  <div className="flex flex-row gap-10 items-center justify-start w-full">
                    <Text
                      className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtUrbanistSemiBold24"
                    >
                      Monthly Costs
                    </Text>
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[139px] text-center text-lg"
                      shape="round"
                      color="gray_900_02"
                      size="md"
                      variant="fill"
                    >
                      Learn More
                    </Button>
                  </div>
                  <List
                    className="flex flex-col gap-10 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-gray-500 text-lg w-full"
                        size="txtUrbanistMedium18Gray500"
                      >
                        Property Taxes
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                          size="txtUrbanistSemiBold24"
                        >
                          $1,250
                        </Text>
                        <Button
                          className="!text-gray-500 border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[617px] md:min-w-full rounded-[21px] text-center text-lg"
                          color="gray_900_02"
                          size="xs"
                          variant="fill"
                        >
                          Approximate monthly property tax based on the sale
                          price and local rates
                        </Button>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-gray-900_01 w-full" />
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-gray-500 text-lg w-full"
                        size="txtUrbanistMedium18Gray500"
                      >
                        <>Homeowners&#39; Association Fee</>
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                          size="txtUrbanistSemiBold24"
                        >
                          $300
                        </Text>
                        <Button
                          className="!text-gray-500 border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[476px] sm:min-w-full rounded-[21px] text-center text-lg"
                          color="gray_900_02"
                          size="xs"
                          variant="fill"
                        >
                          Monthly fee for common area maintenance and security
                        </Button>
                      </div>
                    </div>
                  </List>
                </div>
                <List
                  className="flex flex-col gap-[50px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-10 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                    <div className="flex flex-row gap-10 items-center justify-start w-full">
                      <Text
                        className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                        size="txtUrbanistSemiBold24"
                      >
                        Total Initial Costs
                      </Text>
                      <Button
                        className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[139px] text-center text-lg"
                        shape="round"
                        color="gray_900_02"
                        size="md"
                        variant="fill"
                      >
                        Learn More
                      </Button>
                    </div>
                    <Line className="bg-gray-900_01 h-px w-full" />
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-500 text-lg w-full"
                          size="txtUrbanistMedium18Gray500"
                        >
                          Listing Price
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                          size="txtUrbanistSemiBold24"
                        >
                          $1,250,000
                        </Text>
                      </div>
                      <Line className="bg-gray-900_01 h-[86px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-500 text-lg w-full"
                          size="txtUrbanistMedium18Gray500"
                        >
                          Additional Fees
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtUrbanistSemiBold24"
                          >
                            $29,700
                          </Text>
                          <Button
                            className="!text-gray-500 border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[451px] sm:min-w-full rounded-[21px] text-center text-lg"
                            color="gray_900_02"
                            size="xs"
                            variant="fill"
                          >
                            Property transfer tax, legal fees, inspection,
                            insurance
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray-900_01 h-px w-full" />
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-500 text-lg w-full"
                          size="txtUrbanistMedium18Gray500"
                        >
                          Down Payment
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtUrbanistSemiBold24"
                          >
                            $250,000
                          </Text>
                          <Button
                            className="!text-gray-500 border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[61px] rounded-[21px] text-center text-lg"
                            color="gray_900_02"
                            size="xs"
                            variant="fill"
                          >
                            20%
                          </Button>
                        </div>
                      </div>
                      <Line className="bg-gray-900_01 h-[86px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-500 text-lg w-full"
                          size="txtUrbanistMedium18Gray500"
                        >
                          Mortgage Amount
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtUrbanistSemiBold24"
                          >
                            $1,000,000
                          </Text>
                          <Button
                            className="!text-gray-500 border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[126px] rounded-[21px] text-center text-lg"
                            color="gray_900_02"
                            size="xs"
                            variant="fill"
                          >
                            If applicable
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-10 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                    <div className="flex sm:flex-col flex-row gap-10 items-center justify-start w-full">
                      <Text
                        className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                        size="txtUrbanistSemiBold24"
                      >
                        Monthly Expenses
                      </Text>
                      <Button
                        className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[139px] text-center text-lg"
                        shape="round"
                        color="gray_900_02"
                        size="md"
                        variant="fill"
                      >
                        Learn More
                      </Button>
                    </div>
                    <Line className="bg-gray-900_01 h-px w-full" />
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-500 text-lg w-full"
                          size="txtUrbanistMedium18Gray500"
                        >
                          Property Taxes
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                          size="txtUrbanistSemiBold24"
                        >
                          $1,250
                        </Text>
                      </div>
                      <Line className="bg-gray-900_01 h-[79px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-500 text-lg w-full"
                          size="txtUrbanistMedium18Gray500"
                        >
                          <>Homeowners&#39; Association Fee</>
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                          size="txtUrbanistSemiBold24"
                        >
                          $300
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray-900_01 h-px w-full" />
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-500 text-lg w-full"
                          size="txtUrbanistMedium18Gray500"
                        >
                          Mortgage Payment
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtUrbanistRegular24"
                          >
                            Varies based on terms and interest rate
                          </Text>
                          <Button
                            className="!text-gray-500 border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[126px] rounded-[21px] text-center text-lg"
                            color="gray_900_02"
                            size="xs"
                            variant="fill"
                          >
                            If applicable
                          </Button>
                        </div>
                      </div>
                      <Line className="bg-gray-900_01 h-[86px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-500 text-lg w-full"
                          size="txtUrbanistMedium18Gray500"
                        >
                          Property Insurance
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtUrbanistSemiBold24"
                          >
                            $100
                          </Text>
                          <Button
                            className="!text-gray-500 border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[239px] rounded-[21px] text-center text-lg"
                            color="gray_900_02"
                            size="xs"
                            variant="fill"
                          >
                            Approximate monthly cost
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1616px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[200px] items-end justify-between w-full">
            <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
              <Img
                className="h-[30px] w-[68px]"
                src="images/img_television_10.svg"
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
                  className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[134px] text-center text-lg tracking-[-0.11px]"
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
                  className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[134px] text-center text-lg tracking-[-0.11px]"
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
                  className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[134px] text-center text-lg tracking-[-0.11px]"
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
                alt="buttonscontaine"
              />
            </div>
          </div>
        </div>
        <Footer
          className="flex items-center justify-center mt-[150px] md:px-5 w-full"
          onClick={() => navigate("/propertiespagedesktop")}
        />
      </div>
    </>
  );
};

export default PropertyDetailsPageDesktopPage;
