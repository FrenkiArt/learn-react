import React from "react";
import { useState } from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  console.log(setFilter);

  return (
    <div>
      <MyInput
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => {
          setFilter({ ...filter, query: e.target.value });
        }}
      />

      <MySelect
        value={filter.sort}
        onChange={(seletcedSort) => {
          setFilter({ ...filter, sort: seletcedSort });
        }}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "Сортировка по названию" },
          { value: "body", name: "Сортировка по описанию" },
          { value: "id", name: "Сортировка по номеру" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
