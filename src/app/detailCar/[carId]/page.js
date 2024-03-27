"use client";
import DetailCar from "../../../components/template/DetailCar";
import { usePathname, useSearchParams } from "next/navigation";
const CarDetailId = () => {
  const pathname = usePathname();
  const path = pathname.split("/").slice(2);
  const pathNew = path[0];

  return <DetailCar pathNew={pathNew} />;
};
export default CarDetailId;
