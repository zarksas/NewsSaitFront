import state from "../state";

const renderComments = async () => {
  const lastNews = document.querySelector(".all_news_block");
  const commetnsChap = document.createElement("p");
  commetnsChap.classList.add("comments_chap");
  commetnsChap.textContent = "Comments";
  console.log(state.comments.name);
  state.comments.forEach((comment) => {
    const titleParagraph = document.createElement("p");
    const comentatorParagraph = document.createElement("p");
    comentatorParagraph.classList.add("commentator_paragraph");
    titleParagraph.classList.add("title_paragraph");

    titleParagraph.textContent = comment.title;
    comentatorParagraph.textContent = comment.nameCommentator;
    lastNews.append(comentatorParagraph, titleParagraph);
  });
  const comentatorParagraph = document.querySelector(".commentator_paragraph");
  comentatorParagraph.before(commetnsChap);
};

export default renderComments;
