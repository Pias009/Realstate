import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const PropertiesPageDesktopPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-urbanist items-center justify-start mx-auto w-full">
        <Header
          className="border-b border-gray-900_01 border-solid flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full"
          onClick={() => navigate("/homepagedesktop")}
          onClick1={() => navigate("/contactpagedesktop")}
        />
        <div className="flex flex-col md:px-5 relative w-[1920px] md:w-full">
          <div className="bg-gradient1  border-b border-gray-900_01 border-solid flex flex-col items-start justify-end mx-auto pb-40 pl-[162px] pr-[400px] pt-[150px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-4 items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Find Your Dream Property
              </Text>
              <Text
                className="leading-[150.00%] text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                Welcome to Estatein, where your dream property awaits in every
                corner of our beautiful world. Explore our curated selection of
                properties, each offering a unique story and a chance to
                redefine your life. With categories to suit every dreamer, your
                journey{" "}
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-center justify-start mt-[-52px] mx-auto md:px-10 sm:px-5 px-[162px] w-full z-[1]">
            <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[148px] w-full">
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex sm:flex-col flex-row gap-[50px] items-center justify-start sm:pl-5 pl-6 pr-5 py-5 rounded-tl-[12px] rounded-tr-[12px] shadow-bs w-full">
                <Text
                  className="flex-1 text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                  size="txtUrbanistMedium24"
                >
                  Search For A Property
                </Text>
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[185px]"
                  onClick={() => navigate("/propertiespagedesktop")}
                  leftIcon={
                    <Img
                      className="h-6 mb-px mr-2"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  shape="round"
                  color="deep_purple_A200"
                  size="md"
                  variant="fill"
                >
                  <div className="font-medium text-left text-lg">
                    Find Property
                  </div>
                </Button>
              </div>
            </div>
            <List
              className="bg-gray-900_02 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start p-2.5 rounded-[12px] w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-row gap-[50px] items-center justify-start p-5 rounded-[12px] w-full">
                <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_3.svg"
                    alt="icon"
                  />
                  <Line className="bg-gray-900_01 h-[27px] w-px" />
                  <Text
                    className="flex-1 text-gray-500 text-lg w-auto"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Location
                  </Text>
                </div>
                <Button
                  className="flex h-8 items-center justify-center w-8"
                  shape="circle"
                  color="gray_900_02"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_arrowdown.svg" alt="arrowdown" />
                </Button>
              </div>
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-row gap-[50px] items-center justify-start p-5 rounded-[12px] w-full">
                <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                  <Line className="bg-gray-900_01 h-[27px] w-px" />
                  <Text
                    className="flex-1 text-gray-500 text-lg w-auto"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Property Type
                  </Text>
                </div>
                <Button
                  className="flex h-8 items-center justify-center w-8"
                  shape="circle"
                  color="gray_900_02"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_arrowdown.svg" alt="arrowdown" />
                </Button>
              </div>
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-row gap-[50px] items-center justify-start p-5 rounded-[12px] w-full">
                <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_4.svg"
                    alt="icon"
                  />
                  <Line className="bg-gray-900_01 h-[27px] w-px" />
                  <Text
                    className="flex-1 text-gray-500 text-lg w-auto"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Pricing Range
                  </Text>
                </div>
                <Button
                  className="flex h-8 items-center justify-center w-8"
                  shape="circle"
                  color="gray_900_02"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_arrowdown.svg" alt="arrowdown" />
                </Button>
              </div>
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-row gap-[50px] items-center justify-start p-5 rounded-[12px] w-full">
                <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_thumbsup_gray_500.svg"
                    alt="thumbsup"
                  />
                  <Line className="bg-gray-900_01 h-[27px] w-px" />
                  <Text
                    className="flex-1 text-gray-500 text-lg w-auto"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Property Size
                  </Text>
                </div>
                <Button
                  className="flex h-8 items-center justify-center w-8"
                  shape="circle"
                  color="gray_900_02"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_arrowdown.svg" alt="arrowdown" />
                </Button>
              </div>
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-row gap-[50px] items-center justify-start p-5 rounded-[12px] w-full">
                <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_5.svg"
                    alt="icon"
                  />
                  <Line className="bg-gray-900_01 h-[27px] w-px" />
                  <Text
                    className="flex-1 text-gray-500 text-lg w-auto"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Build Year
                  </Text>
                </div>
                <Button
                  className="flex h-8 items-center justify-center w-8"
                  shape="circle"
                  color="gray_900_02"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_arrowdown.svg" alt="arrowdown" />
                </Button>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1617px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[250px] w-full">
            <Img
              className="h-[30px] w-[68px]"
              src="images/img_television_6.svg"
              alt="television"
            />
            <div className="flex flex-col gap-[26px] items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Discover a World of Possibilities
              </Text>
              <Text
                className="text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                Our portfolio of properties is as diverse as your dreams.
                Explore the following categories to find the perfect property
                that resonates with your vision of home
              </Text>
            </div>
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
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[344px] rounded-[21px] text-center text-lg"
                      color="gray_900_02"
                      size="xs"
                      variant="fill"
                    >
                      Coastal Escapes - Where Waves Beckon
                    </Button>
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
                          Wake up to the soothing melody of waves. This
                          beachfront villa offers...{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-white-A700 font-urbanist text-left font-medium underline"
                        >
                          Read More
                        </a>
                      </Text>
                    </div>
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
                        $1,250,000
                      </Text>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex-1 font-medium text-center text-lg w-full"
                      onClick={() => navigate("/propertydetailspagedesktop")}
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
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[355px] rounded-[21px] text-center text-lg"
                      color="gray_900_02"
                      size="xs"
                      variant="fill"
                    >
                      Urban Oasis - Life in the Heart of the City
                    </Button>
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
                          Immerse yourself in the energy of the city. This
                          modern apartment in the heart...{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-white-A700 font-urbanist text-left font-medium underline"
                        >
                          Read More
                        </a>
                      </Text>
                    </div>
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
                        $650,000
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex-1 font-medium text-center text-lg w-full"
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
                  src="images/img_image_6.png"
                  alt="image"
                />
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Button
                      className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[422px] sm:min-w-full rounded-[21px] text-center text-lg"
                      color="gray_900_02"
                      size="xs"
                      variant="fill"
                    >
                      <>Countryside Charm - Escape to Nature&#39;s Embrace</>
                    </Button>
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
                          Find tranquility in the countryside. This charming
                          cottage is nestled amidst rolling hills...{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-white-A700 font-urbanist text-left font-medium underline"
                        >
                          Read More
                        </a>
                      </Text>
                    </div>
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
                        $350,000
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex-1 font-medium text-center text-lg w-full"
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
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1617px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Img
              className="h-[30px] w-[68px]"
              src="images/img_television_7.svg"
              alt="television_One"
            />
            <div className="flex flex-col gap-4 items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                <>Let&#39;s Make it Happen</>
              </Text>
              <Text
                className="leading-[150.00%] text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                <>
                  Ready to take the first step toward your dream property? Fill
                  out the form below, and our real estate wizards will work
                  their magic to find your perfect match. Don&#39;t wait;
                  let&#39;s embark on this exciting journey together.
                </>
              </Text>
            </div>
          </div>
          <div className="border border-gray-900_01 border-solid flex flex-col gap-[50px] items-center justify-center p-[100px] md:px-10 sm:px-5 rounded-[12px] w-full">
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
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
              <div className="gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtUrbanistSemiBold20"
                  >
                    Preferred Location
                  </Text>
                  <Input
                    name="inputfield_Four"
                    placeholder="Select Location"
                    className="font-medium p-0 placeholder:text-gray-700 text-left text-lg w-full"
                    wrapClassName="border border-gray-900_01 border-solid flex w-full"
                    suffix={
                      <Img
                        className="h-6 ml-[35px] my-auto"
                        src="images/img_icon_6.svg"
                        alt="Icon"
                      />
                    }
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
                    Property Type
                  </Text>
                  <Input
                    name="inputfield_Five"
                    placeholder="Select Property Type"
                    className="font-medium p-0 placeholder:text-gray-700 text-left text-lg w-full"
                    wrapClassName="border border-gray-900_01 border-solid flex w-full"
                    suffix={
                      <Img
                        className="mt-auto mb-px h-6 ml-[35px]"
                        src="images/img_icon_6.svg"
                        alt="Icon"
                      />
                    }
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
                    No. of Bathrooms
                  </Text>
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-row gap-3 items-center justify-start px-5 py-[22px] rounded-lg w-full">
                    <Text
                      className="flex-1 text-gray-700 text-lg w-auto"
                      size="txtUrbanistMedium18Gray700"
                    >
                      Select no. of Bedrooms
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_6.svg"
                      alt="icon"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtUrbanistSemiBold20"
                  >
                    No. of Bedrooms
                  </Text>
                  <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-row gap-3 items-center justify-start px-5 py-[22px] rounded-lg w-full">
                    <Text
                      className="flex-1 text-gray-700 text-lg w-auto"
                      size="txtUrbanistMedium18Gray700"
                    >
                      Select no. of Bedrooms
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_6.svg"
                      alt="icon_One"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtUrbanistSemiBold20"
                  >
                    Budget
                  </Text>
                  <Input
                    name="inputfield_Six"
                    placeholder="Select Budget"
                    className="font-medium p-0 placeholder:text-gray-700 text-left text-lg w-full"
                    wrapClassName="border border-gray-900_01 border-solid flex w-full"
                    suffix={
                      <Img
                        className="mt-auto mb-px h-6 ml-[35px]"
                        src="images/img_icon_6.svg"
                        alt="Icon"
                      />
                    }
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
                    Preferred Contact Method
                  </Text>
                  <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                    <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-row gap-3 items-center justify-start sm:px-5 px-6 py-[22px] rounded-lg w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_icon_7.svg"
                        alt="icon_Two"
                      />
                      <Text
                        className="flex-1 text-gray-700 text-lg w-auto"
                        size="txtUrbanistMedium18Gray700"
                      >
                        Enter Your Number
                      </Text>
                      <div className="bg-deep_purple-A200 h-4 rounded-[50%] w-4"></div>
                    </div>
                    <Input
                      name="inputfield_Seven"
                      placeholder="Enter Your Email"
                      className="font-medium p-0 placeholder:text-gray-700 text-left text-lg w-full"
                      wrapClassName="border border-gray-900_01 border-solid flex flex-1 md:flex-1 w-[49%] md:w-full"
                      type="email"
                      prefix={
                        <Img
                          className="h-6 mr-3 my-auto"
                          src="images/img_icon_8.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_02"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
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
        <Footer className="flex items-center justify-center mt-[150px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default PropertiesPageDesktopPage;
