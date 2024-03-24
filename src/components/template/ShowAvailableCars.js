"use client";
import { useState, useEffect } from "react";
import Card from "../module/Card";
import { MdApps } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";

//infinite scroll
import { BASE_URL } from "../../constants/base";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../module/Loader";

function ShowAvailableCars(props) {
  const currentYear = new Date().getFullYear() + 1;
  const { resultCars } = props;
  const [displayShow, SetDisplayShow] = useState(true);
  const [allCars, SetAllCars] = useState([]);
  const [page, SetPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  
  const displayMosaic = () => {
    SetDisplayShow(true);
  };

  const displayCeramic = () => {
    SetDisplayShow(!displayShow);
  };

  const fetchData = async () => {
    const getData = await fetch(
      `${BASE_URL}/api/dealership/advance/search/vehicles/localhost:3000?page=${page}&limit=20`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fuel_type: "",
          body_style: "",
          engine_cylinders: "",
          year_end: currentYear + 1,
          // price_low: minPrice - 1,
          // price_high:  maxPrice + 1,
          odometer_type: 2,
          make: "",
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
      }
    );
    const result = await getData.json();
    return result;
  };


  useEffect(() => {
    SetAllCars(resultCars);
  }, [resultCars]);



  useEffect(() => {
    console.log("page", page)
    const fetchData = async () => {
      const response = await fetch(
        `${BASE_URL}/api/dealership/advance/search/vehicles/localhost:3000?page=${page}&limit=20`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fuel_type: "",
            body_style: "",
            engine_cylinders: "",
            year_end: currentYear + 1,
            // price_low: minPrice - 1,
            // price_high:  maxPrice + 1,
            odometer_type: 2,
            make: "",
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
        })
        let data = await response.json();
        console.log("data new",data)
        SetAllCars([...allCars,...data])
    };
    fetchData()
  }, [hasMore , page]);

  

  return (
    <div className="px-3 py-4 m-4">
      <div className="grid grid-cols-12">
        <div className="col-span-8 max-[425px]:col-span-12">
          <div>
            <span>{resultCars && resultCars.length} Vehicles</span>
            <div className="sort">
              <ul className="flex">
                <li>
                  <span className="px-2">Sort :</span>
                </li>
                <li>
                  <span className="px-2 border-r-2">Year</span>
                </li>
                <li>
                  <span className="px-2 border-r-2">Make</span>
                </li>
                <li>
                  <span className="px-2 border-r-2">Model</span>
                </li>
                <li>
                  <span className="px-2 border-r-2">Body Style</span>
                </li>
                <li>
                  <span className="px-2 border-r-2">Price</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-4 flex justify-end mr-2 hiddenTypeShowCars">
          <div className="flex w-[4.5rem] justify-between">
            {displayShow ? (
              <span
                className="border-solid border-2 border-stone-400 rounded-md h-fit p-0.5"
                onClick={() => displayCeramic()}
              >
                <AiOutlineBars className="text-2xl text-slate-400" />
              </span>
            ) : (
              <span
                className="border-solid border-2 border-amber-500 rounded-md h-fit p-0.5"
                onClick={() => displayCeramic()}
              >
                <AiOutlineBars className="text-2xl text-amber-500" />
              </span>
            )}

            {displayShow ? (
              <span
                className="border-solid border-2 border-amber-500 rounded-md h-fit p-0.5"
                onClick={() => displayMosaic()}
              >
                <MdApps className="text-2xl text-amber-500" />
              </span>
            ) : (
              <span
                className="border-solid border-2 border-stone-400 rounded-md h-fit p-0.5"
                onClick={() => displayMosaic()}
              >
                <MdApps className="text-2xl text-slate-400" />
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="py-4 shadow-lg">
        <InfiniteScroll
          dataLength={allCars.length}
          next={() => {
            fetchData();
            SetPage(page + 1);
          }}
          hasMore={hasMore}
          loader={<Loader/>}
        >
          <div className="p-0 m-0 grid grid-cols-12 gap-4 w-full">
            {allCars.map((item, index) => {
              return (
                <Card
                  key={item.Vehicle.id}
                  data={item}
                  displayShow={displayShow}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default ShowAvailableCars;
