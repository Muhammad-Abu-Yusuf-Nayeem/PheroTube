console.log("video script added");

// 1. fetch, load and show categories on html

// create load

const loadCategories = () => {
  //fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
const loadVideos = () => {
  //fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

//create display categories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  // add data in html
  categories.forEach((element) => {
    console.log(element);

    //create button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = element.category;

    // add button to category container
    categoryContainer.append(button);
  });
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
   
  <figure class="h-[200px]">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" /> 
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
      <img src=${video.authors[0].profile_picture}/>
    </div>
    <div>
      <h2></h2>
      <p></p>
    </div>;
  </div> 

    `;
    videoContainer.append(card);
  });
};
loadCategories();
loadVideos();
