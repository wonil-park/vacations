let submitBtn = document.getElementById("submit-btn");

const modify = (e) => {
  e.preventDefault();
  prompt;
};

const remove = (e) => {
  e.preventDefault();
  let answer = confirm("Do you really want to delete this destination?");
  if (answer) {
    let container = e.target.parentElement;
    container.parentElement.remove();
  }
};

const addCard = (event) => {
  event.preventDefault();
  let destination = {
    name: document.getElementById("name").value,
    loc: document.getElementById("loc").value,
    url: document.getElementById("photo-url").value,
    desc: document.getElementById("desc").value,
  };

  if (destination.name === "" || destination.loc === "") {
    alert("Destination name and location are required!");
  } else {
    let dest = document.createElement("div");
    dest.className = "card text-center";

    let pic = document.createElement("img");
    pic.src =
      destination.url !== ""
        ? destination.url
        : "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?$MO_masthead-property-mobile$";
    pic.className = "card-img-top";
    dest.append(pic);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    let name = document.createElement("h5");
    name.className = "card-title";
    name.innerHTML = destination.name;
    let loc = document.createElement("p");
    loc.className = "card-text";
    loc.innerHTML = destination.loc;
    let detail = document.createElement("p");
    detail.className = "card-text";
    detail.innerHTML = destination.desc;
    detail.style.backgroundColor = "rgba(238, 238, 238, 0.919)";

    let btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";

    let edit = document.createElement("a");
    edit.className = "btn btn-primary";
    edit.id = "edit";
    edit.innerHTML = "Edit";
    edit.href = "#";

    let del = document.createElement("a");
    del.className = "btn btn-primary";
    del.id = "delete";
    del.innerHTML = "Delete";
    del.href = "#";

    edit.addEventListener("click", modify);
    del.addEventListener("click", remove);

    cardBody.append(name, loc, detail);
    btnContainer.append(edit, del);
    dest.append(cardBody, btnContainer);

    let container = document.getElementById("container");
    container.append(dest);

    //empty input values once button is clicked
    let arr = Array.from(document.getElementsByClassName("form-control"));
    arr.forEach((el) => (el.value = ""));
  }
};

submitBtn.addEventListener("click", addCard);
