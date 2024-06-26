import { BASE_URL, BASE_URL_Images,BASE_URL_DETAILS } from "../constants/base";

const detailFunc = async (pathNew) => {

  const fetchData = await fetch(
    `${BASE_URL}/api/dealership/mid/vehicle/single/localhost:3000/${pathNew}`
  );
  const detailFunc = await fetchData.json();
  
  return detailFunc;
};

const imageFunc = async (pathNew) => {
  console.log("Error while ",`${BASE_URL}/api/vehicle/dealership/media/mid/all/localhost:3000/${pathNew}` )
  
  const res2 = await fetch( 
    `${BASE_URL}/api/vehicle/dealership/media/mid/all/localhost:3000/${pathNew}` 
  )
  const image = await res2.json();
  
  return image;
};



export {detailFunc ,imageFunc};



// export async function getServerSideProps(context) { 
//   const { req, params } = context; 
//   const host = req.headers["x-forwarded-host"] 
//     ? req.headers["x-forwarded-host"] 
//     : req.headers.host; 
//   const res = await fetch( 
//     `${BASE_URL}/api/dealership/mid/vehicle/single/${host}/${params?.vehicleBase}` 
//   ); 
//   const res2 = await fetch( 
//     `${BASE_URL}/api/vehicle/dealership/media/mid/all/${host}/${params?.vehicleBase}` 
//   ); 
//   const { data: specialData, status: specialStatus } = await httpRequest( 
//     "GET", 
//     /api/dealership/vehicles/${host}/special, 
//     {}, 
//     {} 
//   ); 
//   // const res3 = await fetch(`${BASE_URL}/api/soldImages/${host}`); 
//   // const sold = await res3.json(); 
//   if (res.status === 200 && res2.status === 200 && specialStatus === 200) { 
//     const data = await res.json(); 
//     const data2 = await res2.json(); 
//     return { props: { data, data2, domain: host, specialData } }; 
//   } else { 
//     return { 
//       notFound: true, 
//     }; 
//   } 
// }