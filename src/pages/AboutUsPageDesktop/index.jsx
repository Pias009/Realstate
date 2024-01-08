import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";

const AboutUsPageDesktopPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-urbanist items-center justify-start mx-auto w-full">
        <header className="border-b border-gray-900_01 border-solid flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
          <div
            className="bg-cover bg-gray-900_02 bg-no-repeat border-b border-gray-900_01 border-solid flex-1 flex-col h-[63px] hidden items-center justify-center sm:m-[] sm:mt-[50px] md:px-10 px-40 sm:px-5 py-[18px] w-full"
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
                <a href="javascript:">
                  <Button
                    className="border border-gray-900_01 border-solid cursor-pointer font-medium text-center text-lg"
                    shape="round"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  >
                    About Us
                  </Button>
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
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start max-w-[1610px] mt-[100px] mx-auto md:px-5 w-full">
          <div className="flex flex-1 flex-col md:gap-10 gap-20 items-start justify-center w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <Img
                className="h-[30px] w-[68px]"
                src="images/img_television_30x68.svg"
                alt="television"
              />
              <div className="flex flex-col gap-[15px] items-start justify-start">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                  size="txtUrbanistSemiBold48"
                >
                  Our Journey
                </Text>
                <Text
                  className="leading-[150.00%] text-gray-500 text-lg w-full"
                  size="txtUrbanistMedium18Gray500"
                >
                  <>
                    Our story is one of continuous growth and evolution. We
                    started as a small team with big dreams, determined to
                    create a real estate platform that transcended the ordinary.
                    Over the years, we&#39;ve expanded our reach, forged
                    valuable partnerships, and gained the trust of countless
                    clients.
                  </>
                </Text>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col gap-0.5 items-start justify-start p-6 sm:px-5 rounded-[12px] w-full">
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
              <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col gap-0.5 items-start justify-start p-6 sm:px-5 rounded-[12px] w-full">
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
              <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-1 flex-col gap-0.5 items-start justify-start p-6 sm:px-5 rounded-[12px] w-full">
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
          <div className="bg-gray-900 flex flex-1 flex-col items-start justify-start max-w-[755px] rounded-[12px] w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col sm:h-[450px] h-[546px] items-center justify-start rounded-[12px] w-full"
              style={{ backgroundImage: "url('images/img_banner.png')" }}
            >
              <Img
                className="h-[546px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_image_546x755.png"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start max-w-[1616px] mt-[150px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-1 flex-col gap-3.5 items-start justify-start w-[537px] sm:w-full">
            <Img
              className="h-[30px] w-[68px]"
              src="images/img_television_1.svg"
              alt="television_One"
            />
            <div className="flex flex-col gap-[21px] items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Our Values
              </Text>
              <Text
                className="leading-[150.00%] text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                Our story is one of continuous growth and evolution. We started
                as a small team with big dreams, determined to create a real
                estate platform that transcended the ordinary.
              </Text>
            </div>
          </div>
          <div className="bg-gray-900 border border-gray-900_01 border-solid flex-1 gap-[30px] grid grid-cols-3 sm:grid-cols-[repeat(0,_1fr_879px)_1fr] md:grid-cols-[repeat(1,_1fr_879px)_1fr] items-center min-h-[auto] p-[60px] md:px-10 sm:px-5 rounded-[12px] shadow-bs w-full">
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                <div className="bg-gray-900 border border-deep_purple-A200 border-solid flex flex-col items-start justify-start p-5 rounded-[50%] w-[74px]">
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_icon_deep_purple_a100_34x34.svg"
                    alt="icon"
                  />
                </div>
                <Text
                  className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtUrbanistSemiBold24"
                >
                  Trust
                </Text>
              </div>
              <Text
                className="leading-[150.00%] max-w-[409px] md:max-w-full text-gray-500 text-lg"
                size="txtUrbanistMedium18Gray500"
              >
                Trust is the cornerstone of every successful real estate
                transaction.
              </Text>
            </div>
            <Line className="self-center h-px bg-gray-900_01 w-full" />
            <Line className="bg-gray-900_01 h-[148px] w-full" />
            <Line className="self-center h-px bg-gray-900_01 w-full" />
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                <div className="bg-gray-900 border border-deep_purple-A200 border-solid flex flex-col items-start justify-start p-5 rounded-[50%] w-[74px]">
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_icon_34x34.svg"
                    alt="icon"
                  />
                </div>
                <Text
                  className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtUrbanistSemiBold24"
                >
                  Excellence
                </Text>
              </div>
              <Text
                className="leading-[150.00%] max-w-[409px] md:max-w-full text-gray-500 text-lg"
                size="txtUrbanistMedium18Gray500"
              >
                We set the bar high for ourselves. From the properties we list
                to the services we provide.
              </Text>
            </div>
            <Line className="self-center h-px bg-gray-900_01 w-full" />
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                <div className="bg-gray-900 border border-deep_purple-A200 border-solid flex flex-col items-start justify-start p-5 rounded-[50%] w-[74px]">
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_icon_1.svg"
                    alt="icon"
                  />
                </div>
                <Text
                  className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtUrbanistSemiBold24"
                >
                  Client-Centric
                </Text>
              </div>
              <Text
                className="leading-[150.00%] max-w-[409px] md:max-w-full text-gray-500 text-lg"
                size="txtUrbanistMedium18Gray500"
              >
                Your dreams and needs are at the center of our universe. We
                listen, understand.
              </Text>
            </div>
            <Line className="self-center h-px bg-gray-900_01 w-full" />
            <Line className="bg-gray-900_01 h-[148px] w-full" />
            <Line className="self-center h-px bg-gray-900_01 w-full" />
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                <div className="bg-gray-900 border border-deep_purple-A200 border-solid flex flex-col items-start justify-start p-5 rounded-[50%] w-[74px]">
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_icon_deep_purple_a100_34x34.svg"
                    alt="icon"
                  />
                </div>
                <Text
                  className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtUrbanistSemiBold24"
                >
                  Our Commitment
                </Text>
              </div>
              <Text
                className="leading-[150.00%] max-w-[409px] md:max-w-full text-gray-500 text-lg"
                size="txtUrbanistMedium18Gray500"
              >
                We are dedicated to providing you with the highest level of
                service, professionalism, and support.
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1617px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Img
              className="h-[30px] w-[68px]"
              src="images/img_television_2.svg"
              alt="television_Two"
            />
            <div className="flex flex-col gap-[21px] items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Our Achievements
              </Text>
              <Text
                className="leading-[150.00%] text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                Our story is one of continuous growth and evolution. We started
                as a small team with big dreams, determined to create a real
                estate platform that transcended the ordinary.
              </Text>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                size="txtUrbanistSemiBold30"
              >
                3+ Years of Excellence
              </Text>
              <Text
                className="leading-[150.00%] max-w-[405px] md:max-w-full text-gray-500 text-lg"
                size="txtUrbanistMedium18Gray500"
              >
                <>
                  With over 3 years in the industry, we&#39;ve amassed a wealth
                  of knowledge and experience, becoming a go-to resource for all
                  things real estate.
                </>
              </Text>
            </div>
            <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                size="txtUrbanistSemiBold30"
              >
                Happy Clients
              </Text>
              <Text
                className="leading-[150.00%] max-w-[405px] md:max-w-full text-gray-500 text-lg"
                size="txtUrbanistMedium18Gray500"
              >
                Our greatest achievement is the satisfaction of our clients.
                Their success stories fuel our passion for what we do.
              </Text>
            </div>
            <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                size="txtUrbanistSemiBold30"
              >
                Industry Recognition
              </Text>
              <Text
                className="leading-[150.00%] max-w-[405px] md:max-w-full text-gray-500 text-lg"
                size="txtUrbanistMedium18Gray500"
              >
                <>
                  We&#39;ve earned the respect of our peers and industry
                  leaders, with accolades and awards that reflect our commitment
                  to excellence.
                </>
              </Text>
            </div>
          </List>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1617px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Img
              className="h-[30px] w-[68px]"
              src="images/img_television_3.svg"
              alt="television_Three"
            />
            <div className="flex flex-col gap-5 items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Navigating the Estatein Experience
              </Text>
              <Text
                className="text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                <>
                  At Estatein, we&#39;ve designed a straightforward process to
                  help you find and purchase your dream property with ease.
                  Here&#39;s a step-by-step guide to how it all works.
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] items-start justify-start w-full">
            <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Input
                  name="stepCounter"
                  placeholder="Step 01"
                  className="font-medium p-0 placeholder:text-white-A700 text-left text-xl w-full"
                  wrapClassName="w-full"
                  shape="square"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                ></Input>
                <div className="bg-gradient  border border-gray-900_01 border-solid flex flex-col gap-5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700 w-full"
                    size="txtUrbanistSemiBold26"
                  >
                    Discover a World of Possibilities
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Your journey begins with exploring our carefully curated
                    property listings. Use our intuitive search tools to filter
                    properties based on your preferences, including location,
                    type, size, and budget.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Input
                  name="stepCounter_One"
                  placeholder="Step 02"
                  className="font-medium p-0 placeholder:text-white-A700 text-left text-xl w-full"
                  wrapClassName="w-full"
                  shape="square"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                ></Input>
                <div className="bg-gradient  border border-gray-900_01 border-solid flex flex-col gap-5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700 w-full"
                    size="txtUrbanistSemiBold26"
                  >
                    Narrowing Down Your Choices
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                    size="txtUrbanistMedium18Gray500"
                  >
                    <>
                      Once you&#39;ve found properties that catch your eye, save
                      them to your account or make a shortlist. This allows you
                      to compare and revisit your favorites as you make your
                      decision.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Input
                  name="stepCounter_Two"
                  placeholder="Step 03"
                  className="font-medium p-0 placeholder:text-white-A700 text-left text-xl w-full"
                  wrapClassName="w-full"
                  shape="square"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                ></Input>
                <div className="bg-gradient  border border-gray-900_01 border-solid flex flex-col gap-5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700 w-full"
                    size="txtUrbanistSemiBold26"
                  >
                    Personalized Guidance
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                    size="txtUrbanistMedium18Gray500"
                  >
                    <>
                      Have questions about a property or need more information?
                      Our dedicated team of real estate experts is just a call
                      or message away.
                      <br />
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Input
                  name="stepCounter_Three"
                  placeholder="Step 04"
                  className="font-medium p-0 placeholder:text-white-A700 text-left text-xl w-full"
                  wrapClassName="w-full"
                  shape="square"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                ></Input>
                <div className="bg-gradient  border border-gray-900_01 border-solid flex flex-col gap-5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700 w-full"
                    size="txtUrbanistSemiBold26"
                  >
                    See It for Yourself
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                    size="txtUrbanistMedium18Gray500"
                  >
                    <>
                      Arrange viewings of the properties you&#39;re interested
                      in. We&#39;ll coordinate with the property owners and
                      accompany you to ensure you get a firsthand look at your
                      potential new home.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Input
                  name="stepCounter_Four"
                  placeholder="Step 05"
                  className="font-medium p-0 placeholder:text-white-A700 text-left text-xl w-full"
                  wrapClassName="w-full"
                  shape="square"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                ></Input>
                <div className="bg-gradient  border border-gray-900_01 border-solid flex flex-col gap-5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700 w-full"
                    size="txtUrbanistSemiBold26"
                  >
                    Making Informed Decisions
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Before making an offer, our team will assist you with due
                    diligence, including property inspections, legal checks, and
                    market analysis. We want you to be fully informed and
                    confident in your choice.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Input
                  name="stepCounter_Five"
                  placeholder="Step 06"
                  className="font-medium p-0 placeholder:text-white-A700 text-left text-xl w-full"
                  wrapClassName="w-full"
                  shape="square"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                ></Input>
                <div className="bg-gradient  border border-gray-900_01 border-solid flex flex-col gap-5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700 w-full"
                    size="txtUrbanistSemiBold26"
                  >
                    Getting the Best Deal
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                    size="txtUrbanistMedium18Gray500"
                  >
                    <>
                      We&#39;ll help you negotiate the best terms and prepare
                      your offer. Our goal is to secure the property at the
                      right price and on favorable terms.
                      <br />
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1617px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Img
              className="h-[30px] w-[68px]"
              src="images/img_television_4.svg"
              alt="television_Four"
            />
            <div className="flex flex-col gap-[26px] items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Meet the Estatein Team
              </Text>
              <Text
                className="text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                At Estatein, our success is driven by the dedication and
                expertise of our team. Get to know the people behind our mission
                to make your real estate dreams a reality.
              </Text>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
            orientation="horizontal"
          >
            <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
              <div className="relative w-full">
                <Img
                  className="h-full mx-auto object-cover rounded-[12px] w-[316px]"
                  src="images/img_image_253x316.png"
                  alt="image"
                />
                <div className="absolute bg-deep_purple-A200 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto sm:px-5 px-[26px] py-3.5 rounded-[26px] w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_2.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-full"
                    size="txtUrbanistSemiBold24"
                  >
                    Max Mitchell
                  </Text>
                  <Text
                    className="text-center text-gray-500 text-lg w-full"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Founder
                  </Text>
                </div>
                <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-row gap-5 items-center justify-start sm:pl-5 pl-6 pr-3.5 py-3.5 rounded-[36px] w-full">
                  <Text
                    className="flex-1 text-lg text-white-A700 w-auto"
                    size="txtUrbanistMedium18"
                  >
                    Say Hello 👋
                  </Text>
                  <Img
                    className="rounded-[50%] w-11"
                    src="images/img_save_deep_purple_a200.svg"
                    alt="save"
                  />
                </div>
              </div>
            </div>
            <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
              <div className="relative w-full">
                <Img
                  className="h-full mx-auto object-cover rounded-[12px] w-[316px]"
                  src="images/img_image_3.png"
                  alt="image"
                />
                <div className="absolute bg-deep_purple-A200 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto sm:px-5 px-[26px] py-3.5 rounded-[26px] w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_2.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-full"
                    size="txtUrbanistSemiBold24"
                  >
                    Sarah Johnson
                  </Text>
                  <Text
                    className="text-center text-gray-500 text-lg w-full"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Chief Real Estate Officer
                  </Text>
                </div>
                <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-row gap-5 items-center justify-start sm:pl-5 pl-6 pr-3.5 py-3.5 rounded-[36px] w-full">
                  <Text
                    className="flex-1 text-lg text-white-A700 w-auto"
                    size="txtUrbanistMedium18"
                  >
                    Say Hello 👋
                  </Text>
                  <Img
                    className="rounded-[50%] w-11"
                    src="images/img_save_deep_purple_a200.svg"
                    alt="save"
                  />
                </div>
              </div>
            </div>
            <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
              <div className="relative w-full">
                <Img
                  className="h-full mx-auto object-cover rounded-[12px] w-[316px]"
                  src="images/img_image_4.png"
                  alt="image"
                />
                <div className="absolute bg-deep_purple-A200 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto sm:px-5 px-[26px] py-3.5 rounded-[26px] w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_2.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-full"
                    size="txtUrbanistSemiBold24"
                  >
                    David Brown
                  </Text>
                  <Text
                    className="text-center text-gray-500 text-lg w-full"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Head of Property Management
                  </Text>
                </div>
                <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-row gap-5 items-center justify-start sm:pl-5 pl-6 pr-3.5 py-3.5 rounded-[36px] w-full">
                  <Text
                    className="flex-1 text-lg text-white-A700 w-auto"
                    size="txtUrbanistMedium18"
                  >
                    Say Hello 👋
                  </Text>
                  <Img
                    className="rounded-[50%] w-11"
                    src="images/img_save_deep_purple_a200.svg"
                    alt="save"
                  />
                </div>
              </div>
            </div>
            <div className="border border-gray-900_01 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
              <div className="relative w-full">
                <Img
                  className="h-full mx-auto object-cover rounded-[12px] w-[316px]"
                  src="images/img_image_5.png"
                  alt="image"
                />
                <div className="absolute bg-deep_purple-A200 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto sm:px-5 px-[26px] py-3.5 rounded-[26px] w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_2.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-full"
                    size="txtUrbanistSemiBold24"
                  >
                    Michael Turner
                  </Text>
                  <Text
                    className="text-center text-gray-500 text-lg w-full"
                    size="txtUrbanistMedium18Gray500"
                  >
                    Legal Counsel
                  </Text>
                </div>
                <div className="bg-gray-900_02 border border-gray-900_01 border-solid flex flex-row gap-5 items-center justify-start sm:pl-5 pl-6 pr-3.5 py-3.5 rounded-[36px] w-full">
                  <Text
                    className="flex-1 text-lg text-white-A700 w-auto"
                    size="txtUrbanistMedium18"
                  >
                    Say Hello 👋
                  </Text>
                  <Img
                    className="rounded-[50%] w-11"
                    src="images/img_save_deep_purple_a200.svg"
                    alt="save"
                  />
                </div>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1617px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Img
              className="h-[30px] w-[68px]"
              src="images/img_television_5.svg"
              alt="television_Five"
            />
            <div className="flex flex-col gap-[21px] items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtUrbanistSemiBold48"
              >
                Our Valued Clients
              </Text>
              <Text
                className="leading-[150.00%] text-gray-500 text-lg w-full"
                size="txtUrbanistMedium18Gray500"
              >
                <>
                  At Estatein, we have had the privilege of working with a
                  diverse range of clients across various industries. Here are
                  some of the clients we&#39;ve had the pleasure of serving
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] items-start justify-start w-full">
            <List
              className="sm:flex-col flex-row gap-[50px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-10 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start w-full">
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-gray-500 text-lg w-full"
                      size="txtUrbanistMedium18Gray500"
                    >
                      Since 2019
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                      size="txtUrbanistSemiBold30"
                    >
                      ABC Corporation
                    </Text>
                  </div>
                  <Button
                    className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[148px] text-center text-lg"
                    shape="round"
                    color="gray_900_02"
                    size="md"
                    variant="fill"
                  >
                    Visit Website
                  </Button>
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_icon_gray_500_24x24.svg"
                        alt="icon"
                      />
                      <Text
                        className="flex-1 text-gray-500 text-lg w-auto"
                        size="txtUrbanistMedium18Gray500"
                      >
                        Domain
                      </Text>
                    </div>
                    <Text
                      className="text-white-A700 text-xl w-full"
                      size="txtUrbanistMedium20WhiteA700"
                    >
                      Commercial Real Estate
                    </Text>
                  </div>
                  <Line className="bg-gray-900_01 h-[65px] md:h-px md:w-full w-px" />
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowleft_gray_500.svg"
                        alt="arrowleft"
                      />
                      <Text
                        className="flex-1 text-gray-500 text-lg w-auto"
                        size="txtUrbanistMedium18Gray500"
                      >
                        Category
                      </Text>
                    </div>
                    <Text
                      className="text-white-A700 text-xl w-full"
                      size="txtUrbanistMedium20WhiteA700"
                    >
                      Luxury Home Development
                    </Text>
                  </div>
                </div>
                <div className="border border-gray-900_01 border-solid flex flex-col gap-3.5 items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="text-gray-500 text-lg w-full"
                    size="txtUrbanistMedium18Gray500"
                  >
                    What They Said 🤗
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[613px] md:max-w-full text-lg text-white-A700"
                    size="txtUrbanistMedium18"
                  >
                    <>
                      Estatein&#39;s expertise in finding the perfect office
                      space for our expanding operations was invaluable. They
                      truly understand our business needs.
                    </>
                  </Text>
                </div>
              </div>
              <div className="bg-gray-900 border border-gray-900_01 border-solid flex flex-1 flex-col gap-10 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start w-full">
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-gray-500 text-lg w-full"
                      size="txtUrbanistMedium18Gray500"
                    >
                      Since 2018
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                      size="txtUrbanistSemiBold30"
                    >
                      GreenTech Enterprises
                    </Text>
                  </div>
                  <Button
                    className="border border-gray-900_01 border-solid cursor-pointer font-medium min-w-[148px] text-center text-lg"
                    shape="round"
                    color="gray_900_02"
                    size="md"
                    variant="fill"
                  >
                    Visit Website
                  </Button>
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_icon_gray_500_24x24.svg"
                        alt="icon"
                      />
                      <Text
                        className="flex-1 text-gray-500 text-lg w-auto"
                        size="txtUrbanistMedium18Gray500"
                      >
                        Domain
                      </Text>
                    </div>
                    <Text
                      className="text-white-A700 text-xl w-full"
                      size="txtUrbanistMedium20WhiteA700"
                    >
                      Commercial Real Estate
                    </Text>
                  </div>
                  <Line className="bg-gray-900_01 h-[65px] md:h-px md:w-full w-px" />
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowleft_gray_500.svg"
                        alt="arrowleft"
                      />
                      <Text
                        className="flex-1 text-gray-500 text-lg w-auto"
                        size="txtUrbanistMedium18Gray500"
                      >
                        Category
                      </Text>
                    </div>
                    <Text
                      className="text-white-A700 text-xl w-full"
                      size="txtUrbanistMedium20WhiteA700"
                    >
                      Retail Space
                    </Text>
                  </div>
                </div>
                <div className="border border-gray-900_01 border-solid flex flex-col gap-3.5 items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="text-gray-500 text-lg w-full"
                    size="txtUrbanistMedium18Gray500"
                  >
                    What They Said 🤗
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[613px] md:max-w-full text-lg text-white-A700"
                    size="txtUrbanistMedium18"
                  >
                    <>
                      Estatein&#39;s ability to identify prime retail locations
                      helped us expand our brand presence. They are a trusted
                      partner in our growth.
                    </>
                  </Text>
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
        <Footer className="flex items-center justify-center mt-[150px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutUsPageDesktopPage;
