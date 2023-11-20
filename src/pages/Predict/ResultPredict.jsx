import React, { useState } from 'react'
import SearchPredict from './SearchPredict'
import usePredict from './hooks/usePredict'
import { Footer, StickyNavbar } from '../../components'
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const ResultPredict = () => {
  const { search } = usePredict();
  const [loading, setLoading] = useState(false);

  const render = () => search && search.map((predict) =>(
      <Card className="mb-8 w-80">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {predict.name}
        </Typography>
        <Typography>
          Prediksi Kalori : {predict.calories_per_hour}
        </Typography>
         <Typography>
          Durasi Aktifitas : {predict.duration_minutes} Menit
        </Typography>
      </CardBody>
    </Card>
  ))

  return (
    <>
     <StickyNavbar />
          <SearchPredict />
           {loading? ("Loading.. please wait"): (
            <div className='container mx-auto py-4'>
            <div className='grid grid-cols-4'>
            {render()}
            </div>
            </div>
           )}
        <Footer />
    </>
  )
}

export default ResultPredict