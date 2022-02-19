// eslint-disable-next-line import/no-unresolved
import getFooter from "./footer";
import header from "./header";
import add from "./main";
import "./style";
import getCategory from "./getCategory";
import getNews from "./getNews";

add();
getNews();
getCategory();
header();
getFooter();

const homeDiv = document.querySelector(".homeHeader");

homeDiv.addEventListener("click", () => {
  getNews();
});
