import React from "react";

import HomeHeaderframe from "components/HomeHeaderframe";
import { Text, Button } from "components";
import HomeImagecard from "components/HomeImagecard";
import HomePagination from "components/HomePagination";

const SearchResultsPage = () => {
  const homeImagecardPropList = [
    {
      pieroDiCosimo: "Piero di Cosimo",
      cardimg: "images/img_cardimg.png",
      title: "Portretten van Giuliano en Francesco Giamberti da Sangallo",
    },
    {
      pieroDiCosimo: "Rembrandt van Rijn",
      cardimg: "images/img_cardimg_364x450.png",
      title: "De Nachtwacht",
    },
    {
      pieroDiCosimo: "Jan Asselijn",
      cardimg: "images/img_cardimg_1.png",
      title: "De bedreigde zwaan",
    },
    {
      pieroDiCosimo: "Jan Willem Pieneman",
      cardimg: "images/img_cardimg_2.png",
      title: "De Slag bij Waterloo",
    },
    {
      pieroDiCosimo: "Adriaen Pietersz. van de Venne",
      cardimg: "images/img_cardimg_3.png",
      title: "De zielenvisserij",
    },
    {
      pieroDiCosimo: "Gerard van Honthorst",
      cardimg: "images/img_cardimg_8.png",
      title: "Een vrolijke vioolspeler",
    },
    {
      pieroDiCosimo: "anoniem",
      cardimg: "images/img_cardimg_9.png",
      title: "Poppenhuis van Petronella Oortman",
    },
    {
      pieroDiCosimo: "Fra Angelico",
      cardimg: "images/img_cardimg_10.png",
      title: "Madonna van nederigheid",
    },
    {
      pieroDiCosimo: "Gabriël Metsu",
      cardimg: "images/img_cardimg_11.png",
      title: "Het zieke kind",
    },
  ];

  return (
    <>
      <div className="bg-gradient1  flex flex-col font-roboto gap-8 items-start justify-start mx-auto p-4 self-stretch w-auto sm:w-full md:w-full">
        <div className="flex items-center max-w-[1408px] mx-auto md:px-5 w-full">
          <HomeHeaderframe className="bg-gray_900_66 flex items-center justify-between outline outline-[1px] outline-purple_A200 p-8 sm:px-5 rounded-[53px] shadow-bs w-full" />
        </div>
        <Text
          className="text-gray_401 text-left w-auto"
          as="h1"
          variant="h1"
        ></Text>
        <div className="flex flex-col gap-8 items-center max-w-[1408px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto md:w-full">
            <div className="md:gap-5 gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              {homeImagecardPropList.map((props, index) => (
                <React.Fragment key={`HomeImagecard${index}`}>
                  <HomeImagecard
                    className="h-[364px] relative shadow-bs1 w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </div>
            <div className="flex items-end justify-start p-2.5 w-full">
              <HomePagination className="flex flex-row items-start justify-end ml-auto self-stretch w-auto sm:w-full" />
            </div>
          </div>
          <Button className="bg-gray_902 cursor-pointer font-medium h-12 px-4 text-base text-center text-gray_700 w-full">
            Art API
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchResultsPage;
