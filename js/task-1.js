(() => {
  const categories = document.querySelector("#categories");
  const categoryItems = Array.from(categories.querySelectorAll(".item"));

  if (categoryItems.length > 0) {
    checkCategoryNumber(categoryItems);
    categoryItems?.forEach((item) => checkCategoryValues(item));
  }

  function checkCategoryNumber(array) {
    console.log("Number of categories:", array.length);
  }
  function checkCategoryValues(item) {
    const categoryTitle = item.querySelector("h2");
    const categoryListElements = item.querySelectorAll("li");

    console.log("Category:", categoryTitle.textContent);
    console.log("Elements:", categoryListElements.length);
  }
})();
