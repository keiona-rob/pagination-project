async function searchDogBreed(breed) {
    try {
    //   const url = `https://www.freetogame.com/api/games?platform=${platform}&limit=10&page=1`
      
    //   const options = {
    //     method: "GET", 
        // headers: {'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'}
      
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`); 
      if (!response.ok){
        throw new Error("Network error. Status:", response.status)
      } 

      const data = await response.json()

      console.log(data)

      return data;
    } catch (error) {
       console.log("ERROR fetching console data", error.message) 
    }finally{
      console.log("Finished fetching dog breed");  
    }
    
}
// searchDogBreed('african')

async function handleSubmitBreedSearch(event) {
    event.preventDefault();

    const breed = event.target["search-breed"].value;
    console.log(breed);

    const data = searchDogBreed(breed);
}