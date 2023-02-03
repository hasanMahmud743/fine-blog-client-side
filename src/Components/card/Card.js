import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addProduct, addTags } from "../../Redux/action/cartAction";

const Card = ({ cart }) => {
  // console.log(cart);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const state = useSelector(state=> state.carts.tags)
  // console.log(state)
  const className = "bg-indigo-500 text-white";

  return (
    <div className="card  card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={cart.blog_image} alt="Shoes" />
      </figure>
      {!pathname.includes("history") && (
        <div className="flex gap-3 p-3">
          {cart.blog_topic.map((topic) => (
            
            <button onClick={()=> dispatch(addTags(topic))} className={`btn btn-outline ${ (state) === topic && className} btn-xs`}>{topic}</button>
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
