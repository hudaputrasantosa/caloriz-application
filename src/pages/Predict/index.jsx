import React, { createContext, useContext, useEffect, useState } from "react";
import ResultPredict from "./ResultPredict";
import CalculateBmr from "./CalculateBmr";
import SearchPredict from "./SearchPredict";
import { Footer, StickyNavbar } from "../../components";

const PredictContext = createContext({
  search: "",
  predict: [],
  setSearch() {},
  setPredict() {},
  activities: [],
  setActivities() {},
});

export const usePredictContext = () => useContext(PredictContext);

function PredictProvider({ children }) {
  const [search, setSearch] = useState("");
  const [predict, setPredict] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    document.title = "🔥 | Prediksi";
  }, []);

  return (
    <PredictContext.Provider
      value={{
        search,
        predict,
        setSearch,
        setPredict,
        activities,
        setActivities,
      }}>
      {children}
    </PredictContext.Provider>
  );
}

const Predict = () => {
  return (
    <PredictProvider>
      <StickyNavbar />
      <div className="lg:px-20 px-2">
        <CalculateBmr />
        <SearchPredict />
        <ResultPredict />
      </div>
      <Footer />
    </PredictProvider>
  );
};

export default Predict;
