import React from 'react'
import { BsSearch } from "react-icons/bs";


const Searchbar = () => {
  return (
    <div className="searchbar">
    <input type="text" name="search" id="search" placeholder="Search..." />
    <button type="submit">
      <BsSearch />
    </button>
  </div>
  )
}

export default Searchbar