import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const CalculateBmr = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [age, setAge] = useState(null);
  const [sex, setSex] = useState("male");
  let [result, setResult] = useState(0);

  const handleCalculate = () => {
    const calculate =
      sex == "male"
        ? 66.5 + 13.7 * weight + 5 * height - 6.8 * age
        : 65.5 + 9.6 * weight + 1.8 * height - 4.7 * age;
    setResult(calculate);
    setHeight(0);
    setWeight(0);
    setAge(0);
  };

  return (
    <div className="container lg:mt-32 mt-20 my-16 lg:px-32 px-2 justify-center">
      <div className="mx-auto text-center mb-6">
        <h3 className="text-3xl my-2 text-gray-800 font-extrabold">
          Calculate BMR (Basal Metabolic Rate)
        </h3>
        <p className="max-w-2xl mx-auto my-2 leading-normal text-gray-600">
          The BMR (Basal Metabolic Rate) calculation system applies the
          Harris-Benedict formula which is the most commonly used formula for
          calculating BMR. This formula is based on several factors, namely
          weight, height and age.
        </p>
      </div>
      <div class="flex lg:flex-row flex-col mx-auto justify-center items-stretch gap-x-10">
        <div className="float-right">
          <div className="mb-2">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Height
            </label>
            <input
              type="number"
              id="height"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-fit w-full p-2.5"
              placeholder="Input Height .."
              onChange={(e) => setHeight(e.target.value)}
              value={height}
              required
            />
          </div>
          <div className="mb-2">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Weight
            </label>
            <input
              type="number"
              id="weight"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-fit w-full p-2.5 "
              placeholder="Input Weight .."
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
              required
            />
          </div>
          <div className="mb-2">
            <label
              for="age"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Age
            </label>
            <input
              type="number"
              id="age"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-fit w-full p-2.5"
              placeholder="Input Age .."
              onChange={(e) => setAge(e.target.value)}
              value={age}
              required
            />
          </div>
        </div>
        <div className="">
          <label
            for="sex"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Sex
          </label>
          <select
            id="sex"
            onChange={(e) => setSex(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-fit w-full p-2.5 ">
            <option value="male" selected>
              Male
            </option>
            <option value="female">Female</option>
          </select>
          <p className="my-4">
            <span className="font-bold text-lg">{result} </span> Calorie/Day
          </p>
          <Button
            color="blue"
            type="submit"
            onClick={() => handleCalculate()}
            className="my-auto bottom-0 font-semibold lg:w-fit w-full">
            Calculate BMR
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CalculateBmr;
