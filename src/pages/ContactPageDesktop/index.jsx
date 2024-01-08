import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";

const ContactPageDesktopPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-urbanist items-center justify-start mx-auto w-full">
        <header className="border-b border-gray-900_01 border-solid flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
          <div
            className="bg-cover bg-gray-900_02 bg-no-repeat border-b border-gray-900_01 border-solid flex-1 flex-col h-[63px] hidden items-center justify-center md:px-10 px-40 sm:px-5 py-[18px] w-full"
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
            <ul className="flex flex-row gap-[30px] sm:hidden items-center justify-start w-auto common-row-list">
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
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtUrbanistMedium18">Services</Text>
                </a>
              </li>
            </ul>
            <Button
              className="cursor-pointer font-medium min-w-[136px] text-center text-lg"
              shape="round"
              color="deep_purple_A200"
              size="sm"
              variant="fill"
            >
              Contact Us
            </Button>
          </div>
        </header>
        <div className="flex flex-col items-start justify-start max-w-[1920px] w-full">
          <div className="bg-gradient1  border-b border-gray-900_01 border-solid flex flex-col items-start justify-start pb-[100px] pl-[162px] pr-[400px] pt-[150px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-[21px] items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Get in Touch with Estatein
              </Text>
              <Text
                className="leading-[150.00%] text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                <>
                  Welcome to Estatein&#39;s Contact Us page. We&#39;re here to
                  assist you with any inquiries, requests, or feedback you may
                  have. Whether you&#39;re looking to buy or sell a property,
                  explore investment opportunities, or simply want to connect,
                  we&#39;re just a message away. Reach out to us, and let&#39;s
                  start a conversation.
                </>
              </Text>
            </div>
          </div>
          <div className="bg-gray-900 flex flex-row items-center justify-start outline outline-[1px] outline-gray-900_01 p-5 shadow-bs w-full">
            <div className="flex md:flex-col flex-row gap-5 items-center justify-between max-w-[1880px] mx-auto md:px-5 w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-center justify-start sm:ml-[0] px-5 py-10 rounded-[12px] w-full">
                  <div className="flex flex-col gap-[23px] justify-start w-[70%] md:w-full">
                    <div className="flex flex-row gap-[132px] items-start justify-end md:ml-[0] ml-[41px] w-[86%] md:w-full">
                      <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border22 flex flex-col items-center justify-start mt-5 p-2.5 rounded-[50%] w-[82px]">
                        <Button
                          className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                          shape="circle"
                          size="sm"
                          variant="outline"
                          color="deep_purple_A100_deep_purple_A100_00"
                        >
                          <Img
                            className="h-[34px]"
                            src="images/img_icon_23.svg"
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
                      info@estatein.com
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-center justify-center sm:ml-[0] px-5 py-10 rounded-[12px] w-full">
                  <div className="flex flex-col gap-[22px] justify-start w-[69%] md:w-full">
                    <div className="flex flex-row gap-[132px] items-start justify-end md:ml-[0] ml-[37px] w-[87%] md:w-full">
                      <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border23 flex flex-col items-center justify-start mt-5 p-2.5 rounded-[50%] w-[82px]">
                        <Button
                          className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                          shape="circle"
                          size="sm"
                          variant="outline"
                          color="deep_purple_A100_deep_purple_A100_00"
                        >
                          <Img
                            className="h-[34px]"
                            src="images/img_icon_24.svg"
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
                      +1 (123) 456-7890
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-col items-center justify-start sm:ml-[0] px-5 py-10 rounded-[12px] w-full">
                  <div className="flex flex-col gap-6 justify-start w-[71%] md:w-full">
                    <div className="flex flex-row gap-[132px] items-start justify-end md:ml-[0] ml-[45px] w-[85%] md:w-full">
                      <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border24 flex flex-col items-center justify-start mt-5 p-2.5 rounded-[50%] w-[82px]">
                        <Button
                          className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                          shape="circle"
                          size="sm"
                          variant="outline"
                          color="deep_purple_A100_deep_purple_A100_00"
                        >
                          <Img
                            className="h-[34px]"
                            src="images/img_icon_25.svg"
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
                      Main Headquarters
                    </Text>
                  </div>
                </div>
              </List>
              <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col items-center justify-start px-5 py-10 rounded-[12px] w-full">
                <div className="flex flex-col gap-5 items-end justify-start w-full">
                  <div className="flex flex-row gap-[132px] items-start justify-end w-3/5 md:w-full">
                    <div className="border border-solid deep_purple_A100_deep_purple_A100_00_border25 flex flex-col items-center justify-start mt-5 p-2.5 rounded-[50%] w-[82px]">
                      <Button
                        className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                        shape="circle"
                        size="sm"
                        variant="outline"
                        color="deep_purple_A100_deep_purple_A100_00"
                      >
                        <Img
                          className="h-[34px]"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </Button>
                    </div>
                    <Img
                      className="h-[34px] w-[34px]"
                      src="images/img_arrowleft_gray_800.svg"
                      alt="arrowleft"
                    />
                  </div>
                  <div className="flex flex-row gap-[30px] items-start justify-center w-full">
                    <Text
                      className="text-center text-white-A700 text-xl underline w-auto"
                      size="txtUrbanistSemiBold20"
                    >
                      Instagram
                    </Text>
                    <Text
                      className="text-center text-white-A700 text-xl underline w-auto"
                      size="txtUrbanistSemiBold20"
                    >
                      LinkedIn
                    </Text>
                    <Text
                      className="text-center text-white-A700 text-xl underline w-auto"
                      size="txtUrbanistSemiBold20"
                    >
                      Facebook
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1617px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Img
              className="h-[30px] w-[68px]"
              src="images/img_television_14.svg"
              alt="television"
            />
            <div className="flex flex-col gap-5 items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                <>Let&#39;s Connect</>
              </Text>
              <Text
                className="leading-[150.00%] text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                <>
                  We&#39;re excited to connect with you and learn more about
                  your real estate goals. Use the form below to get in touch
                  with Estatein. Whether you&#39;re a prospective client,
                  partner, or simply curious about our services, we&#39;re here
                  to answer your questions and provide the assistance you need.
                </>
              </Text>
            </div>
          </div>
          <div className="border border-gray-900_01 border-solid flex flex-col gap-[50px] items-center justify-center p-[100px] md:px-10 sm:px-5 rounded-[12px] w-full">
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
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
              </div>
              <div className="gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
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
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtUrbanistSemiBold20"
                  >
                    Inquiry Type
                  </Text>
                  <Input
                    name="inputfield_Four"
                    placeholder="Select Inquiry Type"
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
                    How Did You Hear About Us?
                  </Text>
                  <Input
                    name="inputfield_Five"
                    placeholder="Select"
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
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1617px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Img
              className="h-[30px] w-[68px]"
              src="images/img_television_15.svg"
              alt="television_One"
            />
            <div className="flex flex-col gap-[21px] items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Discover Our Office Locations
              </Text>
              <Text
                className="leading-[150.00%] text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                <>
                  Estatein is here to serve you across multiple locations.
                  Whether you&#39;re looking to meet our team, discuss real
                  estate opportunities, or simply drop by for a chat, we have
                  offices conveniently located to serve your needs. Explore the
                  categories below to find the Estatein office nearest to you
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] items-start justify-start w-full">
            <div className="bg-gray-900_02 flex sm:flex-col flex-row gap-2.5 items-start justify-start p-2.5 rounded-[12px] w-[516px] sm:w-full">
              <Button
                className="border border-gray-900_01 border-solid cursor-pointer font-medium text-center text-lg w-full"
                shape="round"
                color="gray_900"
                size="md"
                variant="fill"
              >
                All
              </Button>
              <Button
                className="cursor-pointer font-medium text-center text-lg w-full"
                shape="round"
                color="gray_900_01"
                size="md"
                variant="outline"
              >
                Regional
              </Button>
              <Button
                className="cursor-pointer font-medium text-center text-lg w-full"
                shape="round"
                color="gray_900_01"
                size="md"
                variant="outline"
              >
                International
              </Button>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-full">
              <div className="bg-gray-900 flex flex-1 flex-col gap-10 items-start justify-start outline outline-[1px] outline-gray-900_01 p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="text-lg text-white-A700 tracking-[-0.11px] w-full"
                      size="txtUrbanistMedium18"
                    >
                      Main Headquarters
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                      size="txtUrbanistSemiBold30"
                    >
                      123 Estatein Plaza, City Center, Metropolis
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[683px] md:max-w-full text-gray-500 text-lg tracking-[-0.11px]"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Our main headquarters serve as the heart of Estatein.
                    Located in the bustling city center, this is where our core
                    team of experts operates, driving the excellence and
                    innovation that define us.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-full">
                  <Input
                    name="email"
                    placeholder="info@estatein.com"
                    className="!placeholder:text-white-A700 !text-white-A700 font-medium p-0 text-left text-lg w-full"
                    wrapClassName="border border-gray-900_01 border-solid flex sm:flex-1 rounded-[27px] w-[32%] sm:w-full"
                    type="email"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-1.5"
                        src="images/img_icon_8.svg"
                        alt="Icon"
                      />
                    }
                    color="gray_900_02"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Button
                    className="border border-gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[208px] rounded-[27px]"
                    leftIcon={
                      <Img
                        className="h-6 mb-px mr-1.5"
                        src="images/img_icon_7.svg"
                        alt="Icon"
                      />
                    }
                    color="gray_900_02"
                    size="sm"
                    variant="fill"
                  >
                    <div className="font-medium text-left text-lg">
                      +1 (123) 456-7890
                    </div>
                  </Button>
                  <Button
                    className="border border-gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[154px] rounded-[27px]"
                    leftIcon={
                      <Img
                        className="h-6 mb-0.5 mr-1.5"
                        src="images/img_icon_9.svg"
                        alt="Icon"
                      />
                    }
                    color="gray_900_02"
                    size="sm"
                    variant="fill"
                  >
                    <div className="font-medium text-left text-lg">
                      Metropolis
                    </div>
                  </Button>
                </div>
                <Button
                  className="cursor-pointer font-medium text-center text-lg tracking-[-0.11px] w-full"
                  shape="round"
                  color="deep_purple_A200"
                  size="md"
                  variant="fill"
                >
                  Get Direction
                </Button>
              </div>
              <div className="bg-gray-900 flex flex-1 flex-col gap-10 items-start justify-start outline outline-[1px] outline-gray-900_01 p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="text-lg text-white-A700 tracking-[-0.11px] w-full"
                      size="txtUrbanistMedium18"
                    >
                      Regional Offices
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                      size="txtUrbanistSemiBold30"
                    >
                      456 Urban Avenue, Downtown District, Metropolis
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[683px] md:max-w-full text-gray-500 text-lg tracking-[-0.11px]"
                    size="txtUrbanistMedium18Gray500"
                  >
                    <>
                      Estatein&#39;s presence extends to multiple regions, each
                      with its own dynamic real estate landscape. Discover our
                      regional offices, staffed by local experts who understand
                      the nuances of their respective markets.
                    </>
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-full">
                  <Input
                    name="email_One"
                    placeholder="info@restatein.com"
                    className="!placeholder:text-white-A700 !text-white-A700 font-medium p-0 text-left text-lg w-full"
                    wrapClassName="border border-gray-900_01 border-solid flex sm:flex-1 rounded-[27px] w-[33%] sm:w-full"
                    type="email"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-1.5"
                        src="images/img_icon_8.svg"
                        alt="Icon"
                      />
                    }
                    color="gray_900_02"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Button
                    className="border border-gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[208px] rounded-[27px]"
                    leftIcon={
                      <Img
                        className="h-6 mb-px mr-1.5"
                        src="images/img_icon_7.svg"
                        alt="Icon"
                      />
                    }
                    color="gray_900_02"
                    size="sm"
                    variant="fill"
                  >
                    <div className="font-medium text-left text-lg">
                      +1 (123) 628-7890
                    </div>
                  </Button>
                  <Button
                    className="border border-gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[154px] rounded-[27px]"
                    leftIcon={
                      <Img
                        className="h-6 mb-0.5 mr-1.5"
                        src="images/img_icon_9.svg"
                        alt="Icon"
                      />
                    }
                    color="gray_900_02"
                    size="sm"
                    variant="fill"
                  >
                    <div className="font-medium text-left text-lg">
                      Metropolis
                    </div>
                  </Button>
                </div>
                <Button
                  className="cursor-pointer font-medium text-center text-lg tracking-[-0.11px] w-full"
                  shape="round"
                  color="deep_purple_A200"
                  size="md"
                  variant="fill"
                >
                  Get Direction
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-gray-900_02 bg-no-repeat border border-gray-900_01 border-solid flex flex-col h-[952px] md:h-auto items-start justify-start max-w-[1597px] mt-[150px] mx-auto p-20 md:px-5 rounded-[12px] w-full"
          style={{ backgroundImage: "url('images/img_banner.png')" }}
        >
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-5 h-full items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-5 h-full items-start justify-start w-full">
                <Img
                  className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_image_236x708.png"
                  alt="image"
                />
                <Img
                  className="md:h-auto h-full object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_image_16.png"
                  alt="image_One"
                />
              </div>
              <div className="flex flex-1 flex-col gap-5 h-full items-start justify-start w-full">
                <Img
                  className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_image_17.png"
                  alt="image_Two"
                />
                <div className="flex sm:flex-col flex-row gap-5 h-full items-start justify-start w-full">
                  <Img
                    className="flex-1 md:h-auto h-full sm:m-[] max-h-[236px] sm:ml-[50px] object-cover rounded-[10px] sm:w-[]"
                    src="images/img_image_236x344.png"
                    alt="image_Three"
                  />
                  <Img
                    className="flex-1 md:h-auto h-full sm:m-[] max-h-[236px] sm:ml-[50px] object-cover rounded-[10px] sm:w-[]"
                    src="images/img_image_18.png"
                    alt="image_Four"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-full">
              <div className="flex flex-1 flex-col gap-3.5 items-start justify-start pr-5 w-full">
                <Img
                  className="h-[30px] w-[68px]"
                  src="images/img_television_gray_900_02.svg"
                  alt="television_Two"
                />
                <div className="flex flex-col gap-4 items-start justify-start">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                    size="txtUrbanistSemiBold48"
                  >
                    <>Explore Estatein&#39;s World</>
                  </Text>
                  <Text
                    className="leading-[150.00%] text-gray-500 text-lg w-full"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Step inside the world of Estatein, where professionalism
                    meets warmth, and expertise meets passion. Our gallery
                    offers a glimpse into our team and workspaces, inviting you
                    to get to know us better.
                  </Text>
                </div>
              </div>
              <Img
                className="flex-1 md:flex-none h-[280px] sm:h-auto max-h-[280px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src="images/img_image_280x708.png"
                alt="image_Five"
              />
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[150px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactPageDesktopPage;
