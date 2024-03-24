import { ThreeDots } from "react-loader-spinner";


const Loader = ({loading , color}) => {
  return (
    <div className="flex py-5">
       <ThreeDots
        height="60"
        width="60"
        radius="9"
        color={color}
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: "auto" }}
        wrapperClassName=""
        visible={loading}
      />
    </div>
   
  );
};

export default Loader;