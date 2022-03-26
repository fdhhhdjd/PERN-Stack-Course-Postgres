import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useMyContext } from "../Import/Index";
const DEFAULT_OPTION = {
  sizeCache: 100,
  saveCache: false,
  refetchInterval: 1000,
};
const useQuery = (url, opt = DEFAULT_OPTION) => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { cache } = useMyContext();
  const option = { ...DEFAULT_OPTION, ...opt };
  const clearCache = useCallback(() => {
    if (Object.keys(cache.current).length >= option.sizeCache) {
      return (cache.current = {});
    }
  }, [cache, url]);
  useEffect(() => {
    let here = true;
    if (cache.current[url]) {
      setTodo(cache.current[url]);
    }
    const delayDebounce = setTimeout(
      () => {
        if (!cache.current[url]) setLoading(true);
        axios
          .get(url)
          .then((response) => {
            if (!here) return;
            setTodo(response.data.data);
            cache.current[url] = response.data.data;
          })
          .catch((error) => {
            if (!here) return;
            setError(error.response.data.msg);
          })
          .finally(() => {
            if (!here) return;
            setLoading(false);
          });
      },
      cache.current[url] ? option.refetchInterval : 0
    );
    return () => {
      here = false;
      clearTimeout(delayDebounce);
    };
  }, [url, cache, clearCache, option.refetching, option.refetchInterval]);
  return { todo, loading, error };
};

export default useQuery;
