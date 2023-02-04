import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Components/card/Card";
import {
  firstUploadToggle,
  lastUploadToggle
} from "../../Redux/action/cartAction";
import fetchProduct from "../../Redux/thunk/fetchProduct";

const Home = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const [blog, setBlog] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    // fetch("https://fine-blog-server-side.vercel.app")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setBlog(data);
    //    dispatch(loadProduct(data))
    //   });
  }, []);

  let allBlog;

  const newBlog = state.product.products.filter((product) => {
    if (state.carts.tags.length) {
      // console.log(product.blog_topic);
      return product.blog_topic.includes("productivity");
    } else {
      return product;
    }
  });
  const className = "bg-indigo-500 text-white";

  console.log(state);
  if (state.product.products.length && state.carts.upload === "first") {
    allBlog = newBlog
      .sort((a, b) => b._id - a._id)
      .map((cart) => <Card cart={cart}></Card>);
  } else if (state.product.products.length && state.carts.upload === "last") {
    allBlog = newBlog
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
              state.carts.upload === "last" && className
            } `}
          >
            Last Upload
          </p>
          <p
            onClick={() => dispatch(firstUploadToggle("first"))}
            className={`border-2 py-2 px-4 rounded-full cursor-pointer ${
              state.carts.upload === "first" && className
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
