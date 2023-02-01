import React from "react";
import { useSelector } from "react-redux";
import Card from "../../Components/card/Card";

const History = () => {
  const state = useSelector((state) => state.cart);
  return (
    <div className="my-10">
      {state?.length ? (
        <div className="grid grid-cols-3 gap-5">{state?.map(cart => <Card cart={cart}></Card>)}</div>
      ) : (
        <p className="text-center font-bold text-2xl mt-10">
          No blog is still visited
        </p>
      )}{" "}
    </div>
  );
};

export default History;
