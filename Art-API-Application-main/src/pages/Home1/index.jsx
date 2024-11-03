import React, {useState, useEffect} from "react";
import HomeHeaderframe from "components/HomeHeaderframe";
import { Text, Button } from "components";
import HomeImagecard from "components/HomeImagecard";
import HomePagination from "components/HomePagination";
import axios from "axios";

const Home1Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://www.rijksmuseum.nl/api/nl/collection?key=2esrTh6M&involvedMaker=Rembrandt+van+Rijn');
      console.log(result)
      setData(result.data.artObjects);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-gradient1  flex flex-col font-roboto gap-8 items-start justify-start mx-auto p-4 self-stretch w-auto sm:w-full md:w-full">
        <div className="flex items-center max-w-[1408px] mx-auto md:px-5 w-full">
          <HomeHeaderframe className="bg-gray_900_66 flex items-center justify-between outline outline-[1px] outline-purple_A200 p-8 sm:px-5 rounded-[53px] shadow-bs w-full" />
        </div>
        <Text className="text-gray_401 text-left w-auto" as="h1" variant="h1">
          All artwork
        </Text>
        <div className="flex flex-col gap-8 items-center max-w-[1408px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto md:w-full">
            <div className="md:gap-5 gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              {data.map((props, index) => (
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

export default Home1Page;