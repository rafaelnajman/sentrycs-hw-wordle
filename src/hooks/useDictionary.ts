import { useCallback } from "react";

export const useDictionary = () => {
  const checkWordInDictionary = useCallback(async (word: string): Promise<boolean> => {
    const apiBaseUrl =
      import.meta.env.VITE_DICTIONARY_API_BASE_URL || "https://api.dictionaryapi.dev/api/v2/entries/en";

    try {
      const response = await fetch(`${apiBaseUrl}/${word}`);
      return response.ok;
    } catch (error) {
      console.error("Dictionary check failed:", error);
      return false;
    }
  }, []);

  return { checkWordInDictionary };
};
