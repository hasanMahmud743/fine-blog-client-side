import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Components/card/Card";
import {
  firstUploadToggle,
  lastUploadToggle
} from "../../Redux/action/cartAction";

const Home = () => {
  const [blog, setBlog] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlog(data);
      });
  }, []);

  let allBlog;

  const className = "bg-indigo-500 text-white";
  const state = useSelector((state) => state);
  console.log(state);
  if (blog.length && state.upload === "first") {
    allBlog = blog
      .sort((a, b) => b._id - a._id)
      .map((cart) => <Card cart={cart}></Card>);
  } else if (blog.length && state.upload === "last") {
    allBlog = blog
      .sort((a, b) => a._id - b._id)
      .map((cart) => <Card cart={cart}></Card>);
  }
  return (
    <div>
      <div className="flex items-center justify-between mt-8">
        <p className="text-xl font-bold">Filter</p>
        <div className="flex flex-row-reverse gap-2">
          <p
            onClick={() => dispatch(lastUploadToggle("last"))}
            className={`border-2 py-2 px-4 rounded-full cursor-pointer ${
              state.upload === "last" && className
            } `}
          >
            Last Upload
          </p>
          <p
            onClick={() => dispatch(firstUploadToggle("first"))}
            className={`border-2 py-2 px-4 rounded-full cursor-pointer ${
              state.upload === "first" && className
            }`}
          >
            First Upload
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 my-10">{allBlog}</div>
    </div>
  );
};

export default Home;
