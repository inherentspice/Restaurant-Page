import loadMenu from "./menu.js";
import reload from "./reload.js";
import footer from "./footer.js";

export default function loadHome(cached) {
  const mainContent = cached.mainDocumentBody;

  const imageDivData = [
    {
      "src": "./menu/cheese-soda.png",
      "text": "cheese soda"
    },
    {
      "src": "./menu/ant-cocktail.png",
      "text": "ant cocktail"
    },
    {
      "src": "./menu/blood-margarita.png",
      "text": "blood margarita"
    },
    {
      "src": "./menu/poison-cocktail.png",
      "text": "poison cocktail"
    }
  ];

  const leadImageDiv = document.createElement("div");
  leadImageDiv.className = "lead-image-cont";
  const leadImageTextTitle = document.createElement("p");
  leadImageTextTitle.textContent = "Existential Dread Pancakes";
  leadImageTextTitle.className = "lead-image-title lead-image";
  const leadImageSubtitle = document.createElement("p");
  leadImageSubtitle.textContent = "Mouth-Watering Pancakes with a Dollop of Dread";
  leadImageSubtitle.className = "lead-image-subtitle lead-image";
  const menuButton = document.createElement("button");
  menuButton.className = "lead-image-menu-btn";
  menuButton.innerText = "Click here for more menu items";
  menuButton.addEventListener("click", () => {
    reload(cached);
    loadMenu(cached);
  });
  leadImageDiv.appendChild(leadImageTextTitle);
  leadImageDiv.appendChild(leadImageSubtitle);
  leadImageDiv.appendChild(menuButton);
  mainContent.appendChild(leadImageDiv);

  // create div that describes the restaurant
  const restaurantDiv = document.createElement("div");
  restaurantDiv.className = "home-segment alt";
  const restaurantImageDiv = document.createElement("div");
  restaurantImageDiv.className = "image-cont";
  const restaurantImage = document.createElement("img");
  restaurantImage.src = "./menu/ai-restaurant-interior.png";
  const restaurantDescriptionDiv = document.createElement("div");
  restaurantDescriptionDiv.className = "description-cont";
  const restaurantHeading = document.createElement("h1");
  restaurantHeading.textContent = "AI Restaurant";
  const restaurantSubHeading = document.createElement("h3");
  restaurantSubHeading.textContent = "Proudly Serving AI Generated Food in the Heart of New Chusan since 2024";
  const restaurantText = document.createElement("p");
  restaurantText.textContent = "We've been pushing the limits of what can be considered food for over twenty years.";
  const restaurantTextParaTwo = document.createElement("p");
  restaurantTextParaTwo.textContent = "Whether it be skirting perfection with our Salmon Carnival Cake, or defying \
  the laws of god and man with our signature Narwal Surprise Burger: we gaurantee that when you leave AI Restaurant, \
  you leave with a story.";
  restaurantImageDiv.appendChild(restaurantImage);
  restaurantDescriptionDiv.appendChild(restaurantHeading);
  restaurantDescriptionDiv.appendChild(restaurantSubHeading);
  restaurantDescriptionDiv.appendChild(restaurantText);
  restaurantDescriptionDiv.appendChild(restaurantTextParaTwo);
  restaurantDiv.appendChild(restaurantImageDiv);
  restaurantDiv.appendChild(restaurantDescriptionDiv);
  mainContent.appendChild(restaurantDiv);

  // create div display of restaurants drinks
  const drinkImagesDiv = document.createElement("div");
  drinkImagesDiv.className = "drink-images-cont";

  imageDivData.forEach((image, index) => {
    const drinkImageDiv = document.createElement("div");
    drinkImageDiv.className = `drink-image-cont box-${index}`;
    const drinkImage = document.createElement("img");
    drinkImage.src = image.src;
    const drinkText = document.createElement("p");
    drinkText.className = "drink-text";
    drinkText.textContent = image.text;
    drinkImageDiv.appendChild(drinkImage);
    drinkImageDiv.appendChild(drinkText);
    drinkImagesDiv.appendChild(drinkImageDiv);
    mainContent.appendChild(drinkImagesDiv);
  });

  // event listener so that on click the drinks go from stacked on top
  // to laid out in a line
  drinkImagesDiv.addEventListener("click", () => {
    if (drinkImagesDiv.className !== "drink-images-cont spread") {
      drinkImagesDiv.className += " spread";
      drinkImagesDiv.childNodes.forEach((item) => item.className += " spread");
    }
  });



  // create div of information about the restaurant's chef
  const chefDiv = document.createElement("div");
  chefDiv.className = "home-segment alt";
  const chefImageDiv = document.createElement("div");
  chefImageDiv.className = "image-cont";
  const chefImage = document.createElement("img");
  chefImage.src = "./menu/ai-restaurant-chef.png";
  const chefDescriptionDiv = document.createElement("div");
  chefDescriptionDiv.className = "description-cont";
  const chefHeading = document.createElement("h1");
  chefHeading.textContent = "Meet Our Chef";
  const chefSubHeading = document.createElement("h3");
  chefSubHeading.textContent = "Roberto Roboto";
  const chefText = document.createElement("p");
  chefText.textContent = "Roberto attended cooking school in France at the Maulin De Morgan's Restaurant \
  on the now disappeared French Riviera. Now, he was taken New Chusan by storm. If he isn't plugged into \
  his designated Cool-Tech brand charging station, you'll find him behind the stove, creating affronts \
  to nature / dreams.";
  chefImageDiv.appendChild(chefImage);
  chefDescriptionDiv.appendChild(chefHeading);
  chefDescriptionDiv.appendChild(chefSubHeading);
  chefDescriptionDiv.appendChild(chefText);
  chefDiv.appendChild(chefDescriptionDiv);
  chefDiv.appendChild(chefImageDiv);
  mainContent.appendChild(chefDiv);

  footer(cached);
}
