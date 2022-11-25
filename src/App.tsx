import React from "react";
import { LineChart } from '@carbon/charts-react';
import "@carbon/charts/styles.css";
import {LineChartOptions, ScaleTypes} from '@carbon/charts/interfaces';
import "./plex.css";

export const App = () => {
  const data = [
    {
      "group": "Dataset 1",
      "date": "2019-01-01T00:00:00.000Z",
      "value": 50000,
      "surplus": 1119670051.006355
    },
    {
      "group": "Dataset 1",
      "date": "2019-01-05T00:00:00.000Z",
      "value": 65000,
      "surplus": 919272450.6223482
    },
    {
      "group": "Dataset 1",
      "date": "2019-01-08T00:00:00.000Z",
      "value": null,
      "surplus": 1097.3468263022535
    },
    {
      "group": "Dataset 1",
      "date": "2019-01-13T00:00:00.000Z",
      "value": 49213,
      "surplus": 939752382.9483004
    },
    {
      "group": "Dataset 1",
      "date": "2019-01-17T00:00:00.000Z",
      "value": 51213,
      "surplus": 332903037.97759926
    },
    {
      "group": "Dataset 2",
      "date": "2019-01-02T00:00:00.000Z",
      "value": 0,
      "surplus": 9830.93350301888
    },
    {
      "group": "Dataset 2",
      "date": "2019-01-06T00:00:00.000Z",
      "value": 57312,
      "surplus": 543537092.3772178
    },
    {
      "group": "Dataset 2",
      "date": "2019-01-08T00:00:00.000Z",
      "value": 27432,
      "surplus": 233244483.0919836
    },
    {
      "group": "Dataset 2",
      "date": "2019-01-15T00:00:00.000Z",
      "value": 70323,
      "surplus": 247682630.80208904
    },
    {
      "group": "Dataset 2",
      "date": "2019-01-19T00:00:00.000Z",
      "value": 21300,
      "surplus": 324089217.3963456
    },
    {
      "group": "Dataset 3",
      "date": "2019-01-01T00:00:00.000Z",
      "value": 40000,
      "surplus": 724171641.6275365
    },
    {
      "group": "Dataset 3",
      "date": "2019-01-05T00:00:00.000Z",
      "value": null,
      "surplus": 12665.357104395958
    },
    {
      "group": "Dataset 3",
      "date": "2019-01-08T00:00:00.000Z",
      "value": 18000,
      "surplus": 229722711.7798634
    },
    {
      "group": "Dataset 3",
      "date": "2019-01-13T00:00:00.000Z",
      "value": 39213,
      "surplus": 86319152.99712124
    },
    {
      "group": "Dataset 3",
      "date": "2019-01-17T00:00:00.000Z",
      "value": 61213,
      "surplus": 74514127.78144696
    },
    {
      "group": "Dataset 4",
      "date": "2019-01-02T00:00:00.000Z",
      "value": 20000,
      "surplus": 482731218.87634474
    },
    {
      "group": "Dataset 4",
      "date": "2019-01-06T00:00:00.000Z",
      "value": 37312,
      "surplus": 640223242.410375
    },
    {
      "group": "Dataset 4",
      "date": "2019-01-08T00:00:00.000Z",
      "value": 51432,
      "surplus": 821365865.6875266
    },
    {
      "group": "Dataset 4",
      "date": "2019-01-15T00:00:00.000Z",
      "value": 25332,
      "surplus": 219062533.4279343
    },
    {
      "group": "Dataset 4",
      "date": "2019-01-19T00:00:00.000Z",
      "value": null,
      "surplus": 8478.88195239404
    }
  ]

  const options: LineChartOptions = {
    "title": "Line (time series)",
    "axes": {
      "bottom": {
        "title": "2019 Annual Sales Figures",
        "mapsTo": "date",
        "scaleType": ScaleTypes.TIME
      },
      "left": {
        "mapsTo": "value",
        "title": "Conversion rate",
        "scaleType": ScaleTypes.LINEAR
      }
    },
    "curve": "curveMonotoneX",
    "height": "400px"
  }

  return <LineChart
      data={data}
      options={options}
    />
}
