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
          <Typography className="lg:text-sm text-xs font-normal">
            Kalori yang terbakar :{" "}
            <span className="font-semibold">{predict.calories_per_hour}</span>{" "}
            kalori
          </Typography>
          <Typography className="lg:text-sm text-xs font-normal">
            Durasi Aktivitas :{" "}
            <span className="font-semibold">{predict.duration_minutes}</span>{" "}
            Menit
          </Typography>
        </CardBody>
      </Card>
    ));

  return (
    <>
      {loading ? (
        "Loading.. please wait"
      ) : (
        <div className="container mx-auto my-2 lg:px-12 px-4">
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-3">
            {render()}
          </div>
        </div>
      )}
    </>
  );
};

export default ResultPredict;
