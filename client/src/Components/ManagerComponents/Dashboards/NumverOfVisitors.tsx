import { useState, useEffect } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";  

const NumverOfVisitors = () => {    
  const [data, getData] = useState([])
  const URL = 'http://localhost:8080/api/v1/analytics/num_visitors'
  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = () => {
    fetch(URL)
      .then((res) =>
        res.json())
      .then((response) => {
        console.log(response.result);
        getData(response);
      })
  }

  return (
    <>
      <LineChart
      width={520}
      height={300}
      data={data}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
        <Line
          type="monotone"
          dataKey="female"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line 
          type="monotone" 
          dataKey="male" 
          stroke="#82ca9d" 
        />
      </LineChart>
    </>
  )
}
export default NumverOfVisitors;