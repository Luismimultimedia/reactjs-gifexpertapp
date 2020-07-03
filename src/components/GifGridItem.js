import React from "react";

export const GifGridItem = ({ id, title, img }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
};
