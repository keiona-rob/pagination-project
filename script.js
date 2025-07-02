async function searchDogBreed(breed) {
    try {
    
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

    const data = await searchDogBreed(breed);

    renderImages(data)
}


function renderImages(dogData){
    const picsContainer = document.getElementById("pics-container")

 dogData.message.forEach(breed => {
    const photoElement = document.createElement("div");
    photoElement.innerHTML =  breed.message;
    picsContainer.appendChild(photoElement);
 });   
}

// .map((photo) => {

//  return `

//  <div>

//  <img src="${photo.message}"/>

//  </div>

//  `;

//  })