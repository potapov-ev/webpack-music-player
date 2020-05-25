import { useState, useEffect, useCallback } from "react";

const useFetch = (fetchSource, { params }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      const result = await fetchSource({ ...params });
      setData(result?.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      console.log("useFetch", error);
    }
  }, [fetchSource, params]);

  useEffect( () => {
    fetch();
  }, [fetch]);

  return { loading, data, error };
};

export default useFetch;
