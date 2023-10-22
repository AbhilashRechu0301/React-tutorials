import React from "react";
import { useLocation } from "react-router-dom";
import Headerframe from '../Component/Headerframe';
import Text from '../Component/Text';
import Button from '../Component/Button';
import Image from "../Component/Image";


const Single = () => {
  const location = useLocation();
  const { data } = location.state;  


  return (
    <>
      <div className="bg-gradient1  flex flex-col font-roboto gap-8 items-start justify-start mx-auto p-4 self-stretch w-auto sm:w-full md:w-full">
        <Headerframe className="bg-gray_900_66 flex items-center justify-between outline outline-[1px] outline-purple_A200 p-8 md:px-5 rounded-[53px] shadow-bs w-full" />
        <div className="flex flex-col gap-8 items-center justify-start max-w-[1408px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-2 items-start justify-start w-full">
            <Image
              src="images/img_arrowleft_pink_a400.svg"
              className="h-6 w-6"
              alt="arrowleft"
            />
            <Text
              className="text-left text-pink_A400 w-auto"
              as="h4"
              variant="h4"
            >
              Back to the List
            </Text>
          </div>
          <div className="h-[850px] relative w-full">
            <Image
              src={data.imageurl}
              className="h-[850px] m-auto object-cover rounded-lg w-full"
              alt="cardimg"
            />
            <Text
              className="absolute bottom-[3%] left-[2%] text-left text-shadow-ts1 text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              {" "}
              {data.principalOrFirstMaker}
            </Text>
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-start p-2.5 w-full">
            <div className="flex flex-col gap-1 items-start justify-start outline outline-gray_401 pb-4 pt-2 w-full">
              <Text
                className="text-gray_401 text-left w-auto"
                as="h5"
                variant="h5"
              >
                {data.title}
              </Text>
              <Text
                className="text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                {" "}
                {data.longTitle}
              </Text>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start outline outline-gray_401 pb-4 pt-2 w-full">
              <Text
                className="text-gray_401 text-left w-auto"
                as="h5"
                variant="h5"
              >
                {data.principalOrFirstMaker}
              </Text>
              <Text
                className="text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                Rembrandt van Rijn
              </Text>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start outline outline-gray_401 pb-4 pt-2 w-full">
              <Text
                className="text-gray_401 text-left w-auto"
                as="h5"
                variant="h5"
              >
                Object Type
              </Text>
              <Text
                className="text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                Painting
              </Text>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start outline outline-gray_401 pb-4 pt-2 w-full">
              <Text
                className="text-gray_401 text-left w-auto"
                as="h5"
                variant="h5"
              >
                Measurements
              </Text>
              <Text
                className="text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                height 33.2 cm × width 29.3 cm × depth 5.9 cm
              </Text>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start pb-4 pt-2 w-full">
              <Text
                className="text-gray_401 text-left w-auto"
                as="h5"
                variant="h5"
              >
                Description
              </Text>
              <Text
                className="text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                Self-portrait of Rembrandt at a young age. Bust to
                 right, face in shadow, with curly hair.
              </Text>
            </div>
          </div>
        </div>
        <Button className="bg-gray_902 cursor-pointer font-medium h-12 px-4 text-base text-center text-gray_700 w-full">
          Art API
        </Button>
      </div>
    </>
  );
};

export default Single;
