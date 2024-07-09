import { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const useFetchData = (
  page: number,
  limit: number
): { data: Post[]; loading: boolean } => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
