import React from "react";
import style from "./Popular.module.css";
import data_product from "../Assets/data";
import Item from "../Item/item";

const Popular = () => {
  return (
    <div className={style.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className={style.popular_item}>
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.new_price}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
