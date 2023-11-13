import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { Footer, Header, StickyNavbar } from "../../components";

const Home = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      title: "Choose Activity",
      desc: "Determine your activity will calculate calorie",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      title: "Analysis",
      desc: "Get result of analysis from calculate calorie",
    },
  ];

  return (
    <>
      <StickyNavbar />
      <section className="py-8">
        <div className="gap-8 items-center py-8 px-5 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full dark:hidden rounded-md"
            src="https://www.energy.fit/cdn/shop/articles/calories_1.jpg?v=1638556190&width=2048"
            alt="dashboard image"
          />
          <img
            className="w-full hidden dark:block"
            src="https://www.energy.fit/cdn/shop/articles/calories_1.jpg?v=1638556190&width=2048"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <Typography variant="h2" color="blue-gray" className="mb-2">
              BURN🔥 Caloriz
            </Typography>
            <Typography color="gray" className="font-normal">
              Can you help me out? you will get a lot of free exposure doing
              this can my website be in english?. There is too much white space
              do less with more, so that will be a conversation piece can you
              rework to make the pizza look more delicious other agencies charge
              much lesser can you make the blue bluer?. I think we need to start
              from scratch can my website be in english?
            </Typography>
            <a href="#predict">
              <Button color="blue" className="mt-5">
                Start Predict
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div
          className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex"
          id="predict">
          <div>
            <div className="max-w-xl space-y-3">
              <p className="text-gray-800 text-2xl font-semibold sm:text-3xl">
                Our Feature is simple solutions
              </p>
            </div>
            <div className="mt-8 max-w-lg lg:max-w-none">
              <ul className="space-y-8">
                {features.map((item, idx) => (
                  <li key={idx} className="flex gap-x-4">
                    <div className="flex-none w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-800 font-semibold">
                        {item.title}
                      </h4>
                      <p className="mt-3">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/predict">
                <Button color="blue" className="mt-5 font-semibold">
                  Predict activity now!
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="https://img.freepik.com/premium-vector/vector-illustration-business-team-analysis-monitoring-web-report-dashboard-monitor_675567-3177.jpg?w=740"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <div className="py-8">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              BurnCaloriz🔥 supported by?
            </h3>
            <p className="text-gray-600 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dignissim nibh nisl, vel egestas magna rhoncus at. Nunc elementum
              efficitur tortor in laoreet.
            </p>
          </div>
          <div className="mt-12 flex justify-center mx-auto">
            <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-12 md:grid-cols-3 lg:grid-cols-3 mx-auto">
              {/* LOGO 1 */}
              <li>
                <img
                  className="w-32 my-auto"
                  fill="none"
                  src="https://api-ninjas.com/images/apininjas_logo.png"
                />
              </li>

              {/* LOGO 2 */}
              <li>
                <img
                  className="w-32 my-auto"
                  fill="none"
                  src={require("./../../assets/images/ittp.png")}
                />
              </li>

              {/* LOGO 3 */}
              <li>
                <img
                  className="w-11 my-auto"
                  fill="none"
                  src={require("./../../assets/images/se.png")}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
