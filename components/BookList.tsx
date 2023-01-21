import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import classes from "../src/styles/Books.module.css"

const BookList = () => {
  const [data, setData] = useState<[]>();
  const sendRequest = () => {
    fetch("/api/books")
      .then((resp: any) => resp.json())
      .then((data) => setData(data.message))
      .catch((err: any) => console.log(err.message));
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <div>
      <ul className={classes.listContainer}>
        {data &&
          data.map((item: any, index: any) => {
            return (
              <BookItem
                description={item.description}
                name={item.name}
                id={item.id}
                imgUrl={item.imgUrl}
                key={index}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default BookList;
