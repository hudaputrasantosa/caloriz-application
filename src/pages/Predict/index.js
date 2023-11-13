import React from "react";
import Select from "react-select";
import { Footer, StickyNavbar } from "../../components";

const Predict = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <StickyNavbar />
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-4 py-6 mt-12 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
              Choose your sport activity{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                and calculate burned calorie
              </span>
              🔥
            </h2>
            <p className="max-w-2xl mx-auto">
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Select options={options} className="w-full" />
            </div>
          </div>
          <div className="mt-14">
            <img
              src="https://res.cloudinary.com/floatui/image/upload/v1670150563/desktop_dte2ar.png"
              className="w-full shadow-lg rounded-lg border"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Predict;
