import {
  BASE_URL,
  BASE_URL_Images,
  BASE_URL_DETAILS,
} from "../../../src/constants/base";

const Images = ({ imageData }) => {
  return (
    <div className="grid grid-cols-12 h-[30rem] max-[320px]:h-[30rem] max-[375px]:h-[60rem] max-[425px]:h-[60rem]">

      <div className="col-span-7 max-[320px]:col-span-12 max-[375px]:col-span-12 max-[425px]:col-span-12">
        <img src={`${BASE_URL_Images}${imageData[0].media_src}`} className="h-[28rem] w-full"/>
      </div>

      <div className="col-span-5 max-[375px]:col-span-12 max-[425px]:col-span-12 h-[28rem] max-[320px]:hidden">
        <div className="grid grid-cols-12">
            <div className="col-span-6 ">  
                <img src={`${BASE_URL_Images}${imageData[1].media_src}`} className="h-[14rem] w-full" />
            </div>
            <div className="col-span-6">  
                <img src={`${BASE_URL_Images}${imageData[2].media_src}`} className="h-[14rem] w-full"/>
            </div>
            <div className="col-span-6">  
                <img src={`${BASE_URL_Images}${imageData[3].media_src}`} className="h-[14rem] w-full"/>
            </div>
            <div className="col-span-6">  
                <img src={`${BASE_URL_Images}${imageData[4].media_src}`} className="h-[14rem] w-full"/>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Images;
