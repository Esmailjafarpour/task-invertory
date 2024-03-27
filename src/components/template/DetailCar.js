// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { IoIosArrowBack } from "react-icons/io";
// import { FaArrowCircleLeft } from "react-icons/fa";
// import { FaArrowCircleRight } from "react-icons/fa";
// import { usePathname, useSearchParams } from "next/navigation";
// import { sp } from "../../utils/replaceNumber";
// import {
//   BASE_URL,
//   BASE_URL_Images,
//   BASE_URL_DETAILS,
// } from "../../../src/constants/base";
// import CardDetail from "../module/CardDetail";
// import Images from "../module/Images";
// import { IoCamera } from "react-icons/io5";
// import Imagegallery from "../template/Imagegallery";
// import Modal from 'react-modal';
import { detailFunc, imageFunc } from "../../utils/detailFunc";
import DetailCarMain from "./DetailCarMain";


const DetailCar = async ({pathNew}) => {
  // const [showModal, setShowModal] = useState(false);
  // useEffect(() => {
  //   console.log(showModal)
  // }, [showModal]);

  // const pathname = usePathname();
  // const path = pathname.split("/").slice(2);
  // const pathNew = path[0];

  const detailData = await detailFunc(pathNew);
  console.log("detailData", detailData);

  const imageData = await imageFunc(pathNew);
  console.log("imageData", imageData);


  return (
    <DetailCarMain detailData={detailData} imageData={imageData}/>
  );
};

export default DetailCar;
