import React, { useState } from "react";
import usePredict from "./hooks/usePredict";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const ResultPredict = () => {
  const { search } = usePredict();
  const [loading, setLoading] = useState(false);

  const render = () =>
    search &&
    search.map((predict) => (
      <Card className="w-full">
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 lg:text-lg text-sm">
            {predict.name}
          </Typography>
          <Typography className="lg:text-sm text-xs">
            Prediksi Kalori : {predict.calories_per_hour}
          </Typography>
          <Typography className="lg:text-sm text-xs">
            Durasi Aktifitas : {predict.duration_minutes} Menit
          </Typography>
        </CardBody>
      </Card>
    ));

  return (
    <>
      {loading ? (
        "Loading.. please wait"
      ) : (
        <div className="container mx-auto my-2 lg:px-8 px-4">
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-3">
            {render()}
          </div>
        </div>
      )}
    </>
  );
};

export default ResultPredict;
