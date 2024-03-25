import { BASE_URL } from "../../constants/base";
import DetailCar from "../../components/template/DetailCar";


const detailCar = () => {
 
  return (
    <div>
      <DetailCar/>
      <div className="flex justify-center">No car found with this information</div>
    </div>
  );
};

export default detailCar;

