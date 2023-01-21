import React from "react";
import classes from "../src/styles/Books.module.css"

const BookItem = ({ name, description, id, imgUrl }: any) => {
  return (
    <li className={classes.listItem}>
      <img src={imgUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  );
};

export default BookItem;
