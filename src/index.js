
// eslint-disable-next-line import/no-unresolved
import "footer";
// eslint-disable-next-line import/no-unresolved
import "style";
// eslint-disable-next-line import/no-unresolved
import "index";

import header from "./header";
import add from "./main";
import "./style";
import getComments from "./getComments";
import getNews from "./getNews";

add();
getComments();
getNews();
header();

