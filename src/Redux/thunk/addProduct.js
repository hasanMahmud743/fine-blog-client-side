import { productAdd } from "../action/cartAction";

const addProduct = (product) => {
  return async (dispatch, getState) => {
    console.log(product);
    const res = await fetch("https://fine-blog-server-side.vercel.app/blog", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();

    if (data.acknowledge) {
      dispatch(
        productAdd({
          ...product,
          _id: data.insertedId,
        })
      );
    }
  };
};

export default addProduct;
