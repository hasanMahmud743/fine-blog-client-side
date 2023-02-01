import React from "react";
import { useSelector } from "react-redux";
import Card from "../../Components/card/Card";

const Home = () => {
  const abc = [1, 2, 3, 4, 5, 4];
  const className = "bg-indigo-500 text-white";
  const state = useSelector((state) => state);
  console.log(state)
  return (
    <div>
      <div className="flex items-center justify-between mt-8">
        <p className="text-xl font-bold">Filter</p>
        <div className="flex flex-row-reverse gap-2">
          <p
            className={`border-2 py-2 px-4 rounded-full cursor-pointer ${className} `}
          >
            Last Upload
          </p>
          <p className={`border-2 py-2 px-4 rounded-full cursor-pointer  `}>
            First Upload
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 my-10">
        {abc.map((cart) => (
          <Card cart={cart}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
