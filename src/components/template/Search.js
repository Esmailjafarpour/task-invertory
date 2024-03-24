"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import { useFormik } from "formik";
import { IoSearchSharp } from "react-icons/io5";
import SelectBox from "../module/SelectBox";
import InputSearch from "../module/InputSearch";
import Button from "../module/Button";
import Select from "react-select";
import ShowAvailableCars from "../template/ShowAvailableCars";
import {
  abjToArrKeys,
  reversed,
  abjToArrValue,
  bodyStyles,
} from "../../utils/changingDataStructure";
import { BASE_URL, BASE_URL_Images } from "../../constants/base";
import { sp } from "../../utils/replaceNumber";

// import { split } from "postcss/lib/list";

function Search({ data, resultCars }) {
  const router = useRouter();
  const [state, setState] = useState({
    make: "",
    model: "",
    MinYear: "",
    MaxYear: "",
    color: "",
    engine: "",
    minPrice: "",
    maxPrice: "",
    AnyBodyStyle: "",
    AnyFualType: "",
    MinKm: "",
    MaxKm: "",
  });
  const [resultSearch, setResultSearch] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    
  });

  const searchHandler = async () => {
    // ?page=1&limit=2
    console.log("state", state.make);
    const res = await fetch(
      `${BASE_URL}/api/dealership/advance/search/vehicles/localhost:3000?page=1&limit=3`,
      {
        method: "POST",
        body: JSON.stringify({
          fuel_type: "",
          body_style: "",
          engine_cylinders: "",
          year_end: "",
          // price_low: minPrice - 1,
          // price_high:  maxPrice + 1,
          odometer_type: 2,
          make: state.make,
          model: "",
          transmission: "",
          drive_train: "",
          doors: "",
          interior_color: "",
          Exterior_color: "",
          sortKind: {
            kind: "",
            type: null,
            order: 0,
          },
          keywords: "",
          sold: "",
          is_coming_soon: "",
          is_it_special: null,
          year_start: "0",
          odometer_low: null,
          odometer_high: null,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const car = await res.json();
    router.push(`http://localhost:3000/?make=${state.make}`);
    <ShowAvailableCars dataSearch={car} />;
  };

  const changeHandler = (e) => {
    setSearchInput(e.target.value.toLowerCase());
    // let valueSearch = e.target.value.toLowerCase();
    // console.log("searchInput", searchInput);
    let result = resultCars.map((i) => {
      return {
        ...i,
        searchInput:
          `${i.Vehicle.model_year} ${i.Vehicle.make} ${i.Vehicle.model}`.toLowerCase(),
      };
    });
    let res = result.filter((car) => car.searchInput.includes(searchInput));
    setResultSearch(res);
  };

  const resetHandler = () => {
    console.log("hhhh");
    setState({
      ...state,
      make: "",
      model: "",
      MinYear: "",
      MaxYear: "",
      color: "",
      engine: "",
      minPrice: "",
      maxPrice: "",
      AnyBodyStyle: "",
      AnyFualType: "",
      MinKm: "",
      MaxKm: "",
    });
    setSearchInput("");
    // router.refresh();
  };

  return (
    <div className="row col-12 mx-3 py-4">
      <div className="px-3 rounded-lg shadow-lg py-4">
        <div className="flex py-2 co-md-12">
          <span className="flex items-center text-xl">
            <IoSearchSharp />
          </span>
          <span className="text-xl">Search</span>
        </div>

        <div className="p-0 m-0 grid grid-cols-12 gap-4 ">
          <SelectBox
            placeholder="Any Make"
            data={abjToArrKeys(data.makeCount)}
            setState={setState}
            state={state}
            typeState="make"
            showOption={true}
          />

          <SelectBox
            placeholder="Any Model"
            data={abjToArrKeys(data.model_Count)}
            setState={setState}
            state={state}
            typeState="model"
            showOption={state.make ? true : false}
          />

          <SelectBox
            placeholder="Min Year"
            data={abjToArrKeys(data.vehicleYear)}
            setState={setState}
            state={state}
            typeState="MinYear"
            showOption={true}
          />

          <SelectBox
            placeholder="Max Year"
            data={reversed(abjToArrKeys(data.vehicleYear))}
            setState={setState}
            state={state}
            typeState="MaxYear"
            showOption={true}
          />

          <SelectBox
            placeholder="Any Colors"
            data={abjToArrKeys(data.vehicleinterior_color_full)}
            setState={setState}
            state={state}
            typeState="color"
            showOption={true}
          />

          <SelectBox
            placeholder="Any Engine"
            data={[
              { label: "Manul", value: "manul" },
              { label: "Automatic", value: "automatic" },
            ]}
            setState={setState}
            state={state}
            typeState="engine"
            showOption={true}
          />

          <SelectBox
            placeholder="Min Price"
            data={abjToArrValue(data.priceRange)}
            setState={setState}
            state={state}
            typeState="minPrice"
            showOption={true}
          />
          <SelectBox
            placeholder="Max Price"
            data={reversed(abjToArrValue(data.priceRange))}
            setState={setState}
            state={state}
            typeState="maxPrice"
            showOption={true}
          />
          <SelectBox
            placeholder="Any Fual Type"
            data={[
              {
                label: "Electric Fuel System",
                value: "Electric Fuel System",
              },
              {
                label: "Flex",
                value: "Flex",
              },
              {
                label: "Flex Fuel Capability",
                value: "Flex Fuel Capability",
              },
              {
                label: "Gasoline",
                value: "Gasoline",
              },
              {
                label: "Gasoline Fuel",
                value: "Gasoline Fuel",
              },
            ]}
            setState={setState}
            state={state}
            typeState="AnyFualType"
            showOption={true}
          />

          <SelectBox
            placeholder="Any Body Style"
            data={bodyStyles(data.bodyStyle)}
            setState={setState}
            state={state}
            typeState="AnyBodyStyle"
            showOption={true}
          />

          <SelectBox
            placeholder="Min Km"
            data={abjToArrValue(data.odometerKMRange)}
            setState={setState}
            state={state}
            typeState="MinKm"
            showOption={true}
          />
          <SelectBox
            placeholder="Max Km"
            data={reversed(abjToArrValue(data.odometerKMRange))}
            setState={setState}
            state={state}
            typeState="MaxKm"
            showOption={true}
          />
        </div>
        <div className="grid grid-cols-12 gap-4 pt-2 search-button">
          <div className="p-0 m-0 px-3 col-span-3 max-[425px]:col-span-12 relative">
            <InputSearch
              className="border-solid border-2 rounded-md w-full"
              onChange={(e) => changeHandler(e)}
              value={searchInput}
            />
            {resultSearch && resultSearch.length && searchInput ? (
              <div className=" absolute bg-white z-50 w-72">
                <div className=" border-2 rounded-lg pt-4 h-40 flex overflow-x-hidden overflow-scroll">
                  <ul>
                    {resultSearch.map((i) => (
                      <li className="py-2 flex">
                        <div className="pl-1">
                          <img
                            src={`${BASE_URL_Images}${i.cover_image}`}
                            className="w-20 h-20 rounded-full border-amber-500 border-2"
                          />
                        </div>
                        <div className="w-48">
                          <div className="px-2">
                            <h1 className="font-bold text-amber-500">
                              {i.Vehicle.model_year} {i.Vehicle.make}{" "}
                              {i.Vehicle.model}
                              {i.Vehicle.drive_type} {i.Vehicle.body_style}
                            </h1>
                          </div>
                          <div className="flex flex-col items-baseline px-2">
                            <span>odometer:{i.odometer} KM</span>
                            <span>Stock #:{i.stock_NO}</span>
                            <span>Price: ${sp(i.sell_price)}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>

          <div className="p-0 m-0 px-3 col-span-3 max-[425px]:col-span-12">
            <Button name="Search" onClick={() => searchHandler()} />
          </div>

          <div className="p-0 m-0 px-3 col-span-3 max-[425px]:col-span-12">
            <Button name="Reset" onClick={() => resetHandler()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

{
  /* <div className="p-0 m-0 px-3 col-span-3 ">
            <Select
              placeholder="Any Fual Type"
              className="border-solid border-2 rounded-md"
              options={[
                {
                  label: "Electric Fuel System",
                  value: "Electric Fuel System",
                },
                {
                  label: "Flex",
                  value: "Flex",
                },
                {
                  label: "Flex Fuel Capability",
                  value: "Flex Fuel Capability",
                },
                {
                  label: "Gasoline",
                  value: "Gasoline",
                },
                {
                  label: "Gasoline Fuel",
                  value: "Gasoline Fuel",
                },
              ]}
              onChange={(e) => setState({ ...state, AnyFualType: e.value })}
              showOption={true}
            />
          </div> */
}
