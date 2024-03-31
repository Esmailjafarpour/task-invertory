import { BASE_URL } from "../constants/base";

const fetchDataCars = async ({page}) => {
    const currentYear = new Date().getFullYear() + 1;
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
    // console.log("result",result)
    return result;
  };

  export default fetchDataCars;

