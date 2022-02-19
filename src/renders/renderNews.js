import state from "../state";
import getComments from "../getComments";

const renderNews = async () => {
  const News = document.querySelector(".all_news_block");

  News.textContent = "";
  state.news.forEach((news, indexNews) => {
    const p = document.createElement("p");
    p.classList.add("title_p");
    p.textContent = news.title;
    News.append(p);
    p.addEventListener("click", () => {
      News.textContent = "";
      const title = document.createElement("h1");
      title.textContent = news.title;
      p.textContent = news.text;
      p.classList.remove("title_p");
      p.style.fontSize = "16.5px";
      const back = document.createElement("p");
      back.classList.add("back");
      back.textContent = "Back";
      getComments(state.news[indexNews]._id);
      back.addEventListener("click", () => {
        renderNews();
      });

      News.append(title, p, back);
    });
  });
};

export default renderNews;
