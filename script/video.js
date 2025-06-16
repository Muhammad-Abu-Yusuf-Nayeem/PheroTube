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
    .then((data) => console.log(data))
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

loadCategories();
loadVideos();
