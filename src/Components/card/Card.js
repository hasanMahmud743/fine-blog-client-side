import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addProduct } from "../../Redux/action/cartAction";

const Card = ({ cart }) => {
  // console.log(cart);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div className="card  card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={cart.blog_image} alt="Shoes" />
      </figure>
      {!pathname.includes("history") && (
        <div className="flex gap-3 p-3">
          {cart.blog_topic.map((topic) => (
            <button className="btn btn-outline btn-xs">{topic}</button>
          ))}
        </div>
      )}
      <div className="card-body">
        <h2 className="card-title">{cart.blog_name}</h2>
        <p>{cart.blog_details.slice(0, 200)} ...</p>
      </div>
      <Link
        onClick={() => dispatch(addProduct(cart))}
        to={`/details/${cart._id}`}
      >
        {!pathname.includes("history") && (
          <div className="m-5">
            <button className="btn btn-md w-full ">Read this blog</button>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Card;
