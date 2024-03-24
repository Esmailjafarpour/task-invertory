import axios from "axios";
import Search from "../components/template/Search";
import ShowAvailableCars from "../components/template/ShowAvailableCars";
import { BASE_URL } from "../constants/base";

export default async function Home(searchParams) {

  const currentYear = new Date().getFullYear() + 1;
  //console.log("searchParams", searchParams.searchParams);
  let make = ""
  const Value = Object.values(searchParams.searchParams);
      if (Value[0]) {
        console.log("q",Value[0])
        make = [Value[0]]
      } 
     const resCars = await fetch(
      `${BASE_URL}/api/dealership/advance/search/vehicles/localhost:3000?page=1&limit=20`,{
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
          make: make ,
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
  let resultCars = await resCars.json();

  // api/dealership/advance/search/vehicles/get/${domain}
  let resultSearch = [];
  const res = await axios
    .get(
      `${BASE_URL}/api/dealership/advance/search/vehicles/get/localhost:3000`
    )
    .then((response) => {
      resultSearch.push(response.data);
    });


  return (
    <div className="bg-white ">
      <Search data={resultSearch[0]} resultCars={resultCars}/>
      <ShowAvailableCars resultCars={resultCars} />
    </div>
  );
}
