const gallery = document.getElementById("gallery");

let currentPage = 1



 // Fetch 12 random images from Lorem Picsum

 async function fetchImages() {

 try {

 const response = await fetch(

 "https://picsum.photos/v2/list?page=1&limit=10"

 );

 if (!response.ok){
        throw new Error("Network error. Status:", response.status)
      } 

 const data = await response.json();

console.log(data)

 gallery.innerHTML = data

 .map((image) => {

 return `

 <div class="" >

 <img class="rounded-lg w-full h-60 object-cover overflow-hidden hover:scale-105 transition duration-300 ease-in-out" src="${image.download_url}" alt="Random image by ${image.author}" />

 </div>

 `;

 })

 .join("");

 } catch (error) {

 console.error("Failed to fetch images:", error);

 }

 }



 fetchImages();

 renderPagination(data.numFound)

 function renderPagination(numFound){
    console.log(numFound)

    
    const paginationContainer = document.getElementById("pagination-container");
    
    const prevButton = document.createElement('button')
    prevButton.innerHTML = "Previous";

    const nextButton = document.createElement('button')
    prevButton.innerHTML = "Next";

    paginationContainer.appendChild(prevButton);
    paginationContainer.appendChild(nextButton);


 }