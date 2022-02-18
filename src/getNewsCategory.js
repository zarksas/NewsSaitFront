import state from "./state";
import renderNewsCategory from "./renders/renderNewsCategory";

const getNewsCategory = (id) => {
  fetch(`http://localhost:3000/news/category/${id}`)
    .then((res) => res.json())
    .then((news) => {
      state.newsCategory = news;
      renderNewsCategory();
    });
};

export default getNewsCategory;
