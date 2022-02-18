import state from "./state";
import renderNews from "./renders/renderNews";

const getNews = () => {
  fetch("http://localhost:3000/news")
    .then((res) => res.json())
    .then((newsList) => {
      state.news = newsList;
      renderNews();
    });
};

export default getNews;
