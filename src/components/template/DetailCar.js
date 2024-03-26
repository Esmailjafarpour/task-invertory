"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { usePathname, useSearchParams } from "next/navigation";
import { sp } from "../../utils/replaceNumber";

import {
  BASE_URL,
  BASE_URL_Images,
  BASE_URL_DETAILS,
} from "../../../src/constants/base";
import { detailFunc, imageFunc } from "../../utils/detailFunc";
import CardDetail from "../module/CardDetail";
import Images from "../module/Images";

const DetailCar = async () => {
  const [active, setActive] = useState(true);
  const pathname = usePathname();
  const path = pathname.split("/").slice(2);
  const pathNew = path[0];

  const detailData = await detailFunc(pathNew);
  console.log("detailData", detailData);

  const imageData = await imageFunc(pathNew);
  console.log("imageData", imageData);

  const stripHTMLTags = (detailData) => {
    return detailData.replace(/<[^>]*>/g, "");
  };

  return (
    <div className="px-5 bg-white">
      <div className="flex px-[80px] bg-white">
        <div className="w-200 w-1/3">
          <div className="w-40">
            <Link
              href="/"
              className="flex justify-center items-center justify-around text-stone-950 bg-amber-500 w-full text-sm rounded-lg py-2 font-semibold"
            >
              <IoIosArrowBack className="" />
              Back To inventory
            </Link>
          </div>
        </div>

        <div className="w-8/12 flex justify-end">
          <div className="w-6/12 flex justify-around text-lg">
            <Link
              href="/"
              className="flex justify-between items-center text-yellow-400 font-semibold"
            >
              <FaArrowCircleLeft className="px-1 text-yellow-300 text-3xl" />
              Previous Vehicle
            </Link>
            <Link
              href="/"
              className="flex justify-between items-center text-lg font-semibold"
            >
              Next Vehicle
              <FaArrowCircleRight className="px-1 text-3xl" />
            </Link>
          </div>
        </div>
      </div>

      <div className="py-5">
        <Images imageData={imageData} />

        <div className="flex">

          <div className="p-5 w-2/3">
            <h1 className="text-4xl py-2">
              {detailData.Vehicle.model_year} {detailData.Vehicle.make}{" "}
              {detailData.Vehicle.model} {detailData.Vehicle.BodyStyle.name}
            </h1>
            <div className="grid py-3 grid-cols-2">
              <span className="grid col-span-1">
                VIN:{detailData.Vehicle.vin_number}
              </span>
              <span className="grid col-span-1">
                Stock#:{detailData.Vehicle.id}
              </span>
            </div>
            <div className="w-100 h-px bg-black mt-3"></div>
            <div className="mt-2 h-20">
              <b className="text-3xl">About Vehicle</b>
            </div>

            <div className="grid grid-cols-12 gap-[4rem] justify-around px-3 my-5">
              <CardDetail
                data={detailData.odometer}
                character={"KM"}
                name="Odometer"
                imageName={"odometer"}
              />
              <CardDetail
                data={detailData.Vehicle.model}
                character={""}
                name="Body Style"
                imageName={"bodyStyle"}
              />
              <CardDetail
                data={detailData.Vehicle.engine_size}
                character={"L"}
                name="Engin Size"
                imageName={"enginsize"}
              />
              <CardDetail
                data={detailData.Vehicle.engine_cylinders}
                character={""}
                name="Engin Cylinders"
                imageName={"engincylandler"}
              />
              <CardDetail
                data={detailData.Vehicle.exterior_color.name}
                character={""}
                name="Exterior Color"
                imageName={"colorexterior"}
              />
              <CardDetail
                data={detailData.Vehicle.Transmission.name}
                character={""}
                name="Transmission"
                imageName={"transmission"}
              />
              <CardDetail
                data={detailData.Vehicle.interior_color.name}
                character={""}
                imageName={"colorinterior"}
                name="Colors"
              />
              <CardDetail
                data={detailData.Vehicle.drive_type}
                character={""}
                name="Drivetrain"
                imageName={"drivenTrain"}
              />
              <CardDetail
                data={detailData.Vehicle.doors}
                character={""}
                name="Doors"
                imageName={"bodyStyle"}
              />
              <CardDetail
                data={detailData.Vehicle.fuel_type}
                character={""}
                name="Fuel Type"
                imageName={"fuel"}
              />
              <CardDetail
                data={detailData.Vehicle.passenger}
                character={""}
                name="Passenger"
                imageName={"condition"}
              />
            </div>

            <div>
              <h1 className="text-2xl py-2 font-bold">Description</h1>
              <div dangerouslySetInnerHTML={{ __html: detailData.comment }} />
            </div>
          </div>

          <div className="w-1/3 px-3 ">
            <div className="w-11/12 bg-slate-50 rounded-lg shadow-lg py-5 sticky top-0 right-0 z-[1000]">
              <div className="text-center pt-5">
                <h1 className=" font-bold text-4xl pt-5">
                  ${sp(detailData.sell_price)}
                </h1>
              </div>
              <div className="text-center pt-2">
                <span>+ taxes and fees</span>
              </div>
              <div className="flex flex-col">
                <div className="w-full flex justify-center">
                  <button
                    className={
                      true
                        ? "bg-amber-500 rounded-lg w-10/12 my-2 py-[.55rem] text-white hover:bg-slate-800 hover:text-white hover:border-inherit"
                        : "border-2 rounded-lg border-amber-500 w-10/12 my-2 py-[.55rem] hover:bg-slate-800 hover:text-white"
                    }
                  >
                    Request information
                  </button>
                </div>
                <div className="w-full flex justify-center">
                  <button className="border-2 rounded-sm border-amber-500 w-10/12 my-2 py-[.5rem] hover:bg-slate-800 hover:text-white hover:border-inherit">
                    Text Us Now
                  </button>
                </div>
                <div className="w-full flex justify-center">
                  <button className="border-2 rounded-sm border-amber-500 w-10/12 my-2 py-[.5rem] hover:bg-slate-800 hover:text-white hover:border-inherit">
                    Apply For Financing
                  </button>
                </div>
                <div className="w-full flex justify-center">
                  <button className="border-2 rounded-sm border-amber-500 w-10/12 my-2 py-[.5rem] hover:bg-slate-800 hover:text-white hover:border-inherit">
                    Print Window Sticker
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailCar;
