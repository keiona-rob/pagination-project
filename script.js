const state = {
    currentPage: 1,
}

const gallery = document.getElementById("gallery");

// let currentPage = 1



 // Fetch 12 random images from Lorem Picsum

 async function fetchImages(page) {

 try {

 const response = await fetch(

 `https://picsum.photos/v2/list?page=${page}&limit=10`

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



//  fetchImages(1);

//  renderPagination(data.numFound)

// //  whats data.numFound?

//  function renderPagination(numFound){
//     console.log(numFound)

    
//     const paginationContainer = document.getElementById("pagination-container");
//     // 6/25 18:00
    
    const prevButton = document.getElementById("prevButton");

    const nextButton = document.getElementById("nextButton");

    

// 28
// prevButton.addEventListener(click,event)
 nextButton.onclick = async () => {
    state.currentPage++
     fetchImages(state.currentPage);
 } 
  prevButton.onclick = async () => {
    state.currentPage--
     fetchImages(state.currentPage);
 }    


fetchImages(state.currentPage)