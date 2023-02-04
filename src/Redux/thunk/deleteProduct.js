import { deletedProduct } from "../action/cartAction";

const deleteProduct = (id) => {
  console.log(id);
  return async (dispatch, getState) => {
    // const dispatch = useDispatch();
    const res = await fetch(`http://localhost:5000/blog/${id}`, {
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
