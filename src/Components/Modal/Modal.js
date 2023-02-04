import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import updateProduct from "../../Redux/thunk/updateProduct";

const Modal = ({ _id, blog_name, blog_image, blog_details }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const product = {
      blog_name: data.blog_name,
      blog_image: data.blog_image,
      blog_details: data.blog,
    };
      dispatch(updateProduct(_id, product));
    console.log(product);
  };
  return (
    <div>
      <input type="checkbox" id={_id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={_id}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex justify-center items-center h-full ">
            <form
              className="shadow-lg p-10 rounded-md  gap-3 max-w-3xl justify-between bg-white"
              onSubmit={handleSubmit(submit)}
            >
              <div className="flex flex-col  w-full max-w-md">
                <label className="mb-2" htmlFor="model">
                  Blog Name
                </label>
                {/* <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" /> */}

                <input
                  defaultValue={blog_name}
                  className="input input-bordered input-sm w-full max-w-xs"
                  type="text"
                  id="model"
                  {...register("blog_name")}
                />
              </div>

              <div className="flex flex-col mt-5 w-full max-w-xs">
                <label className="mb-2" htmlFor="image">
                  Blog Image
                </label>
                <input
                  defaultValue={blog_image}
                  className="input input-bordered input-sm w-full max-w-xs"
                  type="text"
                  name="image"
                  id="image"
                  {...register("blog_image")}
                />
              </div>

              {/* <div className="flex mt-5 flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="keyFeature2">
                  Related Tag
                </label>
                <input
                  className="input input-bordered input-sm w-full max-w-xs"
                  type="text"
                  name="keyFeature2"
                  id="keyFeature2"
                  {...register("tag1")}
                />
              </div>
              <div className="flex mt-5 flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="keyFeature3">
                  Related Tag 2
                </label>
                <input
                  className="input input-bordered input-sm w-full max-w-xs"
                  type="text"
                  name="keyFeature3"
                  id="keyFeature3"
                  {...register("tag2")}
                />
              </div>
              <div className="flex mt-5 flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="keyFeature4">
                  Related Tag3
                </label>
                <input
                  className="input input-bordered input-sm w-full max-w-xs"
                  type="text"
                  name="keyFeature4"
                  id="keyFeature4"
                  {...register("tag3")}
                />
              </div> */}

              <div className="flex mt-5 flex-col w-full max-w-xs">
                {" "}
                <label className="mb-2" htmlFor="keyFeature4">
                  Blog Text
                </label>
                <textarea
                  defaultValue={blog_details}
                  className="textarea textarea-bordered"
                  placeholder="enter your blog"
                  {...register("blog")}
                ></textarea>
              </div>

              <div className="flex mt-5 justify-between items-center w-full">
                <button
                  className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
