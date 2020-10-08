// import your packages here
import Team from "./modules/DataModule.js";
(() => {
  // stub * just a place for non-component-specific stuff

  let userSection = document.querySelector(".users-section"),
    userTemplate = document.querySelector("#profs-template").content;

  function handleDataSet(data) {
    for (let user in data) {
      let currentUser = userTemplate.cloneNode(true),
        currentUserText = currentUser.querySelector(".user").children;

      currentUserText[1].textContent = data[user].name;
      currentUserText[2].textContent = data[user].role;
      currentUserText[3].textContent = data[user].nickname;

      userSection.appendChild(currentUser);
    }
  }

  handleDataSet(Team);
})();
