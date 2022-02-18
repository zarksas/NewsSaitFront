import state from "../state";
import getComments from "../getComments";

const renderNewsCategory = () => {
  const allNewsBlock = document.querySelector(".all_news_block");
  allNewsBlock.textContent = "";
  state.newsCategory.forEach((news) => {
    const titleNewsParagraph = document.createElement("p");

    titleNewsParagraph.classList.add("title_p");

    titleNewsParagraph.textContent = news.title;
    allNewsBlock.append(titleNewsParagraph);
  });
};

export default renderNewsCategory;
