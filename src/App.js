import React, { useState } from "react";
import { Link } from "react-router-dom";
import bluela from "./Images/bluela.svg";
import Cart from "./Images/Cohorts.png";
import Eye from "./Images/Eye.svg";
import Vector from "./Images/Vector.svg";
import Bell from "./Images/Bell.svg";
import styled, { keyframes } from "styled-components";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleInput = (e) => {
    if (e) {
      setErrorMessage("");
      setEmail(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("text");
    if (validateEmail()) {
      window.location.href = "https://app.loch.one/welcome";
    } else {
      setErrorMessage("Please enter a valid email");
    }
  };

  const data = [
    {
      author: "Jack F",
      job: "Ex Blackrock PM",
      content:
        "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
    },
    {
      author: "Yash P",
      job: "Research, 3poch Crypto Hedge Fund",
      content:
        "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
    },
    {
      author: "Shiv S",
      job: "Co-Founder Magik Labs",
      content:
        "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
    },
  ];

  const whiteGradient = `
	background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%);
`;

  const animationSpeed = "10s";

  const scroll = keyframes`
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 3)); }
`;

  const Slider = styled.div`
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);

    overflow: hidden;
    position: relative;

    &::before,
    &::after {
      ${whiteGradient}
      content: '';
      height: 171.5px;
      position: absolute;
      width: 200px;
      z-index: 2;
    }

    &::after {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
    }

    .slide-track {
      animation: ${scroll} ${animationSpeed} linear infinite;
      display: flex;
      width: calc(250px * 6);
    }

    .slide {
      height: 100px;
      width: 250px;
    }
  `;

  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <div className="lg:w-1/2 bg-[#000000] flex items-center  justify-center">
        <div
          className="w-full h-full bg-cover bg-center p-2"
          style={{ backgroundImage: `url(${bluela})` }}
        >
          <div className="lg:h-[304px] flex flex-col  lg:ml-14  lg:flex-row  lg:mt-20">
            <div className="lg:w-1/2 flex flex-col items-center mb-5 lg:mb-0">
              <div className="flex flex-col">
                <div className="flex">
                  <img src={Bell} className="w-8 h-8 white" alt="Eye Icon" />
                </div>
                <div className="lg:w-[322px] flex flex-col items-center justify-center mt-4">
                  <div class="text-[#f2f2f2] text-shadow-sm font-inter text-3xl leading-tight lg:max-w-[313px]">
                    Get notified when a highly correlated whale makes a move
                  </div>

                  <div class="text-[#f2f2f2] font-inter text-sm leading-tight opacity-70 mt-4">
                    Find out when a certain whale moves more than any preset
                    amount on-chain or when a dormant whale you care about
                    becomes active
                  </div>
                </div>
              </div>
            </div>

            {/* Content inside the div */}
            <Slider>
              <div class=" border-black slide-track animate-scroll linear infinite flex  lg:mt-0  flex-row lg:w-1/2  sm:justify-center lg:justify-start  overflow-x-auto no-scrollbar rounded-l-lg">
                <div class="mx-1 p-4 rounded-lg bg-gradient-to-b from-opacity-20 to-opacity-16 via-opacity-0 from-white to-blue-500 shadow-md w-[189.7px] h-[171.5px] flex-shrink-0">
                  <div class="flex justify-between">
                    <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'%3E%3Cpath d='M21 9.33301C21 7.47649 20.2625 5.69601 18.9497 4.38326C17.637 3.07051 15.8565 2.33301 14 2.33301C12.1435 2.33301 10.363 3.07051 9.05025 4.38326C7.7375 5.69601 7 7.47649 7 9.33301C7 17.4997 3.5 19.833 3.5 19.833H24.5C24.5 19.833 21 17.4997 21 9.33301Z' fill='%23165DFF' fill-opacity='0.1' stroke='black' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5' stroke='black' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                      alt="SVG Image"
                      class="mr-2"
                    />
                    <div class="text-right text-sm  text-grey-900">Save</div>
                  </div>

                  <div class="text-grey-900 font-inter text-base font-medium leading-tight py-2">
                    We’ll be sending notifications to you here
                  </div>
                  <div class="flex items-center gap-4 py-2 px-6 rounded-md bg-white border border-neutral-300 shrink-0">
                    <div class="text-grey-900 font-inter text-sm font-medium leading-tight">
                      hello@gmail.com
                    </div>
                  </div>
                </div>
                <div class="mx-1 p-4 rounded-lg bg-gradient-to-b from-opacity-20 to-opacity-16 via-opacity-0 from-white to-blue-500 shadow-md w-[189.7px] h-[171.5px] flex-shrink-0">
                  <div class="flex justify-between">
                    <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'%3E%3Cpath d='M21 9.33301C21 7.47649 20.2625 5.69601 18.9497 4.38326C17.637 3.07051 15.8565 2.33301 14 2.33301C12.1435 2.33301 10.363 3.07051 9.05025 4.38326C7.7375 5.69601 7 7.47649 7 9.33301C7 17.4997 3.5 19.833 3.5 19.833H24.5C24.5 19.833 21 17.4997 21 9.33301Z' fill='%23165DFF' fill-opacity='0.1' stroke='black' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5' stroke='black' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                      alt="SVG Image"
                      class="mr-2"
                    />
                    <div class="text-right text-sm  text-grey-900">Save</div>
                  </div>

                  <div class="text-grey-900 font-inter text-base font-medium leading-tight py-2">
                    We’ll be sending notifications to you here
                  </div>
                  <div class="flex items-center gap-4 py-2 px-6 rounded-md bg-white border border-neutral-300 shrink-0">
                    <div class="text-grey-900 font-inter text-sm font-medium leading-tight">
                      hello@gmail.com
                    </div>
                  </div>
                </div>

                <div class="mx-1 p-4  rounded-lg bg-gradient-to-b from-opacity-20 to-opacity-16 via-opacity-0 from-white to-blue-500 shadow-md w-[189.7px] h-[171.5px] flex-shrink-0">
                  <div class="flex justify-between">
                    <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'%3E%3Cpath d='M21 9.33301C21 7.47649 20.2625 5.69601 18.9497 4.38326C17.637 3.07051 15.8565 2.33301 14 2.33301C12.1435 2.33301 10.363 3.07051 9.05025 4.38326C7.7375 5.69601 7 7.47649 7 9.33301C7 17.4997 3.5 19.833 3.5 19.833H24.5C24.5 19.833 21 17.4997 21 9.33301Z' fill='%23165DFF' fill-opacity='0.1' stroke='black' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5' stroke='black' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                      alt="SVG Image"
                      class="mr-2"
                    />
                    <div class="text-right text-sm  text-grey-900">Save</div>
                  </div>

                  <div class="text-grey-900 font-inter text-base font-medium leading-tight py-2">
                    We’ll be sending notifications to you here
                  </div>
                  <div class="flex items-center gap-4 py-2 px-6 rounded-md bg-white border border-neutral-300 shrink-0">
                    <div class="text-grey-900 font-inter text-sm font-medium leading-tight">
                      hello@gmail.com
                    </div>
                  </div>
                </div>
                <div class="mx-1 p-4  rounded-lg bg-gradient-to-b from-opacity-20 to-opacity-16 via-opacity-0 from-white to-blue-500 shadow-md w-[189.7px] h-[171.5px] flex-shrink-0">
                  <div class="flex justify-between">
                    <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'%3E%3Cpath d='M21 9.33301C21 7.47649 20.2625 5.69601 18.9497 4.38326C17.637 3.07051 15.8565 2.33301 14 2.33301C12.1435 2.33301 10.363 3.07051 9.05025 4.38326C7.7375 5.69601 7 7.47649 7 9.33301C7 17.4997 3.5 19.833 3.5 19.833H24.5C24.5 19.833 21 17.4997 21 9.33301Z' fill='%23165DFF' fill-opacity='0.1' stroke='black' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5' stroke='black' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                      alt="SVG Image"
                      class="mr-2"
                    />
                    <div class="text-right text-sm  text-grey-900">Save</div>
                  </div>

                  <div class="text-grey-900 font-inter text-base font-medium leading-tight py-2">
                    We’ll be sending notifications to you here
                  </div>
                  <div class="flex items-center gap-4 py-2 px-6 rounded-md bg-white border border-neutral-300 shrink-0">
                    <div class="text-grey-900 font-inter text-sm font-medium leading-tight">
                      hello@gmail.com
                    </div>
                  </div>
                </div>
                <div class="mx-1 p-4  rounded-lg bg-gradient-to-b from-opacity-20 to-opacity-16 via-opacity-0 from-white to-blue-500 shadow-md w-[189.7px] h-[171.5px] flex-shrink-0">
                  <div class="flex justify-between">
                    <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'%3E%3Cpath d='M21 9.33301C21 7.47649 20.2625 5.69601 18.9497 4.38326C17.637 3.07051 15.8565 2.33301 14 2.33301C12.1435 2.33301 10.363 3.07051 9.05025 4.38326C7.7375 5.69601 7 7.47649 7 9.33301C7 17.4997 3.5 19.833 3.5 19.833H24.5C24.5 19.833 21 17.4997 21 9.33301Z' fill='%23165DFF' fill-opacity='0.1' stroke='black' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5' stroke='black' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                      alt="SVG Image"
                      class="mr-2"
                    />
                    <div class="text-right text-sm  text-grey-900">Save</div>
                  </div>

                  <div class="text-grey-900 font-inter text-base font-medium leading-tight py-2">
                    We’ll be sending notifications to you here
                  </div>
                  <div class="flex items-center gap-4 py-2 px-6 rounded-md bg-white border border-neutral-300 shrink-0">
                    <div class="text-grey-900 font-inter text-sm font-medium leading-tight">
                      hello@gmail.com
                    </div>
                  </div>
                </div>
                <div class="mx-1 p-4  rounded-lg bg-gradient-to-b from-opacity-20 to-opacity-16 via-opacity-0 from-white to-blue-500 shadow-md w-[189.7px] h-[171.5px] flex-shrink-0">
                  <div class="flex justify-between">
                    <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'%3E%3Cpath d='M21 9.33301C21 7.47649 20.2625 5.69601 18.9497 4.38326C17.637 3.07051 15.8565 2.33301 14 2.33301C12.1435 2.33301 10.363 3.07051 9.05025 4.38326C7.7375 5.69601 7 7.47649 7 9.33301C7 17.4997 3.5 19.833 3.5 19.833H24.5C24.5 19.833 21 17.4997 21 9.33301Z' fill='%23165DFF' fill-opacity='0.1' stroke='black' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5' stroke='black' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                      alt="SVG Image"
                      class="mr-2"
                    />
                    <div class="text-right text-sm  text-grey-900">Save</div>
                  </div>

                  <div class="text-grey-900 font-inter text-base font-medium leading-tight py-2">
                    We’ll be sending notifications to you here
                  </div>
                  <div class="flex items-center gap-4 py-2 px-6 rounded-md bg-white border border-neutral-300 shrink-0">
                    <div class="text-grey-900 font-inter text-sm font-medium leading-tight">
                      hello@gmail.com
                    </div>
                  </div>
                </div>
                <div class="mx-1 p-4 rounded-lg bg-gradient-to-b from-opacity-20 to-opacity-16 via-opacity-0 from-white to-blue-500 shadow-md w-[189.7px] h-[171.5px] flex-shrink-0">
                  <div class="flex justify-between">
                    <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'%3E%3Cpath d='M21 9.33301C21 7.47649 20.2625 5.69601 18.9497 4.38326C17.637 3.07051 15.8565 2.33301 14 2.33301C12.1435 2.33301 10.363 3.07051 9.05025 4.38326C7.7375 5.69601 7 7.47649 7 9.33301C7 17.4997 3.5 19.833 3.5 19.833H24.5C24.5 19.833 21 17.4997 21 9.33301Z' fill='%23165DFF' fill-opacity='0.1' stroke='black' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5' stroke='black' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                      alt="SVG Image"
                      class="mr-2"
                    />
                    <div class="text-right text-sm  text-grey-900">Save</div>
                  </div>

                  <div class="text-grey-900 font-inter text-base font-medium leading-tight py-2">
                    We’ll be sending notifications to you here
                  </div>
                  <div class="flex items-center gap-4 py-2 px-6 rounded-md bg-white border border-neutral-300 shrink-0">
                    <div class="text-grey-900 font-inter text-sm font-medium leading-tight">
                      hello@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          {/* Carys */}

          <div className="flex flex-col  mt-5 lg:mt-0   lg:flex-row lg:mx-14 justify-between">
            <div
              className=" rounded-lg overflow-hidden lg:w-[335px] h-[306px]"
              style={{
                background: `url(${Cart}) lightgray 100% / cover no-repeat`,

                flexShrink: 0,
              }}
            />

            <div className="lg:w-[335px] h-[306px]">
              <div class="lg:ml-4">
                <div class="flex lg:justify-end mt-5 lg:mt-0 ">
                  <div class="lg:text-right w-full">
                    <div class="flex lg:justify-end">
                      <img src={Eye} class="w-8 h-8" alt="Eye Icon" />
                    </div>
                    <h4 class="font-inter  font-bold text-[31px]  text-gray-300">
                      Watch what the whales are doing
                    </h4>
                    <p class="font-inter  font-medium text-[16px] text-base leading-6 text-gray-300 opacity-70">
                      All whales are not equal. Know exactly what the whales
                      impacting YOUR portfolio are doing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mx-14">
            <div className="flex lg:justify-end">
              <div className="lg:text-left flex justify-center lg:justify-end w-[400px]">
                <h5 className="font-inter  text-lg font-bold leading-7 text-gray-300">
                  Testimonials
                </h5>
              </div>
            </div>
            <div className="w-678 h-1 bg-gray-300 bg-opacity-50 my-3" />
          </div>

          <div className="flex  flex-column lg:ml-14 justify-between lg:mt-10">
            <div className=" flex  items-end ">
              <img
                src={Vector}
                alt="Description of the image"
                style={{ fill: "#FFF" }}
              />
            </div>

            <div class="flex w-[85%] flex-row overflow-x-scroll no-scrollbar">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="flex w-[270px] lg:w-[353px] mx-1 p-[20px] flex-col items-start rounded-lg bg-white shadow-dropdown"
                >
                  <div className="flex flex-column text-center items-center">
                    <div className="font-inter font-semibold text-base leading-normal text-[16px] text-grey-900">
                      {item.author}
                    </div>
                    <div className="text-[13px] font-inter font-medium leading-normal mx-3 text-gray-400">
                      {item.job}
                    </div>
                  </div>
                  <div className="font-inter text-base leading-normal mt-3 w-[250px] lg:w-[313px] text-[16px] ">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Half screen for white background */}
      <div className="lg:w-1/2 m-10  lg:m-0 bg-white flex items-center justify-center">
        <div className="w-[365px]">
          <div class="font-inter text-[#B0B1B3] text-[39px] font-normal leading-10">
            Sign up for exclusive access.
          </div>

          <div className="my-3">
            <div className="my-3">
              <input
                className="flex w-full px-6 py-4 items-center rounded-md border-1 bg-white border border-[#E5E5E6] shadow-sm text-black transition-all duration-300 ease-in-out hover:border-blue-500 hover:shadow-md focus:outline-none"
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => handleInput(e.target.value)}
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 pb-3">{errorMessage}</p>
            )}

            <button
              onClick={handleSubmit}
              className="flex justify-center w-full items-center gap-4 px-6 py-4 rounded-md bg-gray-900 text-white font-inter text-base font-bold leading-tight"
            >
              Get started
            </button>
          </div>

          <div class="inline-flex items-center justify-center mt-5 p-18 gap-12">
            <p class="font-inter text-16 font-semibold text-gray-900">
              You’ll receive an email with an invite link to join.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
