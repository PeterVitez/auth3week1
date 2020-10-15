(() => {
  //set up the XMLHttp object
  let myReq = new XMLHttpRequest();

  // make sure we can handle whaterver data comes back, or any errors
  myReq.addEventListener("readystatechange", handleRequest);

  //open a request and pass through the URL of the data that we want
  myReq.open("GET", "../DataSet.json");

  //actually making the request
  myReq.send();

  //handleRequest function goes here
  function handleRequest() {
    if (myReq.readyState === XMLHttpRequest.DONE) {
      // check status here and proceed
      if (myReq.status === 200) {
        // 200 means done and dusted, ready to go with the dataset!
        handleDataSet(myReq.responseText);
      } else {
        // probably got some kind of error code, so handle that
        // a 404, 500 etc... can render appropriate error messages here
        console.error(`${myReq.status} : something done broke, son`);
      }
    } else {
      // request isn't ready yet, keep waiting...
      console.log(`Request state: ${myReq.readyState}. Still processing...`);
    }
  }

  function handleDataSet(data) {
    let myData = JSON.parse(data),
      userSection = document.querySelector(".user-section"),
      userTemplate = document.querySelector("#profs-template").content;

    for (let user in myData) {
      let currentUser = userTemplate.cloneNode(true),
        currentUserText = currentUser.querySelector(".user").children;

      currentUserText[1].textContent = myData[user].name;
      currentUserText[2].textContent = myData[user].role;
      currentUserText[3].textContent = myData[user].nickname;

      userSection.appendChild(currentUser);
    }
  }
})();
