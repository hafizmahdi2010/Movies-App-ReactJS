// import React from 'react'

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Movie = () => {
  let { id } = useParams();

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
  }, []);

  const movie = data?.find((movie) => movie.id === parseInt(id));
  console.log(movie)

  return (
    <div className="text-[#fff] bg-[#000000] pb-10 px-[100px]">
      <div className="w-screen  bg-[#000000] h-screen">
        <iframe width="85%" height="100%" src={movie ? movie.movie : ""} title="YouTube video player" allowfullscreen></iframe>
      </div>
      <h3 className="text-[20px] font-bold mt-5">{movie ? movie.title : ""}</h3>
      <p className="text-[14px] text-[gray]">{movie ? movie.description : ""}</p>
    </div>
  )
}

export default Movie