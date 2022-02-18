import state from "./state";
import renderCategory from "./renders/renderCategory";

const getCategory = () => {
  fetch("http://localhost:3000/category")
    .then((res) => res.json())
    .then((categoryList) => {
      state.categories = categoryList;
      renderCategory();
    });
};

export default getCategory;
