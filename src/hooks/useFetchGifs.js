import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifts";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category)
      .then(img => {
        setState({
          data: img,
          loading: false,
        });
      })
      .catch((err) => err);
  }, [category]);

  return state;
};
