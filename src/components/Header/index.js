import React from "react";
import { Button } from "@material-tailwind/react";

const Header = () => {
  return (
    <div>
      <section className="header relative pt-5 items-center flex h-screen max-h-860-px mx-auto">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-10 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Notus React - A beautiful extension for Tailwind CSS.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Notus React is Free and Open Source. It does not change any of
                the CSS from{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank">
                  Tailwind CSS
                </a>
                . It features multiple HTML elements and it comes with dynamic
                components for ReactJS, Vue and Angular.
              </p>
              <div className="mt-12">
                <Button color="blue" target="_blank">
                  Get started
                </Button>
                <Button target="_blank" className="ml-5">
                  Github Star
                </Button>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src="https://cms-api-in.myhealthcare.co/image/20220910103120.jpeg"
          alt="..."
        />
      </section>
    </div>
  );
};

export default Header;
