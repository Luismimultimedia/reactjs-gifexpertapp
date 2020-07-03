import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
    {loading && 'Cargando...'}
      <h3>{category}</h3>
      <div className="card-grid animate__animated animate__fadeIn">
        {
            images.map((gif) => <GifGridItem key={gif.id} {...gif} />)
        }
      </div>
    </>
  );
};
