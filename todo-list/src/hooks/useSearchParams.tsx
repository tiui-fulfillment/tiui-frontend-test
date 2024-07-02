import { useState, useEffect } from "react";

export const useSearchParams = () => {
  const [searchParams, setSearchParams] = useState(
    () => new URLSearchParams(window.location.search)
  );

  useEffect(() => {
    const handlePopState = () => {
      setSearchParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const updateSearchParams = (params: Record<string, string>) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    Object.keys(params).forEach((key) => {
      if (params[key]) {
        newSearchParams.set(key, params[key]);
      } else {
        newSearchParams.delete(key);
      }
    });

    const newUrl = `${window.location.pathname}?${newSearchParams.toString()}`;
    window.history.pushState(null, "", newUrl);
    setSearchParams(newSearchParams);
  };

  return [searchParams, updateSearchParams] as const;
};
