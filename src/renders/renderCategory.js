import state from "../state";
import getNewsCategory from "../getNewsCategory";

const renderCategory = (id) => {
  const categoriesBlock = document.querySelector(".categories_block");
  categoriesBlock.textContent = "";
  state.categories.forEach((category) => {
    const categoryParagraph = document.createElement("p");

    categoryParagraph.classList.add("category_paragraph");

    categoryParagraph.textContent = category.title;

    categoryParagraph.addEventListener("click", () => {
      getNewsCategory(category._id);
    });
    categoriesBlock.append(categoryParagraph);
  });
};

export default renderCategory;
