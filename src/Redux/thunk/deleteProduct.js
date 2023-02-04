import { deletedProduct } from "../action/cartAction";

const deleteProduct = (id) => {
  console.log(id);
  return async (dispatch, getState) => {
    // const dispatch = useDispatch();
    const res = await fetch(`https://fine-blog-server-side.vercel.app/blog/${id}`, {
      method: "delete",
    });
    const data = await res.json();
    console.log(data);
    if(data.acknowledge){
      dispatch(deletedProduct(id))
    }
  };
};

export default deleteProduct;
