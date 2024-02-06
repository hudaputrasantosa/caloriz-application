import React, { useEffect, useState } from "react";
import usePredict from "./hooks/usePredict";
import axios from "axios";
import { Config } from "../../config";
import Select from "react-select";

const SearchPredict = () => {
  const { searchPredict } = usePredict();
  const [activity, setActivity] = useState([]);
  const [sortActivity, setSortActivity] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.api-ninjas.com/v1/caloriesburnedactivities`, {
        headers: {
          "x-api-key": Config.apiKey,
        },
      })
      .then((response) => {
        const activitiesData = response.data.activities;
        setActivity(activitiesData);
      })
      .catch((err) => {
        console.error("error fetch", err);
      });
  }, []);

  const sortMethods = {
    default: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.label < b.label ? -1 : 1) },
    descending: { method: (a, b) => (b.label > a.label ? 1 : -1) },
  };

  function handleSort(event) {
    const data = activity.map((act) => ({
      value: act,
      label: act,
    }));
    setSortActivity(data.sort(sortMethods[event].method));
  }

  const handleSearch = async (selectOption) => {
    await searchPredict(selectOption.value);
  };

  return (
    <section className="my-16 mb-20">
      <div className="max-w-screen-xl mx-auto gap-12 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto">
            Pilih dan Tentukan Aktivitas Kebugaranmu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              dan Dapatkan Kalkulasi Kalori yang Dibakar
            </span>
            🔥
          </h2>
          <p className="max-w-2xl mx-auto">
            Pilih dan tentukan aktivitas kebugaran sesuai dengan perencanaan
            anda.
          </p>
          <div className="flex lg:flex-row flex-col items-center justify-center gap-x-3 space-y-3 sm:space-y-0 lg:w-full px-8">
            <Select
              className="basic-single lg:w-96 w-full"
              name="activity"
              options={sortActivity}
              placeholder="Pilih Aktivitas .."
              onChange={handleSearch}
            />
            <select
              id="sort"
              onChange={(e) => handleSort(e.target.value)}
              placeholder="Sort By .."
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-fit w-full p-2.5 ">
              <option value="default" disabled selected>
                Urutkan Berdasarkan
              </option>
              <option value="ascending">Menurun</option>
              <option value="descending">Keatas</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchPredict;
