import React, { useState } from "react"; 
import axios from "axios";
import "./Dictionary.css"

export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);   

    function handleResponse(response) {
      console.log(response.data[0]);  
    }

    function search(event) {
        event.preventDefault();
    }
    
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    return (
   <div className="Dictionary">
    <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}/>
    </form>
   </div> 
   );
}