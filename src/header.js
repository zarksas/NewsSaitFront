import renderNews from "./renders/renderNews";

const header = () => {
  const headerMain = document.createElement("header");
  const titleDiv = document.createElement("div");
  const headerHome = document.createElement("div");
  const homeDiv = document.createElement("div");
  const newsDiv = document.createElement("div");
  const categoryDiv = document.createElement("div");

  titleDiv.textContent = "Breaking News";
  homeDiv.textContent = "Home";
  newsDiv.textContent = "News";
  categoryDiv.textContent = "Categories";

  headerMain.classList.add("headermain");
  titleDiv.classList.add("title");
  headerHome.classList.add("headerhome");
  homeDiv.classList.add("homeHeader");
  newsDiv.classList.add("newsHeader");
  categoryDiv.classList.add("categoryHeader");

  headerHome.append(homeDiv, newsDiv, categoryDiv);
  headerMain.append(titleDiv, headerHome);
  document.body.prepend(headerMain);
};

export default header;
