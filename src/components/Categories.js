import React from "react";
import bag from "../images/categories/bag.png";
import shoes from "../images/categories/shoes.png";
import watch from "../images/categories/watch.png";

import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../actions/categoryActions";
import { useEffect } from "react";
export default function Categories() {
  const dispatch = useDispatch();
  //find the latest state from redux store
  const { category } = useSelector((state) => state.category);
  //call action
  useEffect(() => {
    dispatch(getCategory);
  }, [dispatch]);

  console.log(category);

  return (
    <section className="container p-5 overflow-hidden bg-white mt-5">
      <h1 className="text-center text-primary mb-5">Categories</h1>
      <div className="row gy-3">
        {category &&
          category.map((category) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="www.google.com">
                <div className="p-3 border bg-warning d-flex align-items-center justify-content-between rounded-3">
                  <h1 className="text-white">{category.category_name}</h1>
                  <img
                    width="70"
                    src={`http://localhost/Daraz/public/${category.c_image}`}
                    alt=""
                  />
                </div>
              </a>
            </div>
          ))}
      </div>
    </section>
  );
}
