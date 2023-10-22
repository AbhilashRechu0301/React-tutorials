import React from "react";

import  Image from "./Image.js";
import  Button from "./Button.js";

const Headerframe = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-4 items-start justify-start self-stretch w-auto">
          <Image
            src="images/img_frame.png"
            style={{width:60, height:55}}
            className="h-12 md:h-auto object-cover w-[53px]"
            alt="frame"
          />
          <h4 className="font-roboto text-gray_400 text-left w-auto">
            Art API
          </h4>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start self-stretch w-auto md:w-full">
          <input
            className="bg-gray_900_66 border border-solid border-white_A700_26 font-roboto sm:px-5 px-6 py-2 rounded-[24px] text-left text-white_A700_33 w-[460px]"
            type="text"
            placeholder="Please type in your search"
          /> 
          <Button className="bg-pink_A400 cursor-pointer font-medium font-roboto h-12 p-4 rounded-[24px] shadow-bs1 text-center text-lg text-white_A700 w-[150px]">
            Search
          </Button>
        </div>
      </header>
    </>
  );
};

Headerframe.defaultProps = {};

export default Headerframe;