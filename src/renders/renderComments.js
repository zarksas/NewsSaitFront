import state from "../state";

const renderComments = async () => {
  const lastNews = document.querySelector(".all_news_block");
  console.log(state.comments);
  state.comments.forEach((comment) => {
    const p = document.createElement("p");
    p.textContent = comment.title;
    lastNews.append(p);
  });
};

export default renderComments;
