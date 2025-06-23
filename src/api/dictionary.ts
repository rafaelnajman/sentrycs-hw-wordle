const API_BASE_URL = import.meta.env.VITE_DICTIONARY_API_BASE_URL || "https://api.dictionaryapi.dev/api/v2/entries/en";

export const checkWordInDictionary = async (word: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${word}`);
    return response.ok;
  } catch (error) {
    console.error("Dictionary check failed:", error);
    return false;
  }
};
