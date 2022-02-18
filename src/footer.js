// eslint-disable-next-line no-undef
const footer = document.querySelector("footer");
// eslint-disable-next-line no-undef
const blockFirst = document.createElement("div");
// eslint-disable-next-line no-undef
const blockFooter = document.createElement("div");
// eslint-disable-next-line no-undef
const ul = document.createElement("ul");
// eslint-disable-next-line no-undef
const mainFooter = document.createElement("li");
// eslint-disable-next-line no-undef
const categoryFooter = document.createElement("li");
// eslint-disable-next-line no-undef
const weFooter = document.createElement("li");
// eslint-disable-next-line no-undef
const urlMain = document.createElement("a");
// eslint-disable-next-line no-undef
const urlCategory = document.createElement("a");
// eslint-disable-next-line no-undef
const urlWe = document.createElement("a");
// eslint-disable-next-line no-undef
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
