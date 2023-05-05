import { useState } from "react";

function SearchBar(props){

const [searchItems, setSearchItems]= useState('')

const searchItem =(event)=>{
    event.preventDefault();
    console.log("searchItems", searchItems);
    props.onSearchVideo(searchItems);
}


    return(

      <div>
        <h1>I am in search component</h1>
      <input  onChange = {(event)=>{setSearchItems(event.target.value)}} type = "text" placeholder = "search here" size = "50"></input> &nbsp;&nbsp;&nbsp;
      <button onClick = {searchItem}>search</button>
        </div>
    )

}
export default SearchBar;