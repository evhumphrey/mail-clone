const Router = require('./router.js');
const Inbox = require('./inbox.js');
const Sent = require('./sent.js');
const Compose = require('./compose.js');

document.addEventListener("DOMContentLoaded", function(event) {
  const sidebarNavLi = document.querySelectorAll(".sidebar-nav li");

  sidebarNavLi.forEach((li) => {
    li.addEventListener("click", (e) => {
      window.location.hash = li.innerText.toLowerCase();
    });
  });

  const content = document.querySelector(".content");
  const router = new Router(content, routes);
  router.start();

});

const routes = {
  inbox: Inbox,
  sent: Sent,
  compose: Compose
};
