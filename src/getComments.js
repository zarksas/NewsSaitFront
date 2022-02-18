import state from "./state";
import renderComments from "./renders/renderComments";

const getComments = (id) => {
  fetch(`http://localhost:3000/comment/news/${id}`)
    .then((res) => res.json())
    .then((commentsList) => {
      state.comments = commentsList;
      renderComments();
    });
};

export default getComments;
