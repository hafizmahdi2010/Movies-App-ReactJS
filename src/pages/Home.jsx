// import React from 'react'

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const getMovies = () => {
    fetch("https://raw.githubusercontent.com/hafizmahdi2010/CodeWithMahdi-APIs/main/data.json")
      .then(res => res.json()) // Add parentheses to invoke the json method
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getMovies()
  }, [])

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container pt-6 gap-[10px] px-[100px] flex flex-wrap text-white bg-[#000000] w-screen min-h-screen">
        {
          Array.isArray(data) ? data.map((item, index) => {
            return (
              <div onClick={()=>{navigate(`/movie/${item.id}`)}} key={index} className="movieCard cursor-pointer w-[200px] h-[300px] shadow-lg shadow-black/50">
                <img className="w-full h-full object-cover" src={item.image} alt="" />
              </div>
            );
          }) : ""
        }
      </div>
    </>
  )
}

export default Home