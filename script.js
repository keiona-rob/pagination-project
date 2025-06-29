const state = {
  currentPage: 1,
  currentTitle: "",
  wordData: [], 
  isSortedAscending: true,
  isRateLimit: false,
};

async function searchWord(word) {
  state.currentWord = word;
  state.isRateLimit = true;

  try {
    renderLoading();
    const response = await fetch(
      `https://en.wiktionary.org/w/api.php?action=query&format=json&prop=extracts&titles=${word}`
      
    );
    if (!response.ok) {
      throw new Error("Network error. Status: ", response.status);
    }

    const data = await response.json();
    state.bookData = data.docs;               

    console.log(data);
    return data;
  } catch (error) {
    console.log("ERROR Fetching the word: ", error.message);
  } finally {
    console.log("Finished fetching the definition");
  }
}