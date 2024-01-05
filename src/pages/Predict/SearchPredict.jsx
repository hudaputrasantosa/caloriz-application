import React, { useEffect, useState } from "react";
import usePredict from "./hooks/usePredict";
import axios from "axios";
import { Config } from "../../config";
import { Input, Typography } from "@material-tailwind/react";
import Select from "react-select";

const SearchPredict = () => {
  const { searchPredict } = usePredict();
  const [activity, setActivity] = useState([]);
  const [isSearchable, setIsSearchable] = useState(true);
  // const [selectedValue, setSelectedValue] = useState(null);

  const handleSearch = (selectOption) => {
    const data = selectOption.value;
    console.log(` data is ${data}`);
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
        setActivity(activity);
      })
      .catch((err) => {
        console.error("error fetch", err);
      });
  }, []);

  return (
    <section className="my-16 mb-20">
      <div className="max-w-screen-xl mx-auto gap-12 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto">
            Choose your sport activity <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              and burned calorie
            </span>
            🔥
          </h2>
          <p className="max-w-2xl mx-auto">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <div className="flex flex-col items-center justify-center gap-x-3 space-y-3 sm:space-y-0 lg:w-full px-8">
            <Select
              className="basic-single lg:w-96 w-full"
              classNamePrefix="select"
              defaultValue={activity[0]}
              isSearchable={isSearchable}
              name="activity"
              options={activity}
              placeholder="Select Activity .."
              // value={selectedValue}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchPredict;
