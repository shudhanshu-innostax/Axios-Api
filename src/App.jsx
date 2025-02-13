/* eslint-disable no-unused-vars */
import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "./slices/apislice";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.api.apiData)


  const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    const data = response.data;
    dispatch(addData({ data: data }))
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      {
        data.map((item, id) => (
          <h1 key={id}>{item.title}</h1>
        ))
      }
    </div>
  )
}

export default App;