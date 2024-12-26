import { useEffect, useState } from "react";
import { useStateTypes } from "../types";

export function useGetComments() {
  const [listComments, setListComments] = useState<useStateTypes["comments"]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);
  const getComments = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://randomuser.me/api/?results=5`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        return console.log("error en la peticion");
      }
      const result = await response.json();
      setListComments(result.results);
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getComments();
  }, []);
  return { listComments, loading };
}
