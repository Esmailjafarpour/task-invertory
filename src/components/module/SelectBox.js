"use client";
// import React, { CSSProperties } from 'react';
import Select from 'react-select';

const SelectBox = (props) => {
  const {placeholder, data , setState , state , typeState ,showOption} = props;
  return (
    <div className="p-0 m-0 px-3 col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 max-[640px]:col-span-12">
    <Select
      placeholder={state[typeState] ? state[typeState] : placeholder}
      className="border-solid border-2 rounded-md"
      options={showOption ? data : []}
      onChange={(e) => setState({ ...state,[typeState]: e.value })}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "grey" : "grey",
        }),
      }}
      value={state.typeState?state.typeState:null}
    />
  </div>
  );
};

export default SelectBox;
