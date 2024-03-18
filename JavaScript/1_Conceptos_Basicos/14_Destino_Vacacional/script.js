(function () {
  "use strict";

  /* Adding the Event Handler */
  const detailsForm = document.querySelector("#destination_details_form");

  detailsForm.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();

    // 1.- Extract the value from each form field.
    const destName = event.target.elements["name"].value;
    const destLocation = event.target.elements["location"].value;
    const destPhoto = event.target.elements["photo"].value;
    const destDesc = event.target.elements["description"].value;

    // 2.- Clear out the form fields.
    for (let i = 0; i < detailsForm.length; i++) {
      detailsForm.elements[i].value = "";
    }

    const destCard = createDestinationCard(
      destName,
      destLocation,
      destPhoto,
      destDesc
    );

    // 3.- Run a function that creates the new card.
    const wishListContainer = document.getElementById("destinations_container");

    // 4.- If needed, change the header at the top of the destination list.
    if (wishListContainer.children.length === 0) {
      document.getElementById("title").innerHTML = "My Wish List";
    }

    document.querySelector("#destinations_container").appendChild(destCard);
  }

  // 5.- Add the card.
  function createDestinationCard(name, location, photoURL, description) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.setAttribute("alt", name);

    const constantPhotoUrl = "./images/signpost.jpg";
    if (photoURL.length === 0) {
      img.setAttribute("src", constantPhotoUrl);
    } else {
      img.setAttribute("src", photoURL);
    }
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    const cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if (description.lenght !== 0) {
      var cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.innerText = description;
      cardBody.appendChild(cardText);
    }

    const cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";

    cardDeleteBtn.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);

    return card;
  }

  //Removing the Card
  function removeDestination(event) {
    const card = event.target.parentElement.parentElement;
    card.remove();
  }
})();
