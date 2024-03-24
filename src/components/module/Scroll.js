"use client";
import InfiniteScroll from "react-infinite-scroll-component";
import { BASE_URL } from "../../constants/base";

function Scroll({allCars ,children}) {

    const fetchData = async () => {
        const getData = await fetch(`${BASE_URL}/api/dealership/advance/search/vehicles/localhost:3000`);
        const result = await getData.json()
        console.log("dartattatatat",result)
        return result
    };
   
    const refreshData = async () => {
      const get = await fetch(`${BASE_URL}/api/dealership/advance/search/vehicles/localhost:3000`);
      const res = await get.json()
      console.log("dartattatatat",res)
      return res
  };


  return (
    <InfiniteScroll
      dataLength={allCars.length} //This is important field to render the next data
      next={fetchData()}
      hasMore={true}
      height={5}
      scrollThreshold={0.5}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={refreshData()}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
      }
    >
      {children}
    </InfiniteScroll>
  );
}

export default Scroll;
