import React from "react";
import axios from 'axios'; 
import { useEffect, useState } from 'react';
import Headerframe from '../Component/Headerframe';
import Text from '../Component/Text';
import Button from '../Component/Button';
import Imagecard from "../Component/Imagecard";
import Pagination from "../Component/Pagination";

function Home(){
    const [Objects, setObjects] = useState([]);

    useEffect(() => {
    const CallApi = () => axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=2esrTh6M&involvedCallr=Rembrandt+van+Rijn").then((response)=>{
      console.log("response", response)
      setObjects(response.data.artObjects);
    },
    error=>{
      console.log("error", error)
    }
    )
    CallApi();
    }, []);
  
    //const displaydata = () => {
     
     // const list = Objects.map(Object => {
       // return <tr key={Object.links}><td>{Object.id}</td><td>{Object.title}</td><td>{Object.objectNumber}</td></tr>
       //return <tr key={product.user}><td>{product.title}</td><td>{product.price}</td><td>{product.description}</td><td>{product.image}</td><td>{product.category}</td></tr>
       // https://jsonplaceholder.typicode.com/users
     //  });
     //  return list;
     // }
    return(
        <div>
    {<div className="bg-gradient1  flex flex-col font-roboto gap-8 items-start justify-start mx-auto p-4 self-stretch w-auto sm:w-full md:w-full">
        <div className="flex items-center max-w-[1408px] mx-auto md:px-5 w-full">
          <Headerframe
         className="bg-gray_900_66 flex items-center justify-between outline outline-[1px] outline-purple_A200 p-8 sm:px-5 rounded-[53px] shadow-bs w-full" />
        </div>
        <Text className="text-gray_401 text-left w-auto" as="h1" variant="h1">
          All artwork
        </Text>
        <div className="flex flex-col gap-8 items-center max-w-[1408px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto md:w-full">
            <div className="md:gap-5 gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              {Objects.map((props, index) => (
                <React.Fragment key={`Imagecard${index}`}>
                  <Imagecard
                    className="h-[364px] relative shadow-bs1 w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </div>
            <div className="flex items-end justify-start p-2.5 w-full">
              <Pagination className="flex flex-row items-start justify-end ml-auto self-stretch w-auto sm:w-full" />
            </div>
          </div>
          <Button className="bg-gray_902 cursor-pointer font-medium h-12 px-4 text-base text-center text-gray_700 w-full">
            Art API
          </Button>
        </div>
              </div>}

       {/*<center><button onClick = {CallApi()}>fetch data</button></center>
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>objectNumber</th>
           
          </tr>
        </thead>
        <tbody>
          {displaydata()}
        </tbody>
    </table>*/}
      </div>
    )
}
export default Home;