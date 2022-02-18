const getFooter = () => {
  const footer = document.querySelector("footer");

  const blockFirst = document.createElement("div");

  const blockFooter = document.createElement("div");

  const ul = document.createElement("ul");

  const mainFooter = document.createElement("li");

  const categoryFooter = document.createElement("li");

  const weFooter = document.createElement("li");

  const urlMain = document.createElement("a");

  const urlCategory = document.createElement("a");

  const urlWe = document.createElement("a");

  const breakingNews = document.createElement("div");

  footer.classList.add("footer");
  blockFirst.classList.add("blockFirst");
  blockFooter.classList.add("blockFooter");
  breakingNews.classList.add("breakingNews");

  urlMain.textContent = "Новости";
  urlCategory.textContent = "Категории";
  urlWe.textContent = "О нас";
  breakingNews.textContent = "@Breaking-News";

  urlMain.href = "#";
  urlMain.target = "_blank";
  urlCategory.href = "#";
  urlCategory.target = "_blank";
  urlWe.href = "#";
  urlWe.target = "_blank";

  weFooter.append(urlWe);
  categoryFooter.append(urlCategory);
  mainFooter.append(urlMain);
  blockFooter.append(mainFooter, categoryFooter, weFooter);
  blockFirst.append(blockFooter, breakingNews);
  footer.append(blockFirst);
};

export default getFooter;
