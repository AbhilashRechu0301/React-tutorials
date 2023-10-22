import React from "react";

import Image from './Image.js'
import Text from './Text.js';
import Button from './Button.js';

const Pagination = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button className="bg-gray_901 border border-bluegray_901 border-solid flex h-14 items-center justify-center p-4 rounded-[50%] shadow-bs1 w-14">
          <Image src="images/img_arrowleft.svg" className="h-6" alt="arrowleft" />
        </Button>
        <Text
          className="bg-gray_901 border border-pink_A400 border-solid flex font-roboto h-14 items-center justify-center rounded-[50%] text-center text-shadow-ts text-white_A700 w-14"
          as="h4"
          variant="h4"
        >
          {props?.buttonsmall}
        </Text>
        <Text
          className="bg-gray_901 border border-bluegray_901 border-solid flex font-roboto h-14 items-center justify-center rounded-[50%] text-center text-gray_401 text-shadow-ts w-14"
          as="h4"
          variant="h4"
        >
          {props?.buttonsmallOne}
        </Text>
        <Text
          className="bg-gray_901 border border-bluegray_901 border-solid flex font-roboto h-14 items-center justify-center rounded-[50%] text-center text-gray_401 text-shadow-ts w-14"
          as="h4"
          variant="h4"
        >
          {props?.buttonsmallTwo}
        </Text>
        <Text
          className="bg-gray_901 border border-bluegray_901 border-solid flex font-roboto h-14 items-center justify-center rounded-[50%] text-center text-gray_401 text-shadow-ts w-14"
          as="h4"
          variant="h4"
        >
          {props?.buttonsmallThree}
        </Text>
        <Button className="bg-gray_901 border border-bluegray_901 border-solid flex h-14 items-center justify-center p-4 rotate-[180deg] rounded-[50%] shadow-bs1 w-14">
          <Image src="images/img_send.svg" className="h-6" alt="send" />
        </Button>
      </div>
    </>
  );
};

Pagination.defaultProps = {};

export default Pagination;