import { useState, useEffect } from "react";
import { useStateTypes } from "../types";

export function useGetCharacters() {
  const [listCharacters, setListCharacters] = useState<
    useStateTypes["imagesCats"]
  >([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
      }

      const result = await response.json();
      setListCharacters(result);
    } catch (error: unknown) {
      console.error("Error en la solicitud:", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return { listCharacters, loading, error };
}

export function useGetImageCat(changeImage ?: boolean) {
  const [dataCat, setDataCat] = useState<useStateTypes["imagesCats"]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getImage = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        console.log(response.json());
      }
      const result = await response.json();
      setDataCat(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImage();
  }, [changeImage]);
  return { dataCat, loading };
}
