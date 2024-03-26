const CardDetail = ({data ,name , character ,imageName}) => {
  return (
    <div className="grid col-span-4 border bg-white h-36">
      <div className="flex justify-center py-3">
        <img src={`/images/${imageName}.png`} />
      </div>
      <div className="text-center">
        <b className="font-extrabold">{name}</b>
      </div>
      <div className="text-center">
        <span>{data} {character}</span>
      </div>
    </div>
  );
};

export default CardDetail;
