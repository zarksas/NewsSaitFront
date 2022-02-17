import state from "../state";

const renderNews = async () => {
  const News = document.querySelector(".all_news_block");
  console.log(state.news);
  state.news.forEach((news) => {
    const p = document.createElement("p");
    p.textContent = news.title;
    News.append(p);
  });
};

export default renderNews;
