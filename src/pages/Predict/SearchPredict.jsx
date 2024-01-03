import React, { useEffect, useState } from "react";
import usePredict from "./hooks/usePredict";
import axios from "axios";
import { Config } from "../../config";
import { Input, Typography } from "@material-tailwind/react";

const SearchPredict = () => {
  const { searchPredict } = usePredict();
  const [activities, setActivities] = useState([]);

  const handleSearch = (e) => {
    const data = e.target.value;
    console.log(data);
    searchPredict(data);
  };

  useEffect(() => {
    axios
      .get(`https://api.api-ninjas.com/v1/caloriesburnedactivities`, {
        headers: {
          "x-api-key": Config.apiKey,
        },
      })
      .then((response) => {
        const activitiesData = response.data.activities;
        const activity = activitiesData.map((act) => ({
          value: act,
          label: act,
        }));
        setActivities(activity);
      })
      .catch((err) => {
        console.error("error fetch", err);
      });
  }, []);

  return (
    <section className="my-12 mt-28">
      <div className="max-w-screen-xl mx-auto px-4 gap-12 text-gray-600 md:px-8">
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
            {/* <Select options={activities} onChange={handleSearch} className="w-full" /> */}
            {/* <input className='w-full border-2 py-1 rounded-md' onChange={handleSearch} placeholder='Masukkan aktifitas olahraga..'></input> */}
            <div className="w-100">
              <Input
                type="text"
                label="Cari Aktifitas Olahraga.."
                onChange={handleSearch}
              />
              <Typography
                variant="small"
                color="blue"
                className="mt-2 flex items-center gap-1 font-normal">
                Masukkan aktifitas olahraga yang ingin kamu tahu kalori yang
                dibakar, contoh: basketball
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchPredict;
