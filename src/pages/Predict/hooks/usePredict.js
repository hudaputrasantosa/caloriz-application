import axios from "axios";
import { usePredictContext } from "..";
import { Config } from "../../../config";

const usePredict = () => {
  const { setSearch, search } = usePredictContext();

  const searchPredict = async (activity) => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/caloriesburned`,
        {
          params: {
            activity,
          },
          headers: {
            "x-api-key": Config.apiKey,
          },
        }
      );
      await setSearch(response.data);
    } catch (error) {
      console.log("error ->", error);
    }
  };

  return {
    search,
    searchPredict,
  };
};

export default usePredict;
