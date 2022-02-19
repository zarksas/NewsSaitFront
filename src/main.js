import imgPromo from "./reklama1";

const addBlocks = () => {
  const main = document.createElement("main");
  const mainBlock = document.createElement("div");
  const allNewsBlock = document.createElement("div");
  const leftBlock = document.createElement("div");
  const categoriesBlock = document.createElement("div");
  const lastNews = document.createElement("div");
  const img = document.createElement("img");
  img.src = imgPromo;

  img.classList.add("img");
  mainBlock.classList.add("main_block");
  allNewsBlock.classList.add("all_news_block");
  leftBlock.classList.add("left_block");
  categoriesBlock.classList.add("categories_block");
  lastNews.classList.add("last_news");

  lastNews.append(img);
  leftBlock.append(categoriesBlock, lastNews);
  mainBlock.append(leftBlock, allNewsBlock);
  main.append(mainBlock);

  document.body.prepend(main);
};

export default addBlocks;
