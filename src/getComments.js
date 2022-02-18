import state from "./state";
import renderComments from "./renders/renderComments";

const getComments = () => {
  fetch("http://localhost:3000/comment")
    .then((res) => res.json())
    .then((commentsList) => {
      state.comments = commentsList;
      // renderNews();
    });
};

export default getComments;
