const state = {
    currentPage: 1,
//  isRateLimit = false   
}
// Rate limiting controls the rate at which users can access a service by limiting the number of allowed requests within a specified period
const gallery = document.getElementById("gallery");




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

    
    const prevButton = document.getElementById("prevButton");

    const nextButton = document.getElementById("nextButton");

    

// 28
 nextButton.onclick = async () => {
    state.currentPage++
     fetchImages(state.currentPage);
 } 
  prevButton.onclick = async () => {
    state.currentPage--
     fetchImages(state.currentPage);
 }    

// const data = await fetchImages(state.currentPage)
//  fetchImages(state.currentPage)

function renderPosts(posts) {

if (state.isRateLimit === false) {
    const data = fetchImages(state.currentPage);
} else {
    alert("Rate limit exceeded. Please wait.");
    return;
  }
renderPosts(posts)
  setTimeout(() => (state.isRateLimit = false), 2000);
 }

 fetchImages(state.currentPage)
// // add rate limit
// fetchImages(state.currentPage)