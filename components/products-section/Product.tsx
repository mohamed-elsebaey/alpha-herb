import React from "react";
import AutoSlides from "./AutoSlides";

function ProductsSection() {
  return (
    <>
      {/* <span id="companies"></span> */}
      <div className="py-20 px-4 md:px-10 max-w-screen-xl mx-auto">

        <div className="container text-primary">
          {/* Heading section  */}
          <div className="text-center mt-16">
            <h1 className="text-4xl font-bold ">Our Products</h1>
          </div>
          {/* Company Card section  */}
          <AutoSlides/>
        </div>
      </div>
    </>
  );
}

export default ProductsSection;


