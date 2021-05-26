import React from "react";
import { AutoComplete,Input } from "antd";
import "antd/dist/antd.css";
const { Search } = Input;

export default () => {
  const options = [{ value: "test" }, { value: "123" }, { value: "foo" }];

  return (
    <AutoComplete
      options={options}
      onDropdownVisibleChange={(status)=>{
        console.log("onDropdownVisibleChange-->",status)
      }}
      filterOption={(input, option) =>
        option.value.toUpperCase().indexOf(input.toUpperCase()) !== -1
      }
    >
      <Search />
    </AutoComplete>
  );
};