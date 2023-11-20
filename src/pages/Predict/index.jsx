import React, { createContext, useContext, useState } from "react";
import ResultPredict from "./ResultPredict";

const PredictContext = createContext({
  search: '',
  predict: [],
  setSearch() {},
  setPredict() {},
  activities: [],
  setActivities() {},
});

export const usePredictContext = () => useContext(PredictContext);

function PredictProvider({children}){
  const [search, setSearch] = useState('');
  const [predict, setPredict] = useState([]);
  const [activities, setActivities] = useState([]);

  return (
    <PredictContext.Provider value={{ 
      search, predict, setSearch, setPredict, activities, setActivities
     }}> 
     {children}
    </PredictContext.Provider>
  )
}

const Predict = () => {
  return (
    <PredictProvider>
     <ResultPredict /> 
    </PredictProvider>
  );
};

export default Predict;
