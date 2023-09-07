import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = ({link}) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(link)
      .then(res => res.json())
      .then(data => setData(data))
  }, [link])

  return data
}

export default useFetch
