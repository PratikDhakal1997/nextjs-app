import { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const useFetchData = (page, limit) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${API_URL}?_page=${page}&_limit=${limit}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [page, limit]);

  return { data, loading };
};

export default useFetchData;
