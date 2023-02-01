import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/action/cartAction";

const Card = ({ cart }) => {
//   console.log(cart);
  const dispatch = useDispatch()

  return (
    <div>
      <div
        onClick={() => dispatch(addProduct(cart))}
        className="card cursor-pointer hover:scale-105 transition duration-500 card-compact  bg-base-100 shadow-xl"
      >
        <figure>
          <img
            src="https://media.istockphoto.com/id/529477147/photo/aerial-view-of-apollo-statue-place-massena-nice-mediterranean-sea.jpg?s=612x612&w=0&k=20&c=UU56ltLP0dRxmXy9wFx6_g0hklX5uLL82dZc0Wr48N4="
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>
            If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Error commodi voluptatem
            veritatis expedita sit facere vero quasi at iusto quidem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
