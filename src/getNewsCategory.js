import state from "./state";
import renderNews from "./renders/renderNews";

const getNewsCategory = (id) => {
  fetch(`http://localhost:3000/news/category/${id}`)
    .then((res) => res.json())
    .then((news) => {
      state.news = news;
      renderNews();
    });
};

export default getNewsCategory;
