const sp = (number) => {
    const seperatedNumber = number?.toString()
      .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
    const joinedNumber = seperatedNumber?.join(",");
    return joinedNumber;
  };

  export {sp};