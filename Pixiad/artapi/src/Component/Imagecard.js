import React from "react";
import { Link } from "react-router-dom";
import Image from './Image.js'
import Text from './Text.js';
import Button from './Button.js';

const Imagecard = (props) => {
  console.log(props)
  return (
    
    <>
      <div className={props.className}>
        <Image
          src={props?.webImage.url}
          className="absolute h-[364px] inset-[0] justify-center m-auto object-cover rounded-lg w-full"
          alt="cardimg"
        />
        <div className="absolute bg-gradient  flex flex-col md:gap-10 gap-[168px] h-full inset-[0] justify-center m-auto pb-6 sm:pl-5 pl-6 rounded-lg w-full">
          {!!props?.longTitle ? (
            <Link to={{ pathname: '/single', state: {title:props.title,longTitle:props.longTitle,url:props.webImage.url,principalOrFirstMaker:props.principalOrFirstMaker} }}>
            <Button className="bg-gray_900_7f cursor-pointer font-medium font-roboto min-w-[116px] md:ml-[0] ml-[310px] px-2 py-1 rounded-bl-lg rounded-br-none rounded-tl-none rounded-tr-lg text-center text-cyan_A400 text-sm w-auto">
              {props?.title}
            </Button></Link>
          ) : null}
          <Text
            className="font-roboto leading-[40.00px] mb-4 mr-20 text-gray_401 text-left w-[82%] sm:w-full"
            as="h2"
            variant="h2"
          >
            {props?.title}
          </Text>
        </div>
      </div>
    </>
  );
};

Imagecard.defaultProps = {
  cardimg: "images/img_cardimg.png",
  title: "Portretten van Giuliano en Francesco Giamberti da Sangallo",
};

export default Imagecard;