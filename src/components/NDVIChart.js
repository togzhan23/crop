import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data=[
{month:"Apr",ndvi:0.2},
{month:"May",ndvi:0.45},
{month:"Jun",ndvi:0.7},
{month:"Jul",ndvi:0.85},
{month:"Aug",ndvi:0.6}
]

function NDVIChart(){

return(

<LineChart width={600} height={300} data={data}>

<XAxis dataKey="month"/>
<YAxis/>

<CartesianGrid stroke="#eee"/>

<Tooltip/>

<Line type="monotone" dataKey="ndvi" stroke="#2e7d32"/>

</LineChart>

)

}

export default NDVIChart