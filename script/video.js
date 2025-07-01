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

const loadCategoryVideos = (id) => {
  // alert(id);
  //fetch the data
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category))
    .catch((error) => console.log(error));
};

//create display categories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  // add data in html
  categories.forEach((element) => {
    //create button
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
      <button onclick="loadCategoryVideos(${element.category_id})" class="btn">
        ${element.category}
      </button>
    `;

    // add button to category container
    categoryContainer.append(buttonContainer);
  });
};

function getStringTime(time) {
  //get seconds
  const year = parseInt(time / (3600 * 24 * 365));
  time = time - year * 3600 * 24 * 365;
  const month = parseInt(time / (3600 * 24 * 30));
  time = time - month * 3600 * 24 * 30;
  const day = parseInt(time / (3600 * 24));
  time = time - day * 3600 * 24;
  const hour = parseInt(time / 3600);
  time = time - hour * 3600;
  const min = parseInt(time / 60);
  time = time - min * 60;
  const sec = time;
  return `${day}d ${hour}h ${min}m ${sec}s ago`;
  // return `${year}y ${month}m ${day}d ${hour}h ${min}m ${sec}s ago`;
}

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML = "";

  if (videos.length == 0) {
    videoContainer.classList.remove("grid");
    videoContainer.innerHTML = `
    <div class="min-h-[300] flex flex-col gap-5 justify-center items-center pt-[100px]">
      <img src="assets/Icon.png"/>
      <h2 class="text-center text-xl font-bold">No content here</h2>
    </div>
  
    `;
    return;
  } else {
    videoContainer.classList.add("grid");
  }
  videos.forEach((video) => {
    // console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
   
  <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" /> 
      ${
        video.others.posted_date?.length == 0
          ? ""
          : `<span class="absolute right-2 bottom-2 text-xs text-white bg-black rounded p-1">
  ${getStringTime(video.others.posted_date)}
</span>`
      }
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
      <img class="w-10 h-10 rounded-full object-cover" src=${
        video.authors[0].profile_picture
      }/>
    </div>
    <div>
      <h2 class="font-bold">${video.title}</h2>
      <div class="flex item-center gap-2">
        <p class="text-gray-400">${video.authors[0].profile_name}</p>
        
        ${
          video.authors[0].verified == true
            ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=123575&format=png&color=000000">`
            : ""
        }
      </div>

    </div>
  </div> 

    `;
    videoContainer.append(card);
  });
};
loadCategories();
loadVideos();
