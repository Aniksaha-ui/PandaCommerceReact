import React, { Fragment } from "react";
import Categories from "./Categories";
import Shoes from "./Shoes";
import Bags from "./Bags";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ImageSlider from "./layout/ImageSlider";
export default function Home() {
  return (
    <Fragment>
      <ImageSlider />
      <Categories />
      <Shoes />
      <Bags />
    </Fragment>
  );
}
