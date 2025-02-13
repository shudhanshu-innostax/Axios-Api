/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "./slices/apislice";
import Product from "./components/Product";
import './App.css'

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
      <h1 className="text-center font-bold text-5xl heading">Product Page</h1>
      <div className="flex flex-wrap gap-20 justify-center products">
        {
          data.map((item, id) => (<Product item={item} key={id} />))
        }
      </div>
    </div>
  )
}

export default App;