/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "./slices/apislice";
import Product from "./components/Product";
import './App.css'

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.api.apiData)

  // state for pagination
  const [pages, setPages] = useState(2); // setting the initial page


  const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    const data = response.data;
    dispatch(addData({ data: data }))
  }

  const selectPageHandler = (selectedPage) => {
    setPages(selectedPage)
  }

  const handleNextPage = (pages) => {
    if (pages < (data.length / 4)) {
      setPages(pages + 1)
    }
  }

  const handlePreviousPage = (pages) => {
    if (pages > 1) {
      setPages(pages - 1)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <h1 className="text-center font-bold text-5xl heading">Product Page</h1>
      <div className="flex flex-wrap gap-20 justify-center products">
        {
          data.slice(pages * 4 - 4, pages * 4).map((item, id) => (<Product item={item} key={id} />))
        }
      </div>
      {/* adding previous and next button */}
      <div className="flex justify-center">
        {
          data.length > 0 && <div className="flex gap-5 items-center">
            <div>
              <span onClick={() => handlePreviousPage(pages)} className="cursor-pointer">◀️</span>
            </div>
            <div className="flex gap-5">
              {
                [...Array(data.length / 4)].map((_, i) => {
                  return <span className="bg-black text-white cursor-pointer span" onClick={() => selectPageHandler(i + 1)} key={i}>{i + 1}</span>
                })
              }
            </div>
            <div>
              <span onClick={() => handleNextPage(pages)} className="cursor-pointer">▶️</span>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default App;