import { loadProduct } from "../action/cartAction";

const fetchProduct = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://fine-blog-server-side.vercel.app/blog");
    const data = await res.json();
    console.log(data);
    if (data.length) {
      dispatch(loadProduct(data));
    }
  };
};

export default fetchProduct;
