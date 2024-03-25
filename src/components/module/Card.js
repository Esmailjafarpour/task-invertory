// import Image from "next/image";
import Button from "../module/Button";
import {
  BASE_URL,
  BASE_URL_Images,
  BASE_URL_DETAILS,
} from "../../../src/constants/base";
import { sp } from "../../utils/replaceNumber";
import { useRouter } from "next/navigation";

const Card = (props) => {
  const { data, displayShow } = props;
  const router = useRouter();
  // console.log("data", data);
  let src = `${BASE_URL_Images}${data.cover_image}`;
  let imageDefault = "/Images/default-inventory-image-car-med.png";
  let title =
    data.Vehicle.model_year +
    " " +
    data.Vehicle.make +
    " " +
    data.Vehicle.model +
    " " +
    data.Vehicle.drive_type +
    " " +
    data.Vehicle.body_style;

  const detailCar = () => {
    router.push(
      `${BASE_URL_DETAILS}${data.Vehicle.model_year}-${data.Vehicle.make}-${data.Vehicle.model}-${data.id}`
    );
  };

  return (
    <>
      <div
        className={
          displayShow
            ? "w-full col-span-4 sm:col-span-12 md:col-span-6 lg:col-span-4 max-[640px]:col-span-12 rounded-lg shadow-lg p-3"
            : "w-full col-span-12 flex shadow-lg p-3 border-solid border-gray-950 border-b-2 pb-2.5 seramic"
        }
      >
        <div
          className={
            displayShow
              ? "col-span-3 h-[370px] flex flex-col justify-between"
              : "w-3/12"
          }
        >
          <div className="relative overflow-hidden rounded-lg ">
            {data.cover_image !== null ? (
              <img
                className={
                  displayShow
                    ? "object-fill w-full h-80"
                    : "object-fill w-full h-56"
                }
                src={src}
                alt={data.more_option}
              />
            ) : (
              <div className="relative flex flex-col justify-center items-center">
                <img
                  className={
                    displayShow
                      ? "object-fill w-full h-80"
                      : "object-fill w-full h-56"
                  }
                  src={imageDefault}
                />
                <span className=" absolute bottom-[10rem] text-orange-400">
                  {data.Vehicle.body_style}
                </span>
              </div>
            )}
            {/* <img
              className="object-fill w-full h-80"
              src={
                data.cover_image !== null
                  ? src
                  : "/Images/default-inventory-image-car-med.png"
              }
              alt="image"
            /> */}
            {displayShow ? (
              <button
                onClick={() => detailCar()}
                className="w-full bg-black text-center absolute bottom-[.01rem] bg-opacity-30 text-slate-300 h-[2.3rem]"
              >
                View Details
              </button>
            ) : null}
          </div>
          {/* <Image
            src={src ? src : "/Images/default-inventory-image-car-med.png" }
            
            alt="Picture of the author"
            layout="fill"
          /> */}
          <div className="flex justify-between py-1 h-fit selectForCompare">
            <div
              className={
                displayShow
                  ? "w-2/4 flex items-center"
                  : "w-full flex items-center py-2"
              }
            >
              <input type="checkbox" />
              <label className="pl-2">Select For Compare</label>
            </div>

            {displayShow ? (
              <div className="w-2/4 flex justify-end">
                <button className="border border-orange-400 rounded-lg text-amber-500 px-2 py-0.5 h-10 hover:bg-orange-400 hover:text-orange-50 h-[30px] w-[120px]">
                  Compare
                </button>
              </div>
            ) : null}
          </div>
        </div>

        <div className={displayShow ? "flex-col px-1" : "w-6/12 px-5"}>
          <div className=" py-3">
            <h1 className="font-bold">{title.slice(0, 50)}</h1>
          </div>

          <div className="price-distance py-2 flex justify-between">
            <div className={displayShow ? "flex justify-between w-2/4" : "one"}>
              {displayShow && data.special_price !== 0 ? (
                <div>
                  <p className="relative flex">
                    Price : ${sp(data.sell_price)}
                    <span className="h-0.5 w-12 bg-red-600 absolute top-3 left-16 -rotate-12"></span>
                  </p>
                </div>
              ) : (
                displayShow && <p>Price : ${sp(data.sell_price)}</p>
              )}
              {data.special_price !== 0 ? (
                <p>${sp(data.special_price)}</p>
              ) : null}
            </div>

            <span>{sp(data.odometer)} km</span>
          </div>

          {displayShow ? <hr class="my-1 bg-gray-950 border-1"></hr> : null}

          <div className={!displayShow ? "grid grid grid-cols-6 gap-4" : ""}>
            <div
              className={!displayShow ? "pr-3 col-span-3 h-[135px] grid" : null}
            >
              <div className="flex justify-between">
                <p>Exterior Color</p>
                <p>
                  {data.Vehicle.interior_color
                    ? data.Vehicle.interior_color.name
                    : "No Color"}
                </p>
              </div>

              <div className="flex justify-between">
                <p>Stock #</p>
                <p>{data.stock_NO}</p>
              </div>

              <div className="flex justify-between">
                <p>Doors</p>
                <p>{data.Vehicle.doors}</p>
              </div>
              <div className="flex justify-between">
                <p>Body Style</p>
                <p>{data.Vehicle.body_style}</p>
              </div>
            </div>

            <div
              className={!displayShow ? "pl-3 col-span-3 h-[135px] grid" : null}
            >
              <div className="flex justify-between">
                <p>Transmission</p>
                {data.vehicle_site_detail.transmission ? (
                  <p>Automatic</p>
                ) : (
                  <p>Manual</p>
                )}
              </div>
              <div className="flex justify-between">
                <p>Drivetrain</p>
                <p>{data.Vehicle.drive_type}</p>
              </div>
              <div className="flex justify-between">
                <p>Engine</p>
                <p>{data.Vehicle.engine_cylinders}</p>
              </div>
              <div className="flex justify-between">
                <p>Vin</p>
                <p>{data.Vehicle.vin_number}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            displayShow
              ? "flex pt-1"
              : "flex flex-col w-[20rem] justify-end items-end h-3/4"
          }
        >
          {!displayShow ? (
            <div className="w-3/5 ">
              {displayShow && data.special_price !== 0 ? (
                <div>
                  <p className="relative flex text-xl text-end">
                    Price : ${data.sell_price}
                    <span className="h-0.5 w-12 bg-red-600 absolute top-3 left-16 -rotate-12"></span>
                  </p>
                </div>
              ) : (
                <p className="text-xl text-end">Price : ${data.sell_price}</p>
              )}
              <div
                className={!displayShow ? "w-full py-1" : "px-1 w-full py-1"}
              >
                <Button name="View Detail" />
              </div>
            </div>
          ) : null}

          <div className={!displayShow ? "w-3/5 py-1" : "pl-1 w-1/2 py-1"}>
            <Button name="Text Us Now" />
          </div>
          <div className={!displayShow ? "w-3/5 py-1" : "pl-1 w-1/2 py-1"}>
            <Button name="Contact Us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
